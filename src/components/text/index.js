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
  // TODO: responsive variant support
  const theme = typography?.[variant]

  return (
    <El
      ref={ref}
      {...props}
      style={[
        {
          '--tehlu_text-size': size || theme?.fontSize,
          color: theme?.color || color,
          fontWeight: theme?.fontWeight || weight,
          textDecoration: theme?.textDecoration || decoration,
          lineHeight: theme?.lineHeight || height,
          display: 'var(--tehlu_text-inner-display, block)',
          fontSize: 'var(--tehlu_text-size, 1rem)',
        },
        style,
      ]}>
      <span
        style={{
          display: 'contents',
          '--tehlu_text-inner-display': 'inline-block',
        }}>
        {children}
      </span>
    </El>
  )
})
