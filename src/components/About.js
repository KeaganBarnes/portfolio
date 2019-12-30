import React from 'react'
import { Button, Menu, Grid, } from 'semantic-ui-react'

const About = () => (
  <>
    <center>
      <h1>About Me</h1>
    </center>
    <br />
    <Menu pointing secondary widths={4}>
      <Menu.Item>
        Hobbies & Interests
    </Menu.Item>
      <Menu.Item>
        Achievements
    </Menu.Item>
      <Menu.Item>
        What's Important
    </Menu.Item>
      <Menu.Item>
        More Photos
    </Menu.Item>
    </Menu>
    <br />
    <div>
      <center> <h2> Hobbies & Interests </h2> </center>
      <Grid columns={2}>
        <Grid.Column>
          <center>
            <p>
              <img style={pStyle} src='https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' />
            </p>
          </center>
        </Grid.Column>
        <Grid.Column>
          <center>
            <p>
              Information
            </p>
          </center>
        </Grid.Column>
      </Grid>
    </div>
    <br />
    <div>
      <center> <h2> Achievements </h2> </center>
      <Grid columns={2}>
        <Grid.Column>
          <center>
            <p>
              Information
            </p>
          </center>
        </Grid.Column>
        <Grid.Column>
          <center>
            <p>
              <img style={pStyle} src='https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' />
            </p>
          </center>
        </Grid.Column>
      </Grid>
    </div>
    <br />
    <div>
      <center> <h2> What's Important </h2> </center>
      <Grid columns={2}>
        <Grid.Column>
          <center>
            <p>
              <img style={pStyle} src='https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' />
            </p>
          </center>
        </Grid.Column>
        <Grid.Column>
          <center>
            <p>
              Information
            </p>
          </center>
        </Grid.Column>
      </Grid>
    </div>
    <br />
    <div>
      <center> <h2 >More Photos </h2> </center>
      <br />
      <br />
      <center>
        <Grid relaxed columns={5}>
          <Grid.Column>
            <img style={pStyle} src='https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' />
          </Grid.Column>
          <Grid.Column>
            <img style={pStyle} src='https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' />
          </Grid.Column>
          <Grid.Column>
            <img style={pStyle} src='https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' />
          </Grid.Column>
          <Grid.Column>
            <img style={pStyle} src='https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' />
          </Grid.Column>
          <Grid.Column>
            <img style={pStyle} src='https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' />
          </Grid.Column>
          <Grid.Column>
            <img style={pStyle} src='https://www.syfy.com/sites/syfy/files/styles/1200x680/public/2017/08/screen_shot_2017-08-04_at_12.22.34_pm.png' />
          </Grid.Column>
        </Grid>
      </center>
    </div>
    <center>
      <br />
      <br />
      <div>
        <Button circular color='facebook' icon='facebook' size='large' href="https://www.facebook.com/keaganbarnes" target="_blank" />
        <Button circular color='twitter' icon='twitter' size='large' href="https://twitter.com/KeaganBarnes12" target="_blank" />
        <Button circular color='google plus' icon='instagram' size='large' href="https://www.instagram.com/keaganbarnes/?hl=en" target="_blank" />
        <Button circular color='linkedin' icon='linkedin' size='large' href="https://www.linkedin.com/in/keaganbarnes/" target="_blank" />
        <Button circular color='black' icon='github' size='large' href="https://github.com/KeaganBarnes" target="_blank" />
      </div>
    </center>
    <br />
    <br />
    <br />
  </>
);

const pStyle = {
  height: '200px',
  width: '200px',
  borderRadius: '25px'
};

export default About;