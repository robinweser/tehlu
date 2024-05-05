import React from 'react'

import applyMultiplier from '../../utils/applyMultiplier'

function getDisplayBySize(size) {
  return size === 0 ? 'none' : 'flex'
}

export default function createSpacer({ baselineGrid = 1 }) {
  return function Spacer({ size = 1 }) {
    const { baselineGrid } = getInstance()

    const spacing = applyMultiplier(baselineGrid)
    const space = spacing(size)

    const display = Array.isArray(space)
      ? space.map(getDisplayBySize)
      : getDisplayBySize(space)

    return <El stlyle={{ display, width, flexBasis }} />
  }
}
