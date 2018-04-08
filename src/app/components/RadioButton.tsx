import * as React from 'react';

export interface RadioButtonProps {

  id: number;
  name: string;
  value: string;
  selected: boolean;
  onChange: () => void;

};

export const RadioButton = ( props: RadioButtonProps ) =>

  <div className="radio-button">
    <input
      id={ `${ props.name }-${ props.id }` }
      type="radio"
      value={ props.value }
      checked={ props.selected }
      onClick={ e => { props.onChange(); } }
    />
    {/*
    //@ts-ignore*/}
    <label for={ `${ props.name }-${ props.id }` }>{ props.name }</label>
  </div>