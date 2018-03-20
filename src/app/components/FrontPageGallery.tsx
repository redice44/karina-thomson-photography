import * as React from 'react';

import { FullPane } from './FullPane';

export interface FrontPageGalleryProps {

  className?: string;
  imgSrc: string;

}


    // <img src={ props.imgSrc } />

export const FrontPageGallery = ( props: FrontPageGalleryProps ) =>

  <FullPane
    className={ `gallery ${ props.className ? props.className : '' }` }
    style={{ backgroundImage: `url(${ props.imgSrc })` }}
  />
