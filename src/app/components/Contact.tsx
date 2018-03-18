import * as React from 'react';

import { FullPane } from './FullPane';
import { HalfPane } from './HalfPane';
import { ContactForm } from './ContactForm';

export interface ContactProps {

  children?: any

};

export const Contact = ( props: ContactProps ) => 

  <FullPane id="contact">
    <HalfPane side="left">
      <img src="/images/IMG_8362.jpg" />
    </HalfPane>
    <HalfPane valign="center" side="right">
      <ContactForm />
    </HalfPane>
  </FullPane>