// Loading screen: logo + progress bar filling 0 -> 100%, then the screen slides up and the page entrance plays.
// Resolves once the loader has fully left, so the caller can start the scroll-reveal animations.
const MIN_MS = 1800

export function runLoader() {
  const root = document.documentElement
  const loader = document.getElementById('loader')
  if (!loader || !root.classList.contains('loading')) {
    loader?.remove()
    root.classList.remove('loading')
    return Promise.resolve()
  }

  const bar = loader.querySelector('.loader-bar')
  const fill = bar.firstElementChild
  const loaded = document.readyState === 'complete' ? Promise.resolve() : new Promise((r) => addEventListener('load', r, { once: true }))
  let pageReady = false
  loaded.then(() => (pageReady = true))

  return new Promise((resolve) => {
    const start = performance.now()
    let shown = 0
    const frame = (now) => {
      const t = Math.min((now - start) / MIN_MS, 1)
      // Ease-out fill; hold at 92% until the page has actually finished loading.
      let target = 1 - (1 - t) ** 2
      if (!pageReady) target = Math.min(target, 0.92)
      shown = Math.max(shown, target)
      fill.style.transform = `scaleX(${shown})`
      bar.setAttribute('aria-valuenow', Math.round(shown * 100))
      if (shown < 1) return requestAnimationFrame(frame)

      setTimeout(() => {
        loader.classList.add('is-leaving')
        loader.addEventListener(
          'transitionend',
          () => {
            loader.remove()
            root.classList.remove('loading')
            resolve()
          },
          { once: true },
        )
      }, 250)
    }
    requestAnimationFrame(frame)
  })
}
