import * as React from 'react'

import getInstance from '../../utils/getInstance'

export default function StyleSheet() {
  const { styleSheet } = getInstance()

  return <style dangerouslySetInnerHTML={{ __html: styleSheet }} />
}
