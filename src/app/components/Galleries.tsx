import * as React from 'react';

import { DownArrow } from './DownArrow';
import { FullPane } from './FullPane';
import { FrontPageGallery } from './FrontPageGallery';

export interface GalleriesProps {

  children?: any;
  galleries: string[];

}

export interface GalleriesState {

  activeIndex: number;

}

export class Galleries extends React.Component < GalleriesProps, GalleriesState > {

  private intervalId: number;
  private galleries: string[];

  constructor( props: GalleriesProps ) {

    super( props );
    this.galleries = props.galleries;
    this.state = {

      activeIndex: 0

    };

  }

  tick() {

    this.setState( {

      activeIndex: ( this.state.activeIndex + 1 ) % this.galleries.length

    } );

  }

  componentDidMount() {

    this.intervalId = setInterval( this.tick.bind( this ), 5000 );

  }

  componentWillUnmount() {

    clearInterval( this.intervalId );

  }

  render() {

    const galleries = this.galleries.map( ( gallery, i ) => 

      <FrontPageGallery
        imgSrc={ gallery }
        className={ this.state.activeIndex === i ? 'active' : '' }
      />

    );

    return (

      <FullPane id="galleries" className="main-pane">
        { galleries }
        <DownArrow />
      </FullPane>

    );

  }

}


// export const Galleries = ( props: GalleriesProps ) => {

//   const galleries = [
//     "/images/IMG_6625.jpg",
//     "/images/IMG_7863.jpg",
//     "/images/IMG_8929.jpg"
//   ].map( d => <FrontPageGallery imgSrc=d />)

//   return (
//     <FullPane id="galleries" className="main-pane">
//       { galleries }
//     </FullPane>
//   );
// }