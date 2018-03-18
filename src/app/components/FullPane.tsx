import * as React from 'react';

export interface FullPaneProps {

  id?: string;
  children?: any;

}

export const FullPane = ( props: FullPaneProps ) =>

  <section id={ props.id } className="full-pane">
    { props.children }
  </section>
