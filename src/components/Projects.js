import React from 'react'
import { Card, Image, Button, } from 'semantic-ui-react'
import RoR from '../Pics/RoR.png'
import JS from '../Pics/JS.png'


const Projects = () => (
  <>
    <center>
      <h1>Projects</h1>
    </center>
    <br />
    <Card.Group centered itemsPerRow={3}>
      <Card>
        <Card.Content>
          <Image
            style={logo}
            target="_blank"
            href="https://github.com/AleemP3/hackathon1"
            src={RoR} />
          <Card.Header>
            <a
              target="_blank" rel="noopener noreferrer"
              href="https://github.com/AleemP3/hackathon1">
              hackathon1
                </a>
          </Card.Header>
        </Card.Content>
      </Card>

      <Card>
        <Card.Content>
          <Image
            style={logo}
            target="_blank" rel="noopener noreferrer"
            href="https://github.com/KeaganBarnes/portfolio"
            src={JS}
          />
          <Card.Header>
            <a
              target="_blank" rel="noopener noreferrer"
              href="https://github.com/KeaganBarnes/portfolio">
              Portfolio
            </a>
          </Card.Header>
        </Card.Content>
      </Card>
    </Card.Group>
    <br />
    <h3> Other Note Worthy Projects </h3>
    <ul>
      <li>
        <a
          target="_blank" rel="noopener noreferrer"
          href="https://github.com/KeaganBarnes/MySpace_app">
          Robo MySpace (Rails React)
        </a>
      </li>
      <li>
        <a
          target="_blank" rel="noopener noreferrer"
          href="https://github.com/KeaganBarnes/React_Flashcards">
          Flashcards (JS React)
        </a>
      </li>
      <li>
        <a
          target="_blank" rel="noopener noreferrer"
          href="https://github.com/KeaganBarnes/JS_RPS">
          Rock, Paper, Scissors (JS)
        </a>
      </li>
    </ul>
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
  height: '200px',
  width: '300px',
  position: 'center'
};

export default Projects;