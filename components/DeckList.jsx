import PropTypes from "prop-types"
import CardSlot from './Card'

function DeckList({ deck }) {
  return (
    <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
      <li style={{
        backgroundImage: `url(https://www.playgwent.com/build/img/netdecking/cardList/mask-cf40fa26.png),
        url(${'https://www.playgwent.com' + deck.stratagem.slotImg.small})`,
        backgroundRepeat: 'no-repeat',
        height: 40,
        padding: 4
      }}>
        <p style={{ color: "#fff", margin: 0, fontSize: "16px" }}>
          {deck.stratagem.localizedName}
        </p>
        <p style={{ color: "#fff", margin: 0, fontSize: "16px" }}>
          {deck.stratagem.craftingCost}
        </p>
      </li>
      <br/>
      {deck.cards.sort((b, a) => (a.provisionsCost > b.provisionsCost) ? 1 : ((b.provisionsCost > a.provisionsCost) ? -1 : 0))
        .map(card => <CardSlot key={card.name} card={ card } />)}
    </ul>
  )
}

DeckList.propTypes = {
  deck: PropTypes.object
}

export default DeckList
