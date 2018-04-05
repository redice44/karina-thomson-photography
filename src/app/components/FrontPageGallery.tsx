import * as React from 'react';

import { FullPane } from './FullPane';

export interface FrontPageGalleryProps {

  className?: string;
  imgSrc: string;
  imgPosX: string;
  imgPosY: string;

}

export const FrontPageGallery = ( props: FrontPageGalleryProps ) =>

  <FullPane
    className={ `gallery ${ props.className ? props.className : '' }` }
    style={ {

      backgroundImage: `url(${ props.imgSrc })`,
      backgroundPositionX: props.imgPosX,
      backgroundPositionY: props.imgPosY

    } }
  />
