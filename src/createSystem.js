import { createHooks } from 'brandeur'
import { objectMergeDeep } from 'fast-loops'

import createEl from './components/el/createEl'

import defaultConfig from './utils/defaultConfig'
import namespace from './utils/namespace'
import getRoot from './utils/getRoot'

export default function createSystem(config) {
  const {
    hooks,
    themes,
    keyframes,
    fallbacks,
    plugins = [],
    linkComponent,
    baselineGrid = 1,
    typography,
  } = objectMergeDeep({}, defaultConfig, config)

  const [styleSheet, css] = createHooks({
    hooks,
    themes,
    keyframes,
    fallbacks,
    plugins,
  })

  const El = createEl(css)

  const system = {
    El,
    baselineGrid,
    linkComponent,
    typography,
    styleSheet,
  }

  const root = getRoot()
  root[namespace] = system

  return system
}
