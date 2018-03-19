import * as React from 'react';

import { AboutText } from './AboutText';
import { FullPane } from './FullPane';
import { HalfPane } from './HalfPane';

export const About = () =>

  <FullPane id="about" className="main-pane">
    <HalfPane side="left">
      <img src="/images/IMG_8862.jpg" />
    </HalfPane>
    <HalfPane side="right" valign="center">
      <AboutText />
    </HalfPane>
  </FullPane>