import React, { Component } from 'react';
import glamorous, {H2} from 'glamorous'

const SubContainer = glamorous.div(
  {
    background: 'tan',
    width: '80%',
    height: '75%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    borderRadius: '.8em',
    padding: '1em',
    boxShadow: '0 0 0 .6em #655',
    outline: '.7em solid #655',
  }
)

const Container = glamorous.div({
  width: '300px',
  height: '300px',
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
})

class exampleFour extends Component {
  render() {
    return (
      <Container>
        <H2 color="#ffffff" margin="0 0">
          Inner rounding
        </H2>
        img
        <SubContainer />   
      </Container>
    );
  }
}

export default exampleFour;
