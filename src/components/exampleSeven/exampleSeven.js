import React, { Component } from 'react';
import glamorous, {H2} from 'glamorous'

const SubContainer = glamorous.div(
  {
    background: `linear-gradient(90deg, #fb3 11px, transparent 0),
    linear-gradient(90deg, #ab4 23px, transparent 0),
    linear-gradient(90deg, #655 41px, transparent 0)`,
    backgroundSize: '41px 100%, 61px 100%, 83px 100%',
    width: '80%',
    height: '75%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
  }
)

const Container = glamorous.div({
  width: '300px',
  height: '300px',
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
})

class exampleSix extends Component {
  render() {
    return (
      <Container>
        <H2 color="#ffffff" margin="0 0">(Pseudo)random bg</H2>
        <SubContainer />   
      </Container>
    );
  }
}

export default exampleSix;
