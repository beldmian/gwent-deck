import { Button, Card, CardHeader, CardActions, Avatar } from '@material-ui/core'
import PropTypes from 'prop-types'
import ButtonLink from './ButtonLink'

function Guide({ guide }) {
  return (
    <div>
      <Card variant="outlined">
        <CardHeader
          avatar={
            <Avatar
              aria-label="ability"
              variant="square"
              src={'https://www.playgwent.com/'+guide.abilityImg.small}
            />
          }
          subheader={guide.author}
          title={guide.name}
        />
        <CardActions>
          <Button color="primary" component={ButtonLink} href={'/guides/'+guide.id}>Show deck</Button>
        </CardActions>
      </Card>
    </div>
  )
}

Guide.propTypes = {
  guide: PropTypes.object
}

export default Guide
