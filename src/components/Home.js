import React from 'react'
import ProfilePic from '../Pics/IMG_2110.png'
import { Card, Button, } from 'semantic-ui-react'

const Home = () => (
  <>
    <center>
      <h1>Home</h1>
    </center>
    <br />
    <center>
      <div>
        <Card
          image={ProfilePic}
          header='Keagan Barnes'
          description='Junior Developer'
        />
      </div>
    </center>
    <br />
    <center>
      <div>
        <p>
          As a junior level developer, I have experience with the following languages: Ruby on Rails, Javascript, React, HTML and CSS.
          <br />
          Visit my <strong>"Projects"</strong> page to see some of my best work! I enjoy challenging myself and learning new things.
          <br />
          To learn more about me, my hobbies, and interests check out the <strong>"About Me"</strong> page!
        </p>
      </div>
      <br />
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

export default Home