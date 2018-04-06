import * as React from 'react';
//@ts-ignore
import { NotificationContainer, NotificationManager } from 'react-notifications';

import { TextArea } from './TextArea';
import { TextInput } from './TextInput';

export interface ContactFormProps {}
export interface ContactFormState {

  fullname: string;
  email: string;
  event: string;
  referral: string;
  message: string;

}

export class ContactForm extends React.Component < ContactFormProps, ContactFormState >  {

  constructor( props: ContactFormProps ) {

    super( props );

    this.state = {

      fullname: '',
      email: '',
      event: '',
      referral: '',
      message: ''

    };

  }

  handleChange( key: string, value: string ) {

    const update: any = {};
    update[ key ] = value;

    this.setState( update );

  }

  submitForm() {

    document.querySelector( '#contact' ).scrollIntoView();

    const url = '/contact/me';
    const opts = {

      method: 'POST',
      headers: {

        'content-type': 'application/json'

      },
      body: JSON.stringify( {

        fullname: this.state.fullname,
        email: this.state.email,
        event: this.state.event,
        referral: this.state.referral,
        message: this.state.message

      } )

    };

    fetch( url, opts )
      .then( res => {

        if ( res.ok ) {

          return res.json();

        }

        throw new Error( 'Error in response' );

      } )
        .then( json => {

          NotificationManager.success( 'You can expect an email from me in the next 72 hours.' );

        } )
        .catch( error => {

          NotificationManager.error( 'An Error has occurred. Please try again.' );
          console.log( error );

        } );

  }

  render() {

    return (
      <section id="contact-form">
        <h1>Let's Get In Touch</h1>
        <TextInput
          name="fullname"
          type="text"
          placeholder="Full Name"
          value={ this.state.fullname }
          onChange={ this.handleChange.bind( this ) }
        />
        <TextInput
          name="email"
          type="email"
          placeholder="Email Address"
          required={ true }
          value={ this.state.email }
          onChange={ this.handleChange.bind( this ) }
        />
        <TextInput
          name="event"
          type="text"
          placeholder="Event Date and Location"
          value={ this.state.event }
          onChange={ this.handleChange.bind( this ) }
        />
        <TextInput
          name="referral"
          type="text"
          placeholder="Referral"
          value={ this.state.referral }
          onChange={ this.handleChange.bind( this ) }
        />
        <TextArea
          name="message"
          placeholder="Your Message"
          value={ this.state.message }
          onChange={ this.handleChange.bind( this ) }
        />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <input
            type="button"
            value="Let's Connect"
            onClick={ this.submitForm.bind( this ) }
          />
        </div>
        <NotificationContainer />
      </section>
    );

  }

}

