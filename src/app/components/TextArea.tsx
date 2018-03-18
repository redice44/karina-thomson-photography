import * as React from 'react';

export interface TextAreaProps {

  placeholder: string

};

export const TextArea = ( props: TextAreaProps ) => 

  <textarea placeholder={ props.placeholder }>
  </textarea>