import React, { forwardRef } from 'react'

import applyMultiplier from '../../utils/applyMultiplier'
import getInstance from '../../utils/getInstance'

export default forwardRef(function Box(
  {
    style = {},
    bg,
    backgroundColor = bg,
    gap,
    padding,
    paddingLeft,
    paddingRight,
    paddingBottom,
    paddingTop,
    paddingInline,
    paddingBlock,
    margin,
    marginLeft,
    marginRight,
    marginBottom,
    marginTop,
    marginInline,
    marginBlock,
    height,
    width,
    minWidth,
    maxWidth,
    minHeight,
    maxHeight,
    order,
    alignContent,
    justifyContent,
    alignItems = 'stretch',
    alignSelf,
    flex,
    grow = 0,
    shrink = 0,
    basis = 'auto',
    direction = 'column',
    display = 'flex',
    wrap = 'nowrap',
    ...props
  },
  ref
) {
  const { El, baselineGrid = 1 } = getInstance()

  const multiplier = applyMultiplier(baselineGrid)

  return (
    <El
      {...props}
      ref={ref}
      style={[
        {
          boxSizing: 'border-box',
          backgroundColor,
          flexDirection: direction,
          flexWrap: wrap,
          flexGrow: grow,
          flexShrink: shrink,
          flexBasis: basis,
          flex,
          justifyContent,
          alignContent,
          alignItems,
          alignSelf,
          order,
          display,
          maxWidth,
          minWidth,
          width,
          maxHeight,
          minHeight,
          height,
          gap: multiplier(gap),
          padding: multiplier(padding),
          paddingLeft: multiplier(paddingLeft),
          paddingRight: multiplier(paddingRight),
          paddingBottom: multiplier(paddingBottom),
          paddingTop: multiplier(paddingTop),
          paddingInline: multiplier(paddingInline),
          marginBlock: multiplier(marginBlock),
          margin: multiplier(margin),
          marginLeft: multiplier(marginLeft),
          marginRight: multiplier(marginRight),
          marginBottom: multiplier(marginBottom),
          marginTop: multiplier(marginTop),
          marginInline: multiplier(marginInline),
          marginBlock: multiplier(marginBlock),
        },
        style,
      ]}
    />
  )
})
