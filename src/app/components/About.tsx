import * as React from 'react';

import { AboutText } from './AboutText';
import { FrontPageGallery } from './FrontPageGallery';
import { FullPane } from './FullPane';
import { HalfPane } from './HalfPane';

export interface AboutProps {

  className?: string;

}


export const About = ( props: AboutProps ) => {

  const img = {

    src: '/images/about.jpg',
    posX: 'left',
    posY: 'top'

  };

  return (
    <FullPane
      id="about"
      className={ `main-pane ${ props.className ? props.className : '' }` }
    >
      <HalfPane side="left">
        <FrontPageGallery
          imgSrc={ img.src }
          imgPosX={ img.posX }
          imgPosY={ img.posY }
          className="active"
        />
      </HalfPane>
      <HalfPane side="right" valign="center">
        <AboutText />
      </HalfPane>
    </FullPane>
  );

}