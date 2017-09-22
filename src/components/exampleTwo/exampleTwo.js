import React, { Component } from 'react';
import PropTypes from 'prop-types';
import glamorous, {H2} from 'glamorous'

const SubContainer = glamorous.div(
  {
    backgroundColor: 'yellowgreen',
    width: '80%',
    height: '75%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  },
  ({ type }) => ({
    boxShadow: type === 'box-shadow' ?
      '0 0 0 10px #655, 0 0 0 15px deeppink, 0 2px 5px 15px rgba(255,255,255,.6)' : 
      null,
    border: type === 'outline' ? '10px solid #655' : null,
    outline: type === 'outline' ? '3px dashed deeppink' : null,
    outlineOffset: type === 'outline' ? '-15px' : null,
  })
)

const Container = glamorous.div({
  width: '300px',
  height: '300px',
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
})

class exampleTwo extends Component {
  render() {
    const { type } = this.props
    return (
      <Container>
        <H2 color="#ffffff" margin="0 0">Multiple Borders</H2>
        <SubContainer type={type}>
           example made with: {type}
        </SubContainer>   
      </Container>
    );
  }
}

exampleTwo.propTypes = {
  type: PropTypes.oneOf([
    'box-shadow',
    'outline',
  ]).isRequired
}

export default exampleTwo;
