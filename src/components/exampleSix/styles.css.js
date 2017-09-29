export const patterns = {
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
  },
  polkaDotOne: {
    background: '#655',
    backgroundImage: `radial-gradient(tan 30%, transparent 0),
                          radial-gradient(tan 30%, transparent 0)`,
    backgroundSize: '30px 30px',
    backgroundPosition: '0 0, 15px 15px',
  },
  checkerboardOne: {
    background: '#eee',
    backgroundImage:
        `linear-gradient(45deg, #bbb 25%, transparent 0),
         linear-gradient(45deg, transparent 75%, #bbb 0),
         linear-gradient(45deg, #bbb 25%, transparent 0),
         linear-gradient(45deg, transparent 75%, #bbb 0)`,
    backgroundSize: '30px 30px',
    backgroundPosition: `0 0, 15px 15px,
                         15px 15px, 30px 30px`
  },
  checkerboardTwo: {
    background: '#eee',
    backgroundImage:
        `linear-gradient(45deg,
                    rgba(0,0,0,.25) 25%, transparent 0,
                    transparent 75%, rgba(0,0,0,.25) 0),
                linear-gradient(45deg,
                    rgba(0,0,0,.25) 25%, transparent 0,
                    transparent 75%, rgba(0,0,0,.25) 0)`,
    backgroundPosition: '0 0, 15px 15px',
    backgroundSize: '30px 30px'
  }
}
