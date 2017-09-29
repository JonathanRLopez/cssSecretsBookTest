import React, { Component } from 'react';
import glamorous, {H2} from 'glamorous'
import {patterns} from './styles.css'

const SubContainer = glamorous.div(
  {
    width: '80%',
    height: '75%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
  },
  props => patterns[props.type] || patterns.gridOne
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
    const {type} = this.props
    return (
      <Container>
        <H2 color="#ffffff" margin="0 0">Complex Bg Pattern</H2>
        <SubContainer type={type}>
          {type || 'grid'} Pattern
        </SubContainer>   
      </Container>
    );
  }
}

export default exampleSix;
