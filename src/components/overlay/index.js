import React, { forwardRef } from 'react'

import Box from '../box'

const containerStyle = ({
  zIndex,
  overflow,
  inset,
  top,
  left,
  bottom,
  right,
}) => ({
  position: 'fixed',
  maxHeight: '100%',
  zIndex,
  inset,
  top,
  left,
  bottom,
  right,
  paddingRight: 'env(safe-area-inset-right)',
  paddingLeft: 'env(safe-area-inset-left)',
  paddingTop: 'env(safe-area-inset-top)',
  paddingBottom: 'env(safe-area-inset-bottom)',
})

export default forwardRef(function Overlay(
  {
    children,
    visible = false,
    zIndex,
    top,
    left,
    bottom,
    right,
    style,
    ...props
  },
  ref
) {
  if (!visible) {
    return null
  }

  return (
    <Box
      ref={ref}
      {...props}
      style={[
        style,
        containerStyle({
          zIndex,
          top,
          left,
          bottom,
          right,
          inset,
        }),
      ]}>
      {children}
    </Box>
  )
})
