import React, { Component } from 'react';
import glamorous, {H2} from 'glamorous'
import { css } from 'glamor'

const SubContainer = glamorous.div(
  {
    width: '80%',
    height: '75%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    boxSizing: 'border-box'
  },
  props => typeBg[props.type] || typeBg.one
)

const typeBg = {
  one: {
    padding: '1em',
    border: '1em solid transparent',
    background: `linear-gradient(white, white),
                  url(http://www.tobermore.co.uk/images/sized/uploads/products/Country-Stone-Heather---swatch-780x546.jpg)`,
    backgroundSize: 'cover',
    backgroundClip: 'padding-box, border-box',
    backgroundOrigin: 'border-box'
  },
  two: {
    padding: '1em',
    border: '1em solid transparent',
    background: `linear-gradient(white, white) padding-box,
                    repeating-linear-gradient(-45deg,
                      red 0, red 12.5%,
                      transparent 0, transparent 25%,
                      #58a 0, #58a 37.5%,
                      transparent 0, transparent 50%)
        0 / 5em 5em`,
  },
  tree: {
    padding: '1em',
    border: '1px solid transparent',
    background: `linear-gradient(white, white) padding-box,
              repeating-linear-gradient(-45deg,
                red 0, red 25%, white 0, white 50%
              ) 0 / .6em .6em`,
    animation: `${css.keyframes({
        'to': { backgroundPosition: `100%` }
      })} 12s linear infinite`,
  }
}

const Container = glamorous.div({
  width: '300px',
  height: '300px',
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
})

class exampleEight extends Component {
  render() {
    const { type } = this.props
    return (
      <Container>
        <H2 color="#ffffff" margin="0 0">Continuous img border</H2>
        <SubContainer type={type} />   
      </Container>
    );
  }
}

export default exampleEight;
