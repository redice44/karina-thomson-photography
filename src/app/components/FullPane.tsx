import * as React from 'react';

export interface FullPaneProps {

  id?: string;
  children?: any;
  className?: string;
  style?: any;

}

export const FullPane = ( props: FullPaneProps ) =>

  <section
    id={ props.id }
    className={ `full-pane ${ props.className ? props.className : '' }` }
    style={ props.style }
  >
    { props.children }
  </section>
