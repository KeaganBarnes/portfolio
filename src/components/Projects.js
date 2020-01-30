import React from 'react'
import { Card, Image, Button, Grid, } from 'semantic-ui-react'
import RoR from '../Pics/RoR.png'
import JS from '../Pics/JS.png'


const Projects = () => (
  <>
    <center>
      <h1>Projects</h1>
    </center>
    <br />
    <Grid align="center">
      <Grid.Column>
        <Card.Group centered itemsPerRow={2}>
          <Card style={card}>
            <Card.Content>
              <Image
                style={logo}
                target="_blank" rel="noopener noreferrer"
                href="https://seeker-dpl.herokuapp.com/"
                src={JS}
              />
              <hr />
              <br />
              <Card.Header>
                <a
                  target="_blank" rel="noopener noreferrer"
                  href="https://github.com/devpointlabs/job-tracker">
                  DevPoint Seekr
                </a>
              </Card.Header>
            </Card.Content>
          </Card>
          <Card style={card}>
            <Card.Content>
              <Image
                style={logo}
                target="_blank" rel="noopener noreferrer"
                href="https://www.keaganbarnes.com/"
                src={JS}
              />
              <hr />
              <br />
              <Card.Header>
                <a
                  target="_blank" rel="noopener noreferrer"
                  href="https://github.com/KeaganBarnes/portfolio">
                  Portfolio (This Website)
                </a>
              </Card.Header>
            </Card.Content>
          </Card>
          <Card style={card}>
            <Card.Content>
              <Image
                style={logo}
                target="_blank"
                href="https://sad-keller-01e658.netlify.com/"
                src={JS} />
              <hr />
              <br />
              <Card.Header>
                <a
                  target="_blank" rel="noopener noreferrer"
                  href="https://github.com/KeaganBarnes/React_Flashcards">
                  React RPS
                </a>
              </Card.Header>
            </Card.Content>
          </Card>
        </Card.Group>
      </Grid.Column>
    </Grid>
    <br />
    <br />
    <center>
      <hr />
      <div>
        <Button circular color='facebook' icon='facebook' size='large' href="https://www.facebook.com/keaganbarnes" target="_blank" />
        <Button circular color='twitter' icon='twitter' size='large' href="https://twitter.com/KeaganBarnes12" target="_blank" />
        <Button circular color='google plus' icon='instagram' size='large' href="https://www.instagram.com/keaganbarnes/?hl=en" target="_blank" />
        <Button circular color='linkedin' icon='linkedin' size='large' href="https://www.linkedin.com/in/keaganbarnes/" target="_blank" />
        <Button circular color='black' icon='github' size='large' href="https://github.com/KeaganBarnes" target="_blank" />
      </div>
      <hr />
    </center>
  </>
);

const logo = {
  height: '125px',
  width: '250px',
  position: 'center'
};

const card = {
  height: '200px',
  width: '250px',
  position: 'center'
};

export default Projects;