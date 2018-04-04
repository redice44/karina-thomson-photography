import * as React from 'react';

import { FullPane } from './FullPane';
import { FrontPageGallery } from './FrontPageGallery';
import { HalfPane } from './HalfPane';
import { ContactForm } from './ContactForm';

export interface ContactProps {

  children?: any;
  className?: string;

};

export const Contact = ( props: ContactProps ) =>

  <FullPane
    id="contact"
    className={ `main-pane ${ props.className ? props.className : '' }` }
  >
    <HalfPane side="left">
      <FrontPageGallery
        imgSrc="/images/IMG_8362.jpg"
        className="active"
      />
    </HalfPane>
    <HalfPane valign="center" side="right">
      <ContactForm />
    </HalfPane>
  </FullPane>