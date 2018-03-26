import * as React from 'react';

import { AboutText } from './AboutText';
import { FrontPageGallery } from './FrontPageGallery';
import { FullPane } from './FullPane';
import { HalfPane } from './HalfPane';

export interface AboutProps {

  className?: string;

}


      // <img src="/images/IMG_8862.jpg" />

export const About = ( props: AboutProps ) =>

  <FullPane
    id="about"
    className={ `main-pane ${ props.className ? props.className : '' }` }
  >
    <HalfPane side="left">
      <FrontPageGallery
        imgSrc="/images/IMG_8862.jpg"
        className="active"
      />
    </HalfPane>
    <HalfPane side="right" valign="center">
      <AboutText />
    </HalfPane>
  </FullPane>