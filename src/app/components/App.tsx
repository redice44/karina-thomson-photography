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

}

export class App extends React.Component < AppProps, AppState > {

  private readonly buffer: number;

  constructor( props: AppProps ) {

    super( props );

    this.state = {

      activePane: Panes.Galleries,

    };
    this.buffer = 200;

  }

  componentDidMount() {

    window.addEventListener( 'scroll', this.onScroll.bind( this ) );

  }

  componentWillUnmount() {

    window.removeEventListener( 'scroll', this.onScroll.bind( this ) );

  }

  onScroll() {

    this.setState( {

      activePane: Math.floor( window.scrollY / this.buffer )

    } );

  }

  render() {


    const galleries = [

      "/images/IMG_6625.jpg",
      "/images/IMG_7863.jpg",
      "/images/IMG_8929.jpg"

    ];

    // const appHeight = ( galleries.length * this.buffer ) + window.innerHeight - 1;
    const classes = galleries.map( ( d, i ) => {

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
          galleries={ galleries }
          className={ classes[ Panes.Galleries ] }
        />
        <About
          className={ classes[ Panes.About ] }
        />
        <Contact
          className={ classes[ Panes.Contact ] }
        />
      </main>
    );

  }

}