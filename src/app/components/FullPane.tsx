import * as React from 'react';

export interface FullPaneProps {

  children?: any

}

export const FullPane = ( props: FullPaneProps ) =>

  <section className="full-pane">
    { props.children }
  </section>
