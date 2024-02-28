import React, { forwardRef } from 'react'

import applyMultiplier from '../../utils/applyMultiplier'
import getInstance from '../../utils/getInstance'

export default forwardRef(function Grid(
  { gap, columns, rows, areas, style, children, ...props },
  ref
) {
  const { El, baselineGrid } = getInstance()
  const spacing = applyMultiplier(baselineGrid)

  return (
    <El
      ref={ref}
      {...props}
      style={[
        {
          boxSizing: 'border-box',
          display: 'grid',
          gridGap: spacing(gap),
          gridTemplateColumns: columns,
          gridTemplateRows: rows,
          gridTemplateAreas: areas,
        },
        style,
      ]}>
      {children}
    </El>
  )
})
