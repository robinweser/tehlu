import React, { forwardRef } from 'react'

import applyMultiplier from '../../utils/applyMultiplier'
import getInstance from '../../utils/getInstance'

export default forwardRef(function Box(
  {
    style,
    bg,
    backgroundColor = bg,
    gap,
    padding,
    paddingLeft,
    paddingRight,
    paddingBottom,
    paddingTop,
    paddingX,
    paddingInline = paddingX,
    paddingInlineStart,
    paddingInlineEnd,
    paddingY,
    paddingBlock = paddingY,
    paddingBlockStart,
    paddingBlockEnd,
    margin,
    marginLeft,
    marginRight,
    marginBottom,
    marginTop,
    marginX,
    marginInline = marginX,
    marginInlineStart,
    marginInlineEnd,
    marginY,
    marginBlock = marginY,
    marginInlineStart,
    marginInlineEnd,
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
          paddingInlineStart: multiplier(paddingInlineStart),
          paddingInlineEnd: multiplier(paddingInlineEnd),
          paddingBlock: multiplier(paddingBlock),
          paddingBlockStart: multiplier(paddingBlockStart),
          paddingBlockEnd: multiplier(paddingBlockEnd),
          margin: multiplier(margin),
          marginLeft: multiplier(marginLeft),
          marginRight: multiplier(marginRight),
          marginBottom: multiplier(marginBottom),
          marginTop: multiplier(marginTop),
          marginInline: multiplier(marginInline),
          marginInlineStart: multiplier(marginInlineStart),
          marginInlineEnd: multiplier(marginInlineEnd),
          marginBlock: multiplier(marginBlock),
          marginBlockStart: multiplier(marginBlockStart),
          marginBlockEnd: multiplier(marginBlockEnd),
        },
        style,
      ]}
    />
  )
})
