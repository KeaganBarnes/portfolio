import React from 'react'
import ProfilePic from './IMG_2110.png'
import { Card, Image } from 'semantic-ui-react'

const Home = () => (
  <>
    <center>
      <h1>Home</h1>
      <br />
    </center>
    <center>
      <div>
        <Card
          header='Keagan Barnes'
          image={ProfilePic}
          meta='Junior Developer'
        />
      </div>
    </center>
    <br />
    <center>
      <div>
        <p>
          I am a junior level developer. I have experience with Ruby on Rails, Javascript, React, HTML and CSS. 
          I enjoy new challenges and learning new things. Check out my "About Me" page to learn about my hobbies and interests!
        </p>
      </div>
    </center>
  </>
);

export default Home;