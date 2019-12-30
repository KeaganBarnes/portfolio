import React from 'react'
import { Button, Menu, Grid, } from 'semantic-ui-react'
import Zion from '../Pics/Zion.png'
import Lift from '../Pics/CrossFit:Weightlifting.png'
import Guitar from '../Pics/Guitar.png'
import MVP from '../Pics/MVP.png'
import UWG from '../Pics/UWG.png'
import STATE from '../Pics/STATE.png'
import CFG from '../Pics/CFG.png'
import DEAN from '../Pics/DEAN.png'
import Family from '../Pics/Family.png'
import GF from '../Pics/GF.png'
import Dog from '../Pics/Dog.png'
import Health from '../Pics/Health.png'
import Helping from '../Pics/Helping.png'
import Happy from '../Pics/Happy.png'

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
      <hr />
      <center> <h2> Hobbies & Interests </h2> </center>
      <hr />
      <br />
      <Grid columns={3}>
        <Grid.Column>
          <br />
          <center>
            <p>
              <img style={lift} src={Lift} />
            </p>
            <p>
              I have been <strong> weightlifting </strong> since I was 14.
              I began competing in <strong> CrossFit </strong> when I was 15 and won both
              regional and world titles.
              I broke and still hold a state record and now compete on a team
              known as Praxis Olympic Weightlifting.
            </p>
          </center>
        </Grid.Column>
        <Grid.Column>
          <br />
          <center>
            <p>
              <img style={lift} src={Zion} />
            </p>
            <p>
              Some of my favorite hobbies are <strong> snowboarding </strong> & <strong> hiking </strong>.
              My favorite place I have ever hiked is Zion's National park.
              Specifically Angel's Landing and Canyon Overlook! My favorite resort to snowboard is Brighton and Snowbird.
            </p>
          </center>
        </Grid.Column>
        <Grid.Column>
          <br />
          <center>
            <p>
              <img style={lift} src={Guitar} />
            </p>
            <p>
              I first began to play when I was young but gave it up to focus
              on sports. I then sold my guitars to travel to South Africa where
              I trained at the 'Sharks Academy' a professional rugby academy.
              After college I realized I missed playing and decided to pick it back up.
              <strong> Guitar </strong> is my form of therapy.
            </p>
          </center>
        </Grid.Column>
      </Grid>
    </div>
    <br />
    <div>
      <hr />
      <center> <h2> Achievements </h2> </center>
      <hr />
      <br />
      <Grid columns={3}>
        <Grid.Column>
          <br />
          <center>
            <p>
              <img style={dean} src={DEAN} />
            </p>
            <p>
              The Spring 2019 semester I was not only awarded with Kutztown Rugby's <strong> 'Most Valuable Back' </strong>, but more proudly earned a spot on the <strong> Dean's List</strong>. In this semester my hard work earned me a <strong> 4.0 GPA </strong>.
            </p>
          </center>
        </Grid.Column>
        <Grid.Column>
          <br />
          <center>
            <p>
              <img style={lift} src={MVP} />
            </p>
            <p>
              In my first year of college rugby I was awarded <strong> Freshman Of The Year </strong> for having outstanding performances both on and off the field.
            </p>
          </center>
        </Grid.Column>
        <Grid.Column>
          <br />
          <center>
            <p>
              <img style={pStyle} src={UWG} />
            </p>
            <p>
              In 2016 I helped lead my Rugby 7s team to a <strong> world championship </strong> at the <strong> United World Games </strong> which were hosted in Klagenfurt, Austria.
            </p>
          </center>
        </Grid.Column>

      </Grid>
      <Grid columns={2} >
        <Grid.Column>
          <br />
          <center>
            <p>
              <img style={lift} src={STATE} />
            </p>
            <p>
              My senior year of highschool I won the <strong> state title </strong> at the
              <br />
              Weber Classic, which is known to be the <strong> High School State Championship</strong>.
              <br />
              At this meet I broke my previous record and won <strong> first place</strong>.
            </p>
          </center>
        </Grid.Column>
        <Grid.Column>
          <br />
          <center>
            <p>
              <img style={pStyle} src={CFG} />
            </p>
            <p>
              After winning a regional title in 2013, I traveled to Carson, CA.
              <br />
              It was here that I won the 2013 Teen CrossFit Gauntlet at
              <br />
              The CrossFit Games and was awarded the title
              <br />
              <strong> '2013 Fittest Teen On Earth'. </strong>
            </p>
          </center>
        </Grid.Column>

      </Grid>
    </div>
    <br />
    <div>
      <hr />
      <center> <h2> What's Important </h2> </center>
      <hr />
      <br />
      <Grid columns={3}>
        <Grid.Column>
          <br />
          <center>
            <p>
              <img style={dean} src={Family} />
            </p>
            <p>
              ex...
            </p>
          </center>
        </Grid.Column>
        <Grid.Column>
          <br />
          <center>
            <p>
              <img style={smile} src={GF} />
            </p>
            <p>
              ex...
            </p>
          </center>
        </Grid.Column>
        <Grid.Column>
          <br />
          <center>
            <p>
              <img style={pStyle} src={Dog} />
            </p>
            <p>
              ex...
            </p>
          </center>
        </Grid.Column>
      </Grid>
      <Grid columns={3}>
        <Grid.Column>
          <br />
          <center>
            <p>
              <img style={health} src={Health} />
            </p>
            <p>
              ex...
            </p>
          </center>
        </Grid.Column>
        <Grid.Column>
          <br />
          <center>
            <p>
              <img style={adrian} src={Helping} />
            </p>
            <p>
              ex...
            </p>
          </center>
        </Grid.Column>
        <Grid.Column>
          <br />
          <center>
            <p>
              <img style={smile} src={Happy} />
            </p>
            <p>
              ex...
            </p>
          </center>
        </Grid.Column>
      </Grid>
    </div>
    <br />
    <div>
      <hr />
      <center> <h2 >More Photos </h2> </center>
      <hr />
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

const adrian = {
  height: '225px',
  width: '160px',
  borderRadius: '25px'
};

const lift = {
  height: '215px',
  width: '165px',
  borderRadius: '25px'
};

const health = {
  height: '215px',
  width: '180px',
  borderRadius: '25px'
};

const smile = {
  height: '245px',
  width: '180px',
  borderRadius: '25px'
};

const dean = {
  height: '165px',
  width: '255px',
  borderRadius: '25px'
};

export default About;