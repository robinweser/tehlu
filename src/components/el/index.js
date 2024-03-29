import React, { forwardRef } from 'react'

import getInstance from '../../utils/getInstance'

export default forwardRef(function El(props, ref) {
  const { El: Component } = getInstance()

  return <Component ref={ref} {...props} />
})
