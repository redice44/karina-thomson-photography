import * as React from 'react';

export interface HalfPaneProps {

  valign?: 'center';
  side: 'left'|'right';
  children?: any;

};

export const HalfPane = ( props: HalfPaneProps ) => 

  <section 
    className={ `half-pane ${ props.side } ${ props.valign ? `valign-${ props.valign }` : '' }` }
  >
    { props.children }
  </section>
