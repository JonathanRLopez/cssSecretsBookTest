import React, { Component } from 'react';
import glamorous, {H2} from 'glamorous'

const SubContainer = glamorous.div(
  {
    background: 'linear-gradient(#fb3 33.3%, #58a 0, #58a 66.6%, yellowgreen 0)',
    backgroundSize: '100% 45px',
    width: '80%',
    height: '75%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  }
)

const Container = glamorous.div({
  width: '300px',
  height: '300px',
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
})

class exampleFive extends Component {
  render() {
    const {type} = this.props
    return (
      <Container>
        <H2 color="#ffffff" margin="0 0">
          {type} stripes bg
        </H2>
        img
        <SubContainer />   
      </Container>
    );
  }
}

export default exampleFive;
