// Scroll reveal (fade + slide up, staggered inside groups) and count-up numbers.
// Skipped entirely under prefers-reduced-motion, so nothing is ever left hidden.
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)]

const countUp = (el, delay) => {
  const [, digits, suffix] = el.textContent.match(/^([\d.]+)(.*)$/) ?? []
  if (!digits) return
  const decimals = digits.split('.')[1]?.length ?? 0
  const start = performance.now() + delay
  el.classList.add('tabular-nums')
  const frame = (now) => {
    const t = Math.min(Math.max((now - start) / 1400, 0), 1)
    el.textContent = (parseFloat(digits) * (1 - (1 - t) ** 3)).toFixed(decimals) + suffix
    if (t < 1) requestAnimationFrame(frame)
  }
  requestAnimationFrame(frame)
}

export function initMotion() {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return

  const items = []
  const single = (selector) => $$(selector).forEach((el) => items.push([el, 0]))
  const group = (parents) => parents.forEach((parent) => [...parent.children].forEach((el, i) => items.push([el, Math.min(i, 5) * 70])))

  single('main > section > header, main > section > div > header, #why-indesore .wrap > div:first-child, #brands-label, .brand-rows, .reel, #departments > div')
  group([
    ...$$('[aria-label="Company statistics"], main ol, main > section:last-of-type, footer > div:first-child'),
    ...new Set($$('main article:not(#dept-panel)').map((card) => card.parentElement)),
  ])

  const observer = new IntersectionObserver(
    (entries) =>
      entries.forEach(({ target, isIntersecting }) => {
        if (!isIntersecting) return
        observer.unobserve(target)
        target.classList.add('in')
        const delay = parseFloat(target.style.getPropertyValue('--d'))
        ;(target.matches('strong') ? [target] : $$('strong', target)).forEach((el) => countUp(el, delay))
      }),
    { threshold: 0.15 },
  )
  items.forEach(([el, delay]) => {
    el.classList.add('reveal')
    el.style.setProperty('--d', `${delay}ms`)
    observer.observe(el)
  })
}
