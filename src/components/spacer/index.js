import React from 'react'

import Box from '../box'

import getInstance from '../../utils/getInstance'
import applyMultiplier from '../../utils/applyMultiplier'

function getDisplayBySize(size) {
  return size === 0 ? 'none' : 'flex'
}

export default function Spacer({ size = 1 }) {
  const { baselineGrid } = getInstance()

  const spacing = applyMultiplier(baselineGrid)
  const space = spacing(size)

  const display = Array.isArray(space)
    ? space.map(getDisplayBySize)
    : getDisplayBySize(space)

  return <Box display={display} width={space} basis={space} />
}
