import * as React from 'react';

export interface TextAreaProps {

  name: string;
  placeholder: string;
  value: string;
  onChange: ( key: string, value: string ) => void;

};

export const TextArea = ( props: TextAreaProps ) =>

  <textarea
    placeholder={ props.placeholder }
    name={ props.name }
    value={ props.value }
    onChange={ event => { props.onChange( props.name, event.target.value ) } }
  />