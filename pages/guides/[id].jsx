import { Container, Grid, Button } from '@material-ui/core'
import ButtonLink from '../../components/ButtonLink'

function contentItemParser(item) {
  if (typeof item.insert === "string" ) {
    if (item.attributes != null) {
      const style = {
        fontWeight: item.attributes.bold ? "bold" : "normal",
        textDecoration: item.attributes.underline ? "underline" : "none",
      }
      return (
        <span style={style}>
          {item.insert}
        </span>
      )
    }
    return (
      <span>
        {item.insert}
      </span>
    )
  } else if (item.insert.image != null) {
    return (
      <p>
        <img src={item.insert.image}></img>
      </p>
    )
  } else if (item.insert.video != null) {
    return (
      <p>
        <iframe src={item.insert.video}></iframe>
      </p>
    )
  }
}

export default function GuideDetail({ data }) {
  return (
    <Container fixed>
      <h1>{data.name} </h1>
      <Grid container spacing={2} justify="space-evenly">
        <Grid item xs={4}>
          <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {data.deck.cards.sort((b, a) => (a.provisionsCost > b.provisionsCost) ? 1 : ((b.provisionsCost > a.provisionsCost) ? -1 : 0))
              .map(card => {
                return (
                  <li key={card.name} style={{
                    backgroundImage: `url(https://www.playgwent.com/build/img/netdecking/cardList/mask-cf40fa26.png), url(${'https://www.playgwent.com' + card.slotImg.small})`,
                    backgroundRepeat: 'no-repeat',
                    height: 40,
                    padding: 4
                  }}>
                    <p style={{ color: "#fff", margin: 0, fontSize: "16px" }}>
                      {card.localizedName}
                    </p>
                    <p style={{ color: "#fff", margin: 0, fontSize: "16px" }}>
                      {card.provisionsCost} : {card.craftingCost}
                    </p>
                  </li>
                )
              })}
          </ul>
        </Grid>
        <Grid item xs={8}>
          {data.content.ops.map(item => contentItemParser(item))}
          <p>
            <Button color="primary" variant="outlined" component={ButtonLink} href="/">Back to home</Button>            
          </p>
        </Grid>
      </Grid>
     
    </Container>
  )
}


export async function getServerSideProps(context) {
  const resp = await fetch('https://www.playgwent.com/en/decks/api/guides/'+context.params.id)
  const data = await resp.json()
  return {
    props: {
      data: data,
    },
  }
}