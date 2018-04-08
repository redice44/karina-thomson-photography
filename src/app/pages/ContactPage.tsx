import * as React from 'react';

import { Hero } from '../components/Hero';
import { ContactForm } from '../components/ContactForm';

export interface ContactPageProps {

}

export interface ContactPageState {

  display: 'landscape'|'portrait';

}

export class ContactPage extends React.Component < ContactPageProps, ContactPageState > {

  constructor( props: ContactPageProps ) {

    super( props );

    this.state = {

      display: this.chooseGallery()

    }

  }

  componentDidMount() {

    window.addEventListener( 'resize', this.onResize.bind( this ) );

  }

  componentWillUnmount() {

    window.removeEventListener( 'resize', this.onResize.bind( this ) );

  }

  onResize() {

    this.setState( {

      display: this.chooseGallery()

    } );

  }

  chooseGallery() {

    return window.innerWidth > 480 ? 'landscape' : 'portrait';

  }

  render() {

    const img = {

      landscape: {

        src: '/images/contact-cover.jpg',
        posX: 'center',
        posY: 'center'

      },
      portrait:{

        src: '/images/contact-cover.jpg',
        posX: '20%',
        posY: 'center'

      }

    };

    return (
      <main
        id="app"
      >
        <Hero
          imgSrc={ img[ this.state.display ].src }
          imgPosX={ img[ this.state.display ].posX }
          imgPosY={ img[ this.state.display ].posY }
        />
        <ContactForm />
      </main>
    );


  }

}
