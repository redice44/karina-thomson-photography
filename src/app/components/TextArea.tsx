import * as React from 'react';

export interface TextAreaProps {

  name: string;
  placeholder: string;

};

export const TextArea = ( props: TextAreaProps ) => 

  <textarea 
    placeholder={ props.placeholder }
    name={ props.name }
  >
  </textarea>