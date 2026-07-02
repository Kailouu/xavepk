import type { Directive } from 'vue'

// v-reveal directive: fades + slides an element in the first time it scrolls into view.
// Optional arg staggers children instead: v-reveal:children
const observer = typeof IntersectionObserver !== 'undefined'
  ? new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer!.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )
  : null

export const vReveal: Directive<HTMLElement> = {
  mounted(el, binding) {
    if (!observer) {
      el.classList.add('revealed')
      return
    }
    if (binding.arg === 'children') {
      Array.from(el.children).forEach((child, i) => {
        child.classList.add('reveal')
        ;(child as HTMLElement).style.transitionDelay = `${i * 80}ms`
        observer.observe(child)
      })
    } else {
      el.classList.add('reveal')
      observer.observe(el)
    }
  },
}
