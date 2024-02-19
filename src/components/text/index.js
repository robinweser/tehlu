import React, { forwardRef } from 'react'

import getInstance from '../../utils/getInstance'

export default forwardRef(function Text(
  {
    variant,
    color,
    weight,
    decoration,
    size,
    height,
    children,
    style,
    ...props
  },
  ref
) {
  const { El, typography } = getInstance()
  const theme = typography?.[variant]

  return (
    <El
      ref={ref}
      {...props}
      style={[
        {
          '--ambrose_text-size': theme?.fontSize || size,
          color: theme?.color || color,
          fontWeight: theme?.fontWeight || weight,
          textDecoration: theme?.textDecoration || decoration,
          lineHeight: theme?.lineHeight || height,
          display: 'var(--ambrose_text-inner-display, block)',
          fontSize: 'var(--ambrose_text-size)',
        },
        style,
      ]}>
      <span
        style={{
          display: 'contents',
          '--ambrose_text-inner-display': 'inline-block',
        }}>
        {children}
      </span>
    </El>
  )
})
