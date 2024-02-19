import * as React from 'react'

import getRoot from '../../utils/getRoot'
import namespace from '../../utils/namespace'

export default function Provider({ system, children }) {
  const root = getRoot()
  root[namespace] = system

  return children
}
