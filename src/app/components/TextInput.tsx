import * as React from 'react';

export interface TextInputProps {

  type: 'text'|'email';
  name: string;
  placeholder?: string;

}

export const TextInput = ( props: TextInputProps ) => 

  <input
    type={ props.type }
    placeholder={ props.placeholder }
    name={ props.name }
    />