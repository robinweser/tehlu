import { createHooks } from 'brandeur'
import { objectMergeDeep } from 'fast-loops'

import createEl from './components/el/createEl'

import defaultConfig from './utils/defaultConfig'

export default function createSystem(config) {
  const {
    hooks,
    config: hooksConfig,
    theme,
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
    config: hooksConfig,
    theme,
    themes,
    keyframes,
    fallbacks,
    plugins,
  })

  const El = createEl(css)

  return {
    El,
    baselineGrid,
    linkComponent,
    typography,
    styleSheet,
  }
}
