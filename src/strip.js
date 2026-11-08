export const escapeHtml = (value = '') =>
  String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char])

// Each row renders its list twice so translating the track by -50% loops seamlessly.
// The duplicate is hidden from assistive tech and keyboard focus.
const list = (items, render, duplicate) =>
  `<ul class="brand-list"${duplicate ? ' aria-hidden="true"' : ''}>${items.map((item) => render(item, duplicate)).join('')}</ul>`

// Scrolling rows: `rows` is [{ items, direction: 'left' | 'right', duration }]. Hovering or
// focusing an item pauses every row (see `.brand-rows` / `.reel` in index.css).
function renderRows(container, rows, render) {
  container.innerHTML = rows
    .map(
      ({ items, direction, duration }) => `
        <div class="brand-row">
          <div class="brand-track" data-direction="${direction}" style="animation-duration:${duration}s">${list(items, render, false)}${list(items, render, true)}</div>
        </div>`,
    )
    .join('')
}

// Tooltip shown above (or below, when there is no room) the hovered or focused `selector` item.
// `html(item)` returns the tooltip markup, or nothing to show no tooltip for that item.
function addTooltip(container, selector, className, html, { gap, rectOf = (item) => item }) {
  const tip = Object.assign(document.createElement('div'), { className, id: `${className}-${Math.random().toString(36).slice(2, 7)}`, hidden: true })
  tip.setAttribute('role', 'tooltip')
  document.body.append(tip)

  const hide = () => (tip.hidden = true)
  const show = (item) => {
    const content = html(item)
    if (!content) return
    tip.innerHTML = content
    tip.hidden = false

    // Centre on the item, clamped to the viewport.
    const rect = rectOf(item).getBoundingClientRect()
    const { width, height } = tip.getBoundingClientRect()
    const margin = 12
    tip.style.left = `${Math.min(Math.max(rect.left + rect.width / 2 - width / 2, margin), innerWidth - width - margin)}px`
    tip.style.top = `${rect.top - height - gap >= margin ? rect.top - height - gap : rect.bottom + gap}px`
  }
  const itemOf = (event) => event.target.closest(selector)

  container.querySelectorAll(`.brand-list:not([aria-hidden]) ${selector}`).forEach((item) => item.setAttribute('aria-describedby', tip.id))
  container.addEventListener('mouseover', (event) => itemOf(event) && show(itemOf(event)))
  container.addEventListener('mouseout', (event) => itemOf(event) && !event.relatedTarget?.closest?.(selector) && hide())
  container.addEventListener('focusin', (event) => itemOf(event) && show(itemOf(event)))
  container.addEventListener('focusout', hide)
  addEventListener('scroll', hide, { passive: true })
  document.addEventListener('keydown', (event) => event.key === 'Escape' && hide())
  // Touch: tapping elsewhere dismisses the tooltip.
  document.addEventListener('touchstart', (event) => event.target.closest(selector) || hide())
}

/**
 * Logo marquee: the logos are split evenly over `rows` rows (default 2) that scroll in opposite
 * directions, the first right-to-left. Items are `{ name, logo, lines? }`; when any item has
 * `lines`, hovering it shows a tooltip listing them.
 *
 * @param container element that receives the rows (`.brand-rows` in index.css)
 * @param items     logos in display order
 * @param folder    URL of the folder holding the logo files
 * @param rows      number of rows
 */
export function initMarquee(container, items, folder, rows = 2) {
  if (!container) return
  const size = Math.ceil(items.length / rows)
  renderRows(
    container,
    Array.from({ length: rows }, (_, i) => ({
      items: items.slice(i * size, (i + 1) * size),
      direction: i % 2 ? 'right' : 'left',
      duration: size * 5, // about 5s per logo keeps the speed the same however many logos a row holds
    })),
    ({ name, logo }, duplicate) =>
      `<li class="brand" data-name="${escapeHtml(name)}"${duplicate ? '' : ' tabindex="0"'}><img src="${folder}/${logo}" alt="${duplicate ? '' : escapeHtml(name)}" draggable="false" /></li>`,
  )

  if (!items.some((item) => item.lines)) return
  const byName = new Map(items.map((item) => [item.name, item]))
  addTooltip(
    container,
    '.brand',
    'brand-tip',
    (el) => {
      const item = byName.get(el.dataset.name)
      return (
        item?.lines &&
        `<strong class="brand-tip-title">${escapeHtml(item.name)}</strong>
         <p class="brand-tip-label">We work with</p>
         <ul>${item.lines.map((line) => `<li>${escapeHtml(line)}</li>`).join('')}</ul>`
      )
    },
    { gap: 12 },
  )
}

/**
 * Single-row film-strip photo reel scrolling right-to-left. Hovering a photo pauses the reel,
 * scales the photo up and shows a tooltip inviting visitors to see all photos on social media;
 * each photo links there.
 *
 * @param photos array of `{ src, alt }`
 * @param folder URL of the folder holding the photos
 * @param href   social media page the photos link to
 */
export function initReel(container, photos, folder, href) {
  if (!container) return
  renderRows(
    container,
    [{ items: photos, direction: 'left', duration: 70 }],
    ({ src, alt }, duplicate) => `
      <li class="reel-frame">
        <a class="reel-photo" href="${href}" target="_blank" rel="noopener noreferrer"${duplicate ? ' tabindex="-1"' : ''}>
          <img src="${folder}/${src}" alt="${duplicate ? '' : escapeHtml(alt)}" draggable="false" />
        </a>
      </li>`,
  )
  addTooltip(
    container,
    '.reel-photo',
    'reel-tip',
    () => `<strong class="reel-tip-title">Want to see more?</strong><p>Visit our Facebook page for all photos and events.</p>`,
    { gap: 6, rectOf: (photo) => photo.closest('.reel-frame') },
  )
}
