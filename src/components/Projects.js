import React from 'react'
import { Card, Image, Button } from 'semantic-ui-react'

const Projects = () => (
  <>
    <center>
      <h1>Projects</h1>
    </center>
    <br />
    <center>
    <div className="ui card">
      <Card>
        <Card.Content>
          <Image
            target="_blank"
            href="https://github.com/AleemP3/hackathon1"
            src="https://cdn.freebiesupply.com/logos/thumbs/2x/rails-1-logo.png" />
          <Card.Header>
            <a
              target="_blank"
              href="https://github.com/AleemP3/hackathon1">
              hackathon1
            </a>
          </Card.Header>
        </Card.Content>
      </Card>
    </div>
    </center>
    <br />
    <center>
      <div>
        <Button circular color='facebook' icon='facebook' size='large' href="https://www.facebook.com/keaganbarnes" target="_blank" />
        <Button circular color='twitter' icon='twitter' size='large' href="https://twitter.com/KeaganBarnes12" target="_blank" />
        <Button circular color='google plus' icon='instagram' size='large' href="https://www.instagram.com/keaganbarnes/?hl=en" target="_blank" />
        <Button circular color='linkedin' icon='linkedin' size='large' href="https://www.linkedin.com/in/keaganbarnes/" target="_blank" />
      </div>
    </center>
  </>
);

export default Projects;