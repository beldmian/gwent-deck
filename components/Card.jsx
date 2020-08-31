import PropTypes from 'prop-types'

function CardSlot({ card }) {
  return (
    <li style={{
      backgroundImage: `url(https://www.playgwent.com/build/img/netdecking/cardList/mask-cf40fa26.png),
      url(${'https://www.playgwent.com' + card.slotImg.small})`,
      backgroundRepeat: 'no-repeat',
      height: 40,
      padding: 4
    }}>
      <p style={{ color: "#fff", margin: 0, fontSize: "16px" }}>
        {card.localizedName}
        <span style={{ color: "#fff", margin: 0, fontSize: "20px", float: "right" }}>
          {(card.repeatCount === 0) ? '' : 'x2'}
        </span>
      </p>
      <p style={{ color: "#fff", margin: 0, fontSize: "16px" }}>
        {card.provisionsCost} : {card.craftingCost}
      </p>
    </li>
  )
}

CardSlot.propTypes = {
  card: PropTypes.object
}

export default CardSlot
