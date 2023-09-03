/**
 * hooks/use-lock-body.js
 */

// @see https://usehooks.com/useLockBodyScroll.
export function useLockBody() {
  useLayoutEffect(() => {
    const originalStyle = window.getComputedStyle(
      document.body
    ).overflow
    document.body.style.overflow = "hidden"
    return () => (document.body.style.overflow = originalStyle)
  }, [])
}