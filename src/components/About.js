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
import a from '../Pics/a.png'
import b from '../Pics/b.png'
import c from '../Pics/c.png'
import d from '../Pics/d.png'
import e from '../Pics/e.png'
import f from '../Pics/f.png'
import g from '../Pics/g.png'
import h from '../Pics/h.png'
import i from '../Pics/i.png'
import j from '../Pics/j.png'
import k from '../Pics/k.png'
import l from '../Pics/l.png'
import m from '../Pics/m.png'
import n from '../Pics/n.png'
import o from '../Pics/o.png'
import p from '../Pics/p.png'
import q from '../Pics/q.png'
import r from '../Pics/r.png'
import s from '../Pics/s.png'
import t from '../Pics/t.png'


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
          <center>
            <p>
              <img style={lift} src={Lift} alt=''/>
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
          <center>
            <p>
              <img style={lift} src={Zion} alt=''/>
            </p>
            <p>
              Some of my favorite hobbies are <strong> snowboarding </strong> & <strong> hiking </strong>.
              My favorite place I have ever hiked is Zion's National park.
              Specifically Angel's Landing and Canyon Overlook! My favorite resort to snowboard is Brighton and Snowbird.
            </p>
          </center>
        </Grid.Column>
        <Grid.Column>
          <center>
            <p>
              <img style={lift} src={Guitar} alt=''/>
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
          <center>
            <p>
              <img style={dean} src={DEAN} alt=''/>
            </p>
            <p>
              The Spring 2019 semester I was not only awarded with Kutztown Rugby's <strong> 'Most Valuable Back' </strong>, but more proudly earned a spot on the <strong> Dean's List</strong>. In this semester my hard work earned me a <strong> 4.0 GPA </strong>.
            </p>
          </center>
        </Grid.Column>
        <Grid.Column>
          <center>
            <p>
              <img style={lift} src={MVP} alt=''/>
            </p>
            <p>
              In my first year of college rugby I was awarded <strong> Freshman Of The Year </strong> for having outstanding performances both on and off the field.
            </p>
          </center>
        </Grid.Column>
        <Grid.Column>
          <center>
            <p>
              <img style={pStyle} src={UWG} alt=''/>
            </p>
            <p>
              In 2016 I helped lead my Rugby 7s team to a <strong> world championship </strong> at the <strong> United World Games </strong> which were hosted in Klagenfurt, Austria.
            </p>
          </center>
        </Grid.Column>
      </Grid>
      <Grid columns={2} >
        <Grid.Column>
          <center>
            <p>
              <img style={lift} src={STATE} alt=''/>
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
          <center>
            <p>
              <img style={pStyle} src={CFG} alt=''/>
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
          <center>
            <p>
              <img style={dean} src={Family} alt=''/>
            </p>
            <p>
              My family is important to me because no matter what happens I know I can always count on them. They have always supported and loved me no matter what I do and for who I am.
            </p>
          </center>
        </Grid.Column>
        <Grid.Column>
          <center>
            <p>
              <img style={smile} src={GF} alt=''/>
            </p>
            <p>
              I am forever grateful for my girlfriend. We have done long distance for the last few years and she still chooses me everyday.
            </p>
          </center>
        </Grid.Column>
        <Grid.Column>
          <center>
            <p>
              <img style={pStyle} src={Dog} alt=''/>
            </p>
            <p>
              My dog's name is Jeter but everyone calls him "Jeeber". He's a very social and loving dog and is very aware of emotion. He always knows exactly how to comfort people with they are feeling anxious or sad.
            </p>
          </center>
        </Grid.Column>
        <Grid.Column>
          <center>
            <p>
              <img style={health} src={Health} alt=''/>
            </p>
            <p>
              Health is important to me because it allows me to do fun things and enjoy life the way it should be lived.
            </p>
          </center>
        </Grid.Column>
        <Grid.Column>
          <center>
            <p>
              <img style={adrian} src={Helping} alt=''/>
            </p>
            <p>
              Helping others is important to me and I feel it should be a part of everybody's life as it helps bring people together and positive relationships feed and heal the soul.
            </p>
          </center>
        </Grid.Column>
        <Grid.Column>
          <center>
            <p>
              <img style={smile} src={Happy} alt=''/>
            </p>
            <p>
              Happiness is important and all things listed before lead a path to happiness. If the life you live doesn't make you happy then something needs to change. We aren't meant to be miserable.
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
      <center>
        <Grid relaxed columns={5}>
          <Grid.Column>
            <img style={pStyle} src={a} alt='' />
          </Grid.Column>
          <Grid.Column>
            <img style={pStyle} src={b} alt=''/>
          </Grid.Column>
          <Grid.Column>
            <img style={pStyle} src={c} alt=''/>
          </Grid.Column>
          <Grid.Column>
            <img style={pStyle} src={d} alt=''/>
          </Grid.Column>
          <Grid.Column>
            <img style={pStyle} src={e} alt=''/>
          </Grid.Column>
          <Grid.Column>
            <img style={pStyle} src={f} alt=''/>
          </Grid.Column>
          <Grid.Column>
            <img style={pStyle} src={g} alt=''/>
          </Grid.Column>
          <Grid.Column>
            <img style={pStyle} src={h} alt=''/>
          </Grid.Column>
          <Grid.Column>
            <img style={pStyle} src={i} alt=''/>
          </Grid.Column>
          <Grid.Column>
            <img style={pStyle} src={j} alt=''/>
          </Grid.Column>
          <Grid.Column>
            <img style={pStyle} src={k} alt=''/>
          </Grid.Column>
          <Grid.Column>
            <img style={pStyle} src={l} alt=''/>
          </Grid.Column>
          <Grid.Column>
            <img style={pStyle} src={m} alt=''/>
          </Grid.Column>
          <Grid.Column>
            <img style={pStyle} src={n} alt=''/>
          </Grid.Column>
          <Grid.Column>
            <img style={pStyle} src={o} alt=''/>
          </Grid.Column>
          <Grid.Column>
            <img style={pStyle} src={p} alt=''/>
          </Grid.Column>
          <Grid.Column>
            <img style={pStyle} src={q} alt=''/>
          </Grid.Column>
          <Grid.Column>
            <img style={pStyle} src={r} alt=''/>
          </Grid.Column>
          <Grid.Column>
            <img style={pStyle} src={s} alt=''/>
          </Grid.Column>
          <Grid.Column>
            <img style={pStyle} src={t} alt=''/>
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