import * as React from 'react';

import { RadioButton } from './RadioButton';

export interface radioOption {

  name: string;
  value: string;

}

export interface RadioChoicesProps {

  checked: number;
  options: radioOption[];
  onChange: ( value: string ) => void;

}

export interface RadioChoicesState {

}


export class RadioChoices extends React.Component < RadioChoicesProps, RadioChoicesState > {

  constructor( props: RadioChoicesProps ) {

    super( props );

  }

  render() {

    const radioButtons = this.props.options.map( ( option, i ) =>

      <RadioButton
        id={ i }
        name={ option.name }
        value={ option.value }
        selected={ this.props.checked === i }
        onChange={ () => { this.props.onChange( '' + i ) } }
      />

     );

    return (
      <div>
        { radioButtons }
      </div>
    );

  }

}