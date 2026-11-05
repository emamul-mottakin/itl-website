const escapeHtml = (value = '') =>
  String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char])

// Each row renders its list twice so translating the track by -50% loops seamlessly.
// The duplicate is hidden from assistive tech and keyboard focus.
function renderList(photos, folder, href, { duplicate }) {
  const body = photos
    .map(
      ({ src, alt }) => `
        <li class="reel-frame">
          <a class="reel-photo" href="${href}" target="_blank" rel="noopener noreferrer"${duplicate ? ' tabindex="-1"' : ''}>
            <img src="${folder}/${src}" alt="${duplicate ? '' : escapeHtml(alt)}" draggable="false" />
          </a>
        </li>`,
    )
    .join('')
  return `<ul class="reel-list"${duplicate ? ' aria-hidden="true"' : ''}>${body}</ul>`
}

/**
 * Two-row film-strip photo reel: row 1 scrolls right-to-left, row 2 left-to-right.
 * Hovering or focusing a photo pauses both rows, scales the photo up and shows a tooltip
 * inviting the visitor to see every photo on social media (each photo links there).
 *
 * @param container element that receives the rows (styled by `.reel` in index.css)
 * @param rows      array of rows, each an array of `{ src, alt }`
 * @param folder    URL of the folder holding the photos
 * @param href      social media page the photos link to
 */
export function initReel(container, rows, folder, href) {
  if (!container) return

  container.innerHTML = rows
    .map(
      (photos, i) => `
        <div class="reel-row">
          <div class="reel-track" data-direction="${i % 2 ? 'right' : 'left'}">
            ${renderList(photos, folder, href, { duplicate: false })}${renderList(photos, folder, href, { duplicate: true })}
          </div>
        </div>`,
    )
    .join('')

  const tip = document.createElement('div')
  tip.className = 'reel-tip'
  tip.setAttribute('role', 'tooltip')
  tip.id = 'reel-tip'
  tip.hidden = true
  tip.innerHTML = `
    <strong class="reel-tip-title">Want to see more?</strong>
    <p>Visit our Facebook page for all photos and events.</p>`
  document.body.append(tip)

  const hide = () => {
    tip.hidden = true
  }

  const show = (photo) => {
    tip.hidden = false
    // Centre above the photo, clamped to the viewport; flip below when there is no room above.
    const rect = photo.closest('.reel-frame').getBoundingClientRect()
    const { width, height } = tip.getBoundingClientRect()
    const margin = 12
    const left = Math.min(Math.max(rect.left + rect.width / 2 - width / 2, margin), window.innerWidth - width - margin)
    const top = rect.top - height - 6 >= margin ? rect.top - height - 6 : rect.bottom + 6
    tip.style.left = `${left}px`
    tip.style.top = `${top}px`
  }

  container.querySelectorAll('.reel-list:not([aria-hidden]) .reel-photo').forEach((photo) => {
    photo.setAttribute('aria-describedby', tip.id)
  })

  container.addEventListener('mouseover', (event) => {
    const photo = event.target.closest('.reel-photo')
    if (photo) show(photo)
  })
  container.addEventListener('mouseout', (event) => {
    if (event.target.closest('.reel-photo') && !event.relatedTarget?.closest?.('.reel-photo')) hide()
  })
  container.addEventListener('focusin', (event) => {
    const photo = event.target.closest('.reel-photo')
    if (photo) show(photo)
  })
  container.addEventListener('focusout', hide)
  window.addEventListener('scroll', hide, { passive: true })
  document.addEventListener('keydown', (event) => event.key === 'Escape' && hide())
}
