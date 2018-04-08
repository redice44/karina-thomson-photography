import * as React from 'react';

import { Galleries } from '../components/Galleries';
import { ComingSoon } from '../components/ComingSoon';

export interface ComingSoonPageProps {}
export interface ComingSoonPageState {

  frontGallery: 'landscape'|'portrait';

}

export class ComingSoonPage extends React.Component < ComingSoonPageProps, ComingSoonPageState > {

  constructor( props: ComingSoonPageProps ) {

    super( props );

    this.state = {

      frontGallery: this.chooseGallery()

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

    return (
      <main>
        <Galleries
          galleries={ galleries[ this.state.frontGallery ] }
          className="active"
        />
        <ComingSoon />
      </main>

    );

  }

}
