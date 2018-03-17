import * as React from 'react';

import { FullPane } from './FullPane';
import { HalfPane } from './HalfPane';

export const About = () =>

  <FullPane>
    <HalfPane side="left">
      <img src="/images/IMG_8862.jpg" />
    </HalfPane>
    <HalfPane side="right">
      About Blurb
    </HalfPane>
  </FullPane>