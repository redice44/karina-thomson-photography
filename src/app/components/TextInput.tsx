import * as React from 'react';

export interface TextInputProps {

  type: 'text'|'email';
  name: string;
  placeholder?: string;
  value: string;
  onChange: ( key: string, value: string ) => void;
}

export const TextInput = ( props: TextInputProps ) =>

  <input
    type={ props.type }
    placeholder={ props.placeholder }
    name={ props.name }
    value={ props.value }
    onChange={ event => { props.onChange( props.name, event.target.value ) } }
  />