import { useState, useEffect } from 'react'
import GuideGridItem from '../components/GuideGridItem'
import { Grid, Container, Button, ButtonGroup, Box } from '@material-ui/core'
import { Pagination } from '@material-ui/lab'
import Head from 'next/head'

export default function Home({data}) {
  const [filter, setFilter] = useState('all')
  const [page, setPage] = useState(1)
  useEffect(() => {
    window.scrollTo(0, 0);
  })
  
  const perPage = 21
  
  return (
    <Container style={{marginTop: 20}} fixed>
      <Head>
        <title>Decks for Gwent</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Box display="flex" justifyContent="center">
        <ButtonGroup size="small" variant="outlined" style={{marginBottom: 10}}>
          {['all', 'ske', 'sco', 'mon', 'nor', 'nil', 'syn'].map(fract => {
            return (
              <Button onClick={() => { setFilter(fract) }} disabled={filter == fract} key={fract}>{fract}</Button>
            )
          })}
        </ButtonGroup>
      </Box>
      <Grid container spacing={2}>
        {filter == 'all' ? data.slice((page-1)*perPage, page*perPage).map(guide => {
          return (
            <GuideGridItem key={guide.id} guide={guide} /> 
          )
        }) : data.filter(guide => guide.faction.short == filter).slice((page - 1) * perPage, page * perPage).map(guide => {
          return (
            <GuideGridItem key={guide.id} guide={guide} /> 
          )
        })}
      </Grid>
      <Box display="flex" justifyContent="center">
        <Pagination 
          style={{margin: '10px 0'}} 
          count={24} 
          page={page} 
          onChange={(e, v) => {setPage(v)}}
          siblingCount={0} boundaryCount={1} 
        />
      </Box>
    </Container>
  )
}

export async function getServerSideProps(context) {
  const resp = await fetch('https://www.playgwent.com/en/decks/api/guides/offset/0/limit/500')
  const data = await resp.json()
  return {
    props: {
      data: data.guides,
    },
  }
}