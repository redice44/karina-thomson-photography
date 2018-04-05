import * as React from 'react';

// import { DownArrow } from './DownArrow';
import { FullPane } from './FullPane';
import { FrontPageGallery } from './FrontPageGallery';

interface Gallery {

  src: string;
  posX: string;
  posY: string;

}

export interface GalleriesProps {

  children?: any;
  className?: string;
  galleries: Gallery[];

}

export interface GalleriesState {

  activeIndex: number;
  galleries: Gallery[];


}

export class Galleries extends React.Component < GalleriesProps, GalleriesState > {

  private readonly interval: number;
  private intervalId: number;

  constructor( props: GalleriesProps ) {

    super( props );
    this.interval = 5000;
    this.state = {

      activeIndex: 0,
      galleries: props.galleries

    };

  }

  tick() {

    this.setState( {

      activeIndex: ( this.state.activeIndex + 1 ) % this.state.galleries.length

    } );

  }

  componentDidMount() {

    this.intervalId = setInterval( this.tick.bind( this ), this.interval );

  }

  componentWillReceiveProps( nextProps: GalleriesProps ) {

    console.log( `galleries updated ${ nextProps.galleries.length }` );

    this.setState( {

      galleries: nextProps.galleries

    } );

  }

  componentWillUnmount() {

    clearInterval( this.intervalId );

  }

  render() {

    console.log( `galleries: ${ this.state.galleries.length }` );

    const galleries = this.state.galleries.map( ( gallery, i ) =>

      <FrontPageGallery
        imgSrc={ gallery.src }
        imgPosX={ gallery.posX }
        imgPosY={ gallery.posY }
        className={ this.state.activeIndex === i ? 'active' : '' }
      />

    );

    return (

      <FullPane
        id="galleries"
        className={ `main-pane ${ this.props.className ? this.props.className : '' }` }
      >
        { galleries }
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