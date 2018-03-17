import * as React from 'react';

import { FullPane } from './FullPane';
import { HalfPane } from './HalfPane';

export interface ContactProps {

  children?: any

};

export const Contact = ( props: ContactProps ) => 

  <FullPane>
    <HalfPane side="left">
      <img src="/images/IMG_8362.jpg" />
    </HalfPane>
    <HalfPane side="right">
      Contact Form
    </HalfPane>
  </FullPane>