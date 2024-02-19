export default function getRoot() {
  if (typeof global !== 'undefined') {
    return global
  }

  if (typeof globalThis !== 'undefined') {
    return globalThis
  }

  if (typeof window !== 'undefined') {
    return window
  }
}
