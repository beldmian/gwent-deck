/* eslint-disable no-undef */
import { Container, Grid, Button } from '@material-ui/core'
import ButtonLink from '../../components/ButtonLink'
import DeckList from '../../components/DeckList'
import ContentItem from '../../components/ContentItem'
import PropTypes from "prop-types"
import Head from 'next/head'

function GuideDetail({ data }) {
  return (
    <Container maxWidth="md">
      <Head>
        <title>{data.name}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1 style={{textAlign: "center"}}>{data.name} </h1>
      <Grid container spacing={2} justify="space-evenly">
        <Grid item xs={12} md={5} sm={12}>
          <h2>Crafting cost: {data.craftingCost}</h2>
          <DeckList deck={data.deck} />
        </Grid>
        <Grid item xs={12} sm={12} md={7}>
          {data.content.ops.map((item, i) => <ContentItem key={i} item={item}/>)}
          <p>
            <Button color="primary" variant="outlined" component={ButtonLink} href="/">Back to home</Button>
          </p>
        </Grid>
      </Grid>

    </Container>
  )
}

GuideDetail.propTypes = {
  data: PropTypes.object
}

export default GuideDetail

export async function getServerSideProps(context) {
  const resp = await fetch('https://www.playgwent.com/en/decks/api/guides/'+context.params.id)
  const data = await resp.json()
  return {
    props: {
      data: data,
    },
  }
}
