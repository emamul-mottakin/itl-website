import './index.css'
import { departmentDetails } from './data/departments.js'
import { initMarquee } from './marquee.js'
import { initReel } from './reel.js'
import { lifeRows, lifeSocialUrl } from './data/life.js'
import { brands } from './data/brands.js'
import { certificates } from './data/certificates.js'

const A = `${import.meta.env.BASE_URL}assets`
const IMPACT_ICONS = ['84ecf.svg', '1c7db.svg', 'bf0b0.svg', 'dd56e.svg']

const $ = (selector, root = document) => root.querySelector(selector)
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)]

const escapeHtml = (value = '') =>
  String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char])

/* ---------------------------------------------------------------------------
 * Modal helper: open/close a [hidden] backdrop, close on backdrop click and
 * Escape, and return focus to whatever opened it.
 * ------------------------------------------------------------------------- */
function createModal(backdrop, { onEscape, onClose } = {}) {
  let returnFocus = null

  const close = () => {
    if (backdrop.hidden) return
    backdrop.hidden = true
    document.removeEventListener('keydown', handleKey)
    onClose?.()
    returnFocus?.focus()
  }

  const handleKey = (event) => {
    if (event.key !== 'Escape') return
    // onEscape can return true to swallow Escape (e.g. step back a view first).
    if (onEscape?.()) return
    close()
  }

  const open = (focusTarget) => {
    returnFocus = document.activeElement
    backdrop.hidden = false
    document.addEventListener('keydown', handleKey)
    focusTarget?.focus()
  }

  backdrop.addEventListener('mousedown', (event) => {
    if (event.target === backdrop) close()
  })

  return { open, close }
}

/* ---------------------------------------------------------------------------
 * Navigation
 * ------------------------------------------------------------------------- */
$('[data-scroll-top]').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }))

/* ---------------------------------------------------------------------------
 * Contact modal
 * ------------------------------------------------------------------------- */
const contactBackdrop = $('#contact-modal')
const contactForm = $('#contact-form')
const contactModal = createModal(contactBackdrop)

$$('[data-open-contact]').forEach((button) =>
  button.addEventListener('click', () => contactModal.open($('input[name="name"]', contactForm))),
)
$$('[data-close-contact]').forEach((button) => button.addEventListener('click', contactModal.close))
contactForm.addEventListener('submit', (event) => {
  event.preventDefault()
  contactForm.reset()
  contactModal.close()
})

/* ---------------------------------------------------------------------------
 * Newsletter
 * ------------------------------------------------------------------------- */
// TODO: send the address to the newsletter backend once it exists; for now this only confirms in the UI.
const newsletterForm = $('#newsletter-form')
const newsletterStatus = $('#newsletter-status')
newsletterForm.addEventListener('submit', (event) => {
  event.preventDefault()
  newsletterForm.reset()
  newsletterStatus.textContent = 'Thanks, you are subscribed.'
  setTimeout(() => (newsletterStatus.textContent = ''), 5000)
})

/* ---------------------------------------------------------------------------
 * Departments: vertical tab list + details panel
 * ------------------------------------------------------------------------- */
const deptTabList = $('#dept-tabs')
const deptTabs = $$('[role="tab"]', deptTabList)
const deptSlot = $('#dept-panel-slot')

const DEPT_LABEL =
  'flex items-center gap-[15px] text-xs tracking-eyebrow text-faint before:h-px before:w-[30px] before:flex-none before:bg-[#d9d9d9]'

// Previous / Next department card at the foot of the panel, so nobody has to scroll back up to move on.
function neighbour(target, label) {
  if (target < 0 || target >= deptTabs.length) return '<span aria-hidden="true"></span>'
  const next = label === 'Next'
  const arrow = `<svg class="size-4 flex-none" viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="${next ? 'm9 6 6 6-6 6' : 'm15 6-6 6 6 6'}" /></svg>`
  return `
    <button type="button" data-dept-go="${target}" class="group flex items-center gap-3 rounded-lg border border-line bg-white px-4 py-3 text-left transition hover:border-ink hover:shadow-card ${next ? 'flex-row-reverse text-right' : ''}">
      ${arrow}
      <span class="min-w-0">
        <span class="block text-xs tracking-eyebrow text-faint uppercase">${label}</span>
        <span class="block font-heading text-sm leading-[1.35] max-sm:text-[13px]">${escapeHtml(deptTabs[target].dataset.department)}</span>
      </span>
    </button>`
}

function renderDepartmentPanel(index) {
  const dept = departmentDetails.find((item) => item.name === deptTabs[index].dataset.department) ?? departmentDetails[0]

  const impact = dept.impact
    .map(
      ([title, copy], i) => `
        <div class="flex flex-col gap-2.5 rounded-[10px] bg-white p-5 max-sm:p-4">
          <div class="flex items-center gap-3">
            <span class="grid size-[30px] flex-none place-items-center rounded-full bg-chip"><img class="size-2.5" src="${A}/${IMPACT_ICONS[i]}" alt="" /></span>
            <h4 class="font-heading text-base leading-[1.3] max-sm:text-[15px]">${escapeHtml(title)}</h4>
          </div>
          <p class="text-sm leading-[1.55] text-muted max-sm:text-[13px]">${escapeHtml(copy)}</p>
        </div>`,
    )
    .join('')

  const goals = dept.goals
    .map(
      ([title, copy], i) => `
        <div class="flex items-center gap-3.5 rounded-[67px] border border-line bg-white py-3 pr-[18px] pl-3 max-sm:rounded-3xl max-sm:pr-4">
          <span class="grid size-10 flex-none place-items-center rounded-full border border-line bg-soft font-heading text-base">${i + 1}</span>
          <div class="flex min-w-0 flex-col gap-0.5">
            <h4 class="font-heading text-base leading-[1.4] max-sm:text-[15px]">${escapeHtml(title)}</h4>
            <p class="text-sm leading-[1.45] text-muted max-sm:text-[13px]">${escapeHtml(copy)}</p>
          </div>
        </div>`,
    )
    .join('')

  // A fresh element each time so the fade-in animation replays.
  deptSlot.innerHTML = `
    <article id="dept-panel" role="tabpanel" aria-labelledby="dept-tab-${index}" tabindex="-1" class="overflow-hidden rounded-[10px] border border-[#ececec] bg-white shadow-[0_0_20px_rgba(108,108,108,0.1)]">
      <div class="animate-panel-in grid grid-cols-[minmax(0,1fr)_280px] items-center gap-9 p-10 max-lg:grid-cols-[minmax(0,1fr)_220px] max-lg:gap-6 max-lg:p-8 max-sm:grid-cols-1 max-sm:gap-5 max-sm:px-5 max-sm:py-6">
        <div class="flex flex-col items-start gap-3">
          <p class="${DEPT_LABEL}">${escapeHtml(dept.name.toUpperCase())}</p>
          <h3 class="font-heading text-[26px] leading-[1.3] max-sm:text-[22px]">${escapeHtml(dept.title)}</h3>
          <p class="text-base leading-[1.6] text-muted max-sm:text-[15px]">${escapeHtml(dept.intro)}</p>
          <div class="mt-1 flex flex-wrap gap-2">
            ${dept.tags.map((tag) => `<span class="rounded-[27px] bg-pill px-3 py-0.5 text-sm leading-display text-muted">${escapeHtml(tag)}</span>`).join('')}
          </div>

        </div>
        <div class="rounded-2xl bg-white p-2 shadow-ring max-sm:-order-1">
          <div class="relative aspect-[4/5] overflow-hidden rounded-[10px] max-sm:aspect-video">
            <img class="absolute inset-0 size-full object-cover" src="${A}/12850.webp" alt="" />
          </div>
        </div>
      </div>
      <div style="animation-delay:70ms" class="animate-panel-in flex flex-col gap-6 bg-[#f7f7f7] px-10 py-9 max-lg:px-8 max-sm:px-5 max-sm:py-6">
        <p class="${DEPT_LABEL}">OUR IMPACT</p>
        <div class="grid grid-cols-2 gap-4 max-sm:grid-cols-1">${impact}</div>
      </div>
      <div style="animation-delay:140ms" class="animate-panel-in flex flex-col gap-6 px-10 py-9 max-lg:px-8 max-sm:gap-4 max-sm:px-5 max-sm:py-6">
        <p class="${DEPT_LABEL}">FUTURE GOALS</p>
        <div class="grid grid-cols-2 gap-3.5 max-sm:grid-cols-1">${goals}</div>
      </div>
      <div class="grid grid-cols-2 gap-3 border-t border-line bg-mist p-4 max-sm:hidden">${neighbour(index - 1, 'Previous')}${neighbour(index + 1, 'Next')}</div>
    </article>`
}

const dock = $('#dept-dock')
const dockChips = $$('[data-dock]', dock)
const dockList = dock
const deptStatus = $('#dept-status')
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
const tabletOnly = window.matchMedia('(min-width: 700px) and (max-width: 899.98px)')

// Scroll a strip/list just enough to keep `el` in view (never scrolls the page itself).
function keepVisible(container, el) {
  if (container.scrollWidth > container.clientWidth) {
    const box = container.getBoundingClientRect()
    const rect = el.getBoundingClientRect()
    const left = rect.left - box.left + container.scrollLeft - (container.clientWidth - rect.width) / 2
    container.scrollTo({ left, behavior: reduceMotion.matches ? 'auto' : 'smooth' })
  } else if (container.scrollHeight > container.clientHeight) {
    const box = container.getBoundingClientRect()
    const rect = el.getBoundingClientRect()
    if (rect.top < box.top + 8) container.scrollTop -= box.top + 8 - rect.top
    else if (rect.bottom > box.bottom - 8) container.scrollTop += rect.bottom - box.bottom + 8
  }
}

// Bring the top of the details panel back into view, clear of the sticky nav (and the sticky tablet strip).
function revealPanel() {
  const panel = $('#dept-panel')
  const nav = $('nav[aria-label="Main navigation"]')
  let offset = nav.getBoundingClientRect().bottom + 12
  if (tabletOnly.matches) offset += deptTabList.offsetHeight + 12
  const delta = panel.getBoundingClientRect().top - offset
  if (delta < -2) window.scrollBy({ top: delta, behavior: reduceMotion.matches ? 'auto' : 'smooth' })
}

let currentDepartment = 0

function selectDepartment(index, { focus = false, focusPanel = false, reveal = true } = {}) {
  currentDepartment = index
  deptTabs.forEach((tab, i) => {
    const active = i === index
    tab.setAttribute('aria-selected', String(active))
    tab.tabIndex = active ? 0 : -1
  })
  dockChips.forEach((chip, i) => chip.setAttribute('aria-current', String(i === index)))
  deptStatus.textContent = `${deptTabs[index].dataset.department}, department ${index + 1} of ${deptTabs.length}`

  if (focus) deptTabs[index].focus()
  keepVisible(deptTabList, deptTabs[index])
  keepVisible(dockList, dockChips[index])

  renderDepartmentPanel(index)
  if (focusPanel) $('#dept-panel').focus({ preventScroll: true })
  if (reveal) revealPanel()
}

deptTabs.forEach((tab, index) => tab.addEventListener('click', () => selectDepartment(index)))
dockChips.forEach((chip, index) => chip.addEventListener('click', () => selectDepartment(index)))

// Delegated: previous/next cards inside the panel.
deptSlot.addEventListener('click', (event) => {
  const go = event.target.closest('[data-dept-go]')
  if (go) return selectDepartment(Number(go.dataset.deptGo), { focusPanel: true })
})

// Roving focus: arrow keys / Home / End move through the departments.
deptTabList.addEventListener('keydown', (event) => {
  const last = deptTabs.length - 1
  const next = {
    ArrowDown: (currentDepartment + 1) % deptTabs.length,
    ArrowRight: (currentDepartment + 1) % deptTabs.length,
    ArrowUp: (currentDepartment - 1 + deptTabs.length) % deptTabs.length,
    ArrowLeft: (currentDepartment - 1 + deptTabs.length) % deptTabs.length,
    Home: 0,
    End: last,
  }[event.key]
  if (next === undefined) return
  event.preventDefault()
  selectDepartment(next, { focus: true, reveal: false })
})

selectDepartment(0, { reveal: false })

initMarquee($('[data-brands]'), brands, `${A}/brands`)
initMarquee($('[data-certificates]'), certificates, `${A}/certificates`)
initReel($('[data-life-reel]'), lifeRows, `${A}/life-at-indesore`, lifeSocialUrl)
