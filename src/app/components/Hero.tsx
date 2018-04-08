import * as React from 'react';

import { FullPane } from './FullPane';
import { FrontPageGallery } from './FrontPageGallery';

export interface HeroProps {

  className?: string;
  imgSrc: string;
  imgPosX: string;
  imgPosY: string;

};

export const Hero = ( props: HeroProps ) =>

  <FullPane
    id="hero"
  >
    <FrontPageGallery
      className={ `${ props.className ? props.className : '' } active` }
      imgSrc={ props.imgSrc }
      imgPosX={ props.imgPosX }
      imgPosY={ props.imgPosY }
    />
    <div className="cta">
      <img src="/images/logo-light.png" />
    </div>



  </FullPane>