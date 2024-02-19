import namespace from './namespace'
import getRoot from './getRoot'

export default function getInstance() {
  const root = getRoot()

  if (!root || !root[namespace]) {
    console.error(
      "Ambrose: No configuration found. Either your environment doesn't support `global` or you forgot to call `configureSystem` from `@ambrose/system` first."
    )
  }

  return root[namespace]
}
