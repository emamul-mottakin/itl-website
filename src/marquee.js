const escapeHtml = (value = '') =>
  String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char])

// Each row renders its list twice so translating the track by -50% loops seamlessly.
// The duplicate is hidden from assistive tech and keyboard focus.
function renderList(items, folder, { duplicate }) {
  const body = items
    .map(
      ({ name, logo }) =>
        `<li class="brand" data-name="${escapeHtml(name)}"${duplicate ? '' : ' tabindex="0"'}><img src="${folder}/${logo}" alt="${duplicate ? '' : escapeHtml(name)}" draggable="false" /></li>`,
    )
    .join('')
  return `<ul class="brand-list"${duplicate ? ' aria-hidden="true"' : ''}>${body}</ul>`
}

/**
 * Two-row logo marquee: row 1 scrolls right-to-left, row 2 left-to-right. Hovering or focusing a
 * logo pauses both rows. Items are `{ name, logo, lines? }`; when any item has `lines`, hovering it
 * also shows a tooltip listing them.
 *
 * @param container element that receives the rows (styled by `.brand-rows` in index.css)
 * @param items     logos in display order
 * @param folder    URL of the folder holding the logo files
 */
export function initMarquee(container, items, folder) {
  if (!container) return

  const split = Math.ceil(items.length / 2)
  const rows = [
    { items: items.slice(0, split), direction: 'left', duration: 60 },
    { items: items.slice(split), direction: 'right', duration: 55 },
  ]

  container.innerHTML = rows
    .map(
      ({ items: rowItems, direction, duration }) => `
        <div class="brand-row">
          <div class="brand-track" data-direction="${direction}" style="animation-duration:${duration}s">
            ${renderList(rowItems, folder, { duplicate: false })}${renderList(rowItems, folder, { duplicate: true })}
          </div>
        </div>`,
    )
    .join('')

  if (!items.some((item) => item.lines)) return

  const byName = new Map(items.map((item) => [item.name, item]))
  const tip = document.createElement('div')
  tip.className = 'brand-tip'
  tip.setAttribute('role', 'tooltip')
  tip.hidden = true
  document.body.append(tip)

  const hide = () => {
    tip.hidden = true
  }

  const show = (element) => {
    const item = byName.get(element.dataset.name)
    if (!item?.lines) return

    tip.innerHTML = `
      <strong class="brand-tip-title">${escapeHtml(item.name)}</strong>
      <p class="brand-tip-label">We work with</p>
      <ul>${item.lines.map((line) => `<li>${escapeHtml(line)}</li>`).join('')}</ul>`
    tip.hidden = false

    // Centre above the logo, clamped to the viewport; flip below when there is no room above.
    const rect = element.getBoundingClientRect()
    const { width, height } = tip.getBoundingClientRect()
    const margin = 12
    const left = Math.min(Math.max(rect.left + rect.width / 2 - width / 2, margin), window.innerWidth - width - margin)
    const top = rect.top - height - 12 >= margin ? rect.top - height - 12 : rect.bottom + 12
    tip.style.left = `${left}px`
    tip.style.top = `${top}px`
  }

  container.addEventListener('mouseover', (event) => {
    const element = event.target.closest('.brand')
    if (element) show(element)
  })
  container.addEventListener('mouseout', (event) => {
    if (event.target.closest('.brand') && !event.relatedTarget?.closest?.('.brand')) hide()
  })
  container.addEventListener('focusin', (event) => {
    const element = event.target.closest('.brand')
    if (element) show(element)
  })
  container.addEventListener('focusout', hide)
  document.addEventListener('keydown', (event) => event.key === 'Escape' && hide())
  // Touch: tapping elsewhere dismisses the tooltip.
  document.addEventListener('touchstart', (event) => {
    if (!event.target.closest('.brand')) hide()
  })
}
