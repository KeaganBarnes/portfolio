import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const Projects = () => (
  <>
    <center>
      <h1>Projects</h1>
    </center>
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
  </>
);

export default Projects;