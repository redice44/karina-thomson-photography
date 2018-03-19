import * as React from 'react';

export interface FullPaneProps {

  id?: string;
  children?: any;
  className?: string;

}

export const FullPane = ( props: FullPaneProps ) =>

  <section 
    id={ props.id }
    className={ `full-pane ${ props.className ? props.className : '' }` }
  >
    { props.children }
  </section>
