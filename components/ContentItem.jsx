import { Card, CardMedia } from '@material-ui/core'
import PropTypes from 'prop-types'

function ContentItem({ item }) {
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
      <Card>
        <CardMedia
          component="img"
          image={item.insert.image}
        />
      </Card>
    )
  } else if (item.insert.video != null) {
    return (
      <p>
        <iframe src={item.insert.video}></iframe>
      </p>
    )
  }
}

ContentItem.propTypes = {
  item: PropTypes.object
}

export default ContentItem
