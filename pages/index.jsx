import Guide from '../components/Guide'
import { Grid, Container } from '@material-ui/core'

export default function Home({data}) {
  return (
    <Container style={{marginTop: 20}}>
      <Grid container spacing={2} justify="space-evenly">
        {data.map(guide => {
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
  const resp = await fetch('https://www.playgwent.com/ru/decks/api/guides/offset/0/limit/500')
  const data = await resp.json()
  return {
    props: {
      data: data.guides,
    },
  }
}