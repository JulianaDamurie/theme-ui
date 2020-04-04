/** @jsx jsx */
import { jsx } from '@theme-ui/core'
import React from 'react'
import Box from './Box'
import { useVariant } from './util'

export const Text = React.forwardRef(function Text({ variant, ...props }, ref) {
  const variation = useVariant('text', variant)
  return <Box ref={ref} {...props} sx={variation} />
})
