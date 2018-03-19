import * as React from 'react';

import { FullPane } from './FullPane';

export interface FrontPageGalleryProps {

  className?: string;
  imgSrc: string;

}

export const FrontPageGallery = ( props: FrontPageGalleryProps ) => 

  <FullPane className={ `gallery ${ props.className ? props.className : '' }` }>
    <img src={ props.imgSrc } />
  </FullPane>
