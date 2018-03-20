import * as React from 'react';

import { AboutText } from './AboutText';
import { FullPane } from './FullPane';
import { HalfPane } from './HalfPane';

export interface AboutProps {

  className?: string;

}

export const About = ( props: AboutProps ) =>

  <FullPane
    id="about"
    className={ `main-pane ${ props.className ? props.className : '' }` }
  >
    <HalfPane side="left">
      <img src="/images/IMG_8862.jpg" />
    </HalfPane>
    <HalfPane side="right" valign="center">
      <AboutText />
    </HalfPane>
  </FullPane>