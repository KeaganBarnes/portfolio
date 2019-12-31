import React from 'react'

const NoMatch = () => (
  <center>
    <h1> Error 404: Page Not Found </h1>
    <img style={gif} src='https://media0.giphy.com/media/jKYbItcN39zWYdoNwL/giphy.gif' alt=''/>
  </center>
)

const gif = {
  height: '550px',
  width: '1100px',
  borderRadius: '10px',
  position: 'center'
};

export default NoMatch 