import React, { Component } from 'react';
import glamorous, {H2} from 'glamorous'

const SubContainer = glamorous.div({
  backgroundImage: 'url("https://monoku.com/assets/images/monoku_facebook_cover.png")',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  width: '80%',
  height: '75%',
  border: '10px solid hsla(80, 100%, 50%, 0.92)',
  backgroundClip: 'padding-box',
})

const Container = glamorous.div({
  width: '300px',
  height: '300px',
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
})

class exampleOne extends Component {
  render() {
    return (
      <Container>
        <H2 color="#ffffff" margin="0 0">Multiple Borders</H2>
        <SubContainer />   
      </Container>
    );
  }
}

export default exampleOne;
