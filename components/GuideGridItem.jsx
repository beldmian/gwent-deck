import React from 'react'
import { Grid } from '@material-ui/core'
import Guide from './Guide'

export default function GuideGridItem({ guide }) {
  return (
    <Grid item md={4} sm={6} xs={12}>
      <Guide
        guide={guide}
      />
    </Grid>
  )
}
