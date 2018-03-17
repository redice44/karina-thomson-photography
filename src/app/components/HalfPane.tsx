import * as React from 'react';

export interface HalfPaneProps {

  side: 'left'|'right';
  children?: any;

};

export const HalfPane = ( props: HalfPaneProps ) => 

  <section 
    className={`half-pane ${ props.side }`}
  >
    { props.children }
  </section>
