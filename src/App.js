import React, { Fragment, } from 'react'
import { Container, } from "semantic-ui-react"
import { Switch, Route, } from "react-router-dom"
import Navbar from './components/Navbar'
import Home from "./components/Home"
import About from './components/About'
import Resume from './components/Resume'
import Projects from './components/Projects'
import ContactMe from './components/ContactMe'
import NoMatch from './components/NoMatch'

const App = () => (
  <Fragment>
    <Navbar />
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={ContactMe} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </Fragment>
)

export default App;