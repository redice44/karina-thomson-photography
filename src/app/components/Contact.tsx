import * as React from 'react';

import { FullPane } from './FullPane';
import { FrontPageGallery } from './FrontPageGallery';
import { HalfPane } from './HalfPane';
import { ContactForm } from './ContactForm';

export interface ContactProps {

  children?: any;
  className?: string;

};

export const Contact = ( props: ContactProps ) => {

  const img = {

    src: '/images/contact.jpg',
    posX: 'left',
    posY: 'top'

  };

  return (
    <FullPane
      id="contact"
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
      <HalfPane valign="center" side="right">
        <ContactForm />
      </HalfPane>
    </FullPane>
  );

}