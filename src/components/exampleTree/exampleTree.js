import React, { Component } from 'react';
import glamorous, {H2} from 'glamorous'
import tux from '../../images/tux.png'

const SubContainer = glamorous.div(
  {
    background: `url(${tux}) no-repeat`,
    backgroundPosition: 'calc(100% - 20px) calc(100% - 10px)',
    backgroundSize: '30%',
    width: '80%',
    height: '75%',
    display: 'flex',
    border: '1px solid #ffffff',
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

class exampleTree extends Component {
  render() {
    return (
      <Container>
        <H2 color="#ffffff" margin="0 0">
          Flexible bg positioning
        </H2>
        img
        <SubContainer>
           Codigo Pinguino
        </SubContainer>   
      </Container>
    );
  }
}

export default exampleTree;
