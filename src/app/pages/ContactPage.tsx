import * as React from 'react';

import { Hero } from '../components/Hero';

export const ContactPage = () => {

  const img = {

    src: '/images/contact-cover.jpg',
    posX: 'center',
    posY: 'center'

  };

  return (
    <main
      id="app"
    >
      <Hero
        imgSrc={ img.src }
        imgPosX={ img.posX }
        imgPosY={ img.posY }
      />
    </main>
  );

};