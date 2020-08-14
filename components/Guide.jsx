import { Button, Card, CardHeader, CardActions, Avatar } from '@material-ui/core'
import ButtonLink from './ButtonLink'

export default function Guide({ guide }) {
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
