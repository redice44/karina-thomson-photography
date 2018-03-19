import * as React from 'react';

import { Galleries } from './Galleries';
import { About } from './About';
import { Contact } from './Contact';

export const App = () => {


  const galleries = [

    "/images/IMG_6625.jpg",
    "/images/IMG_7863.jpg",
    "/images/IMG_8929.jpg"

  ];

  return (
    <main id="app">
      <Galleries galleries={ galleries } />
      <About />
      <Contact />
    </main>
  );

}