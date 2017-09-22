import React, { Component } from 'react';
import glamorous, {H2} from 'glamorous'

const patterns = {
  gridOne: {
    background: 'white',
    backgroundImage: `linear-gradient(90deg,
                            rgba(200,0,0,.5) 50%, transparent 0),
                      linear-gradient(
                        rgba(200,0,0,.5) 50%, transparent 0)`,
    backgroundSize: '30px 30px'
  },
  gridTwo: {
    background: '#58a',
    backgroundImage:`
            linear-gradient(white 1px, transparent 0),
            linear-gradient(90deg, white 1px, transparent 0)`,
    backgroundSize: '30px 30px',
  },
  gridTree : {
    background: '#58a',
    backgroundImage:
        `linear-gradient(white 2px, transparent 0),
          linear-gradient(90deg, white 2px, transparent 0),
          linear-gradient(hsla(0,0%,100%,.3) 1px,
            transparent 0),
          linear-gradient(90deg, hsla(0,0%,100%,.3) 1px,
            transparent 0)`,
    backgroundSize: `75px 75px, 75px 75px,
                      15px 15px, 15px 15px`
  }
}

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
