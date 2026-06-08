import type { Directive } from 'vue'

/**
 * v-reveal — fades/rises an element into view the first time it intersects
 * the viewport. Pairs with the `.reveal` / `.reveal--visible` styles.
 */
export const reveal: Directive<HTMLElement> = {
  mounted(el) {
    el.classList.add('reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.classList.add('reveal--visible')
            observer.unobserve(el)
          }
        }
      },
      { threshold: 0.12 },
    )
    observer.observe(el)
  },
}