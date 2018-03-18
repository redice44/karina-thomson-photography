import * as React from 'react';

export interface TextInputProps {

  type: 'text'|'email',
  placeholder?: string

}

export const TextInput = ( props: TextInputProps ) => 

  <input
    type={ props.type }
    placeholder={ props.placeholder }
    />