import {useState} from 'react'
import Guide from '../components/Guide'
import { Grid, Container, Button, ButtonGroup } from '@material-ui/core'
import { Pagination } from '@material-ui/lab'
import Head from 'next/head'

export default function Home({data}) {
  const [filter, setFilter] = useState('all')
  const [page, setPage] = useState(1)
  const perPage = 21
  return (
    <Container style={{marginTop: 20}} fixed>
      <Head>
        <title>Decks for Gwent</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ButtonGroup size="small" variant="outlined" style={{marginBottom: 10}}>
        {['all', 'ske', 'sco', 'mon', 'nor', 'nil', 'syn'].map(fract => {
          return (
            <Button onClick={() => { setFilter(fract) }} disabled={filter == fract} key={fract}>{fract}</Button>
          )
        })}
      </ButtonGroup>
      <Grid container spacing={2}>
        {filter == 'all' ? data.slice((page-1)*perPage, page*perPage).map(guide => {
          return (
            <Grid item md={4} sm={6} xs={12} key={guide.id}>
              <Guide
              guide={guide} 
              />
            </Grid>
          )
        }) : data.filter(guide => guide.faction.short == filter).slice((page - 1) * perPage, page * perPage).map(guide => {
          return (
            <Grid item md={4} sm={6} xs={12} key={guide.id}>
              <Guide
                guide={guide}
              />
            </Grid>
          )
        })}
      </Grid>
      <Pagination style={{margin: '10px 0'}} count={24} page={page} onChange={(e, v) => {setPage(v)}}/>
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