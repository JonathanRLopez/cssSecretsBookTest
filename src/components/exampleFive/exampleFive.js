import React, { Component } from 'react';
import glamorous, {H2} from 'glamorous'

const designOfBackgrounds = {
  horizontal: {
    background: 'linear-gradient(#fb3 33.3%, #58a 0, #58a 66.6%, yellowgreen 0)',
    backgroundSize: '100% 45px',
  },
  vertical: {
    background: 'linear-gradient(to right, #fb3 50%, #58a 0)',
    backgroundSize: '30px 100%',
  },
  diagonal: {
    background: 'repeating-linear-gradient(45deg, #fb3 0, #fb3 25%, #58a 0, #58a 50%)',
    backgroundSize: '30px 30px'
  },
  dinamicDiagonal: {
    background: '#58a',
    backgroundImage: `repeating-linear-gradient(30deg,
                            hsla(0,0%,100%,.1),
                            hsla(0,0%,100%,.1) 15px,
                            transparent 0, transparent 30px)`,
  }
}
const SubContainer = glamorous.div(
  {
    width: '80%',
    height: '75%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  },
  props => designOfBackgrounds[props.type] || designOfBackgrounds.horizontal
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
        <SubContainer type={type} />   
      </Container>
    );
  }
}

export default exampleFive;
