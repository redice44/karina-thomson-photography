import * as React from 'react';

import { Galleries } from './Galleries';
import { About } from './About';
import { Contact } from './Contact';

enum Panes {

  Galleries = 0,
  About,
  Contact

}



export interface AppProps {

  children?: any

}

export interface AppState {

  activePane: Panes;
  frontGallery: 'landscape'|'portrait';

}

export class App extends React.Component < AppProps, AppState > {

  private readonly buffer: number;
  private readonly numSections: number;

  constructor( props: AppProps ) {

    super( props );

    this.state = {

      activePane: Panes.Galleries,
      frontGallery: this.chooseGallery()

    };
    this.buffer = Math.floor( window.innerHeight / 4 );
    this.numSections = 3;

  }

  componentDidMount() {

    window.addEventListener( 'scroll', this.onScroll.bind( this ) );
    window.addEventListener( 'resize', this.onResize.bind( this ) );

  }

  componentWillUnmount() {

    window.removeEventListener( 'scroll', this.onScroll.bind( this ) );
    window.removeEventListener( 'resize', this.onResize.bind( this ) );

  }

  onScroll() {

    this.setState( {

      activePane: Math.floor( ( window.scrollY + this.buffer * 0.5 ) / this.buffer )

    } );

  }

  onResize() {

    this.setState( {

      frontGallery: this.chooseGallery()

    } );

  }

  chooseGallery() {

    return window.innerWidth > 480 ? 'landscape' : 'portrait';

  }

  render() {


    const galleries = {

      landscape: [

        {
          src: '/images/monterrey-family-fp.jpg',
          posX: 'center',
          posY: 'center'
        },
        {
          src: '/images/andrea-fp.jpg',
          posX: 'center',
          posY: 'bottom'
        },
        {
          src: '/images/isabella-baptism-fp01.jpg',
          posX: 'center',
          posY: 'top'
        },
        {
          src: '/images/lauren-fp.jpg',
          posX: 'center',
          posY: 'center'
        },
        {
          src: '/images/martinez-family-fp.jpg',
          posX: 'center',
          posY: 'bottom'
        },
        {
          src: '/images/isabella-baptism-fp03.jpg',
          posX: 'center',
          posY: 'center'
        }

      ],
      portrait: [

        {
          src: '/images/andrea-fp.jpg',
          posX: '75%',
          posY: 'bottom'
        },
        {
          src: '/images/stephanie-raul-fp.jpg',
          posX: 'center',
          posY: 'bottom'
        },
        {
          src: '/images/isabella-baptism-fp02.jpg',
          posX: 'center',
          posY: 'center'
        },
        // {
        //   src: '/images/martinez-family-fp.jpg',
        //   posX: '70%',
        //   posY: 'bottom'
        // }

      ]

    };
    console.log( 'render', this.state.frontGallery, galleries[ this.state.frontGallery ].length );

    const classesWide = Array.apply( null, { length: this.numSections } ).map( ( d: any, i: number ) => {

      if ( i < this.state.activePane ) {

        return 'above';

      }

      return i > this.state.activePane ? 'below' : 'active';

    } );

    return (
      <main
        id="app"
      >
        <Galleries
          galleries={ galleries[ this.state.frontGallery ] }
          className={ classesWide[ Panes.Galleries ] }
        />
        <About
          className={ classesWide[ Panes.About ] }
        />
        <Contact
          className={ classesWide[ Panes.Contact ] }
        />
      </main>
    );

  }

}