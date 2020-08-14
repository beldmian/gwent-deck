import {useState} from 'react'
import Guide from '../components/Guide'
import { Grid, Container, Button, ButtonGroup } from '@material-ui/core'
import Head from 'next/head'

export default function Home({data}) {
  const [filter, setFilter] = useState('all')
  return (
    <Container style={{marginTop: 20}} fixed>
      <Head>
        <title>Decks for Gwent</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ButtonGroup size="small" variant="outlined" style={{marginBottom: 10}}>
        <Button onClick={() => { setFilter('all') }} disabled={filter == 'all'}>all</Button>
        <Button onClick={() => { setFilter('ske') }} disabled={filter == 'ske'}>ske</Button>
        <Button onClick={() => { setFilter('sco') }} disabled={filter == 'sco'}>sco</Button>
        <Button onClick={() => { setFilter('mon') }} disabled={filter == 'mon'}>mon</Button>
        <Button onClick={() => { setFilter('nor') }} disabled={filter == 'nor'}>nor</Button>
        <Button onClick={() => { setFilter('nil') }} disabled={filter == 'nil'}>nil</Button>
        <Button onClick={() => { setFilter('syn') }} disabled={filter == 'syn'}>syn</Button>
      </ButtonGroup>
      <Grid container spacing={2}>
        {filter == 'all' ? data.map(guide => {
          return (
            <Grid item xs={4} key={guide.id}>
              <Guide
              guide={guide} 
              />
            </Grid>
          )
        }) : data.filter(guide => guide.faction.short == filter).map(guide => {
          return (
            <Grid item xs={4} key={guide.id}>
              <Guide
                guide={guide}
              />
            </Grid>
          )
        })}
      </Grid>
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