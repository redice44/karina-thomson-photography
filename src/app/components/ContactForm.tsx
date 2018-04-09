import * as React from 'react';
//@ts-ignore
import { NotificationContainer, NotificationManager } from 'react-notifications';

import { RadioChoices } from './RadioChoices';
import { TextArea } from './TextArea';
import { TextInput } from './TextInput';

export interface ContactFormProps {}
export interface ContactFormState {

  fullname: string;
  email: string;
  eventDate: string;
  eventLoc: string;
  referral: string;
  message: string;
  optionId: string;

}

export class ContactForm extends React.Component < ContactFormProps, ContactFormState >  {

  private readonly photographyCategory: any[];

  constructor( props: ContactFormProps ) {

    super( props );

    this.state = {

      fullname: '',
      email: '',
      eventDate: '',
      eventLoc: '',
      referral: '',
      message: '',
      optionId: '-1'

    };

    this.photographyCategory = [

      {
        name: 'Wedding',
        value: 'wedding'
      },
      {
        name: 'Engagement',
        value: 'engagement'
      },
      {
        name: 'Family',
        value: 'family'
      },
      {
        name: 'Fresh 48',
        value: 'fresh-48'
      },
      {
        name: 'Portraits',
        value: 'portraits'
      },
      {
        name: 'Other',
        value: 'other'
      }

    ];

  }

  handleChange( key: string, value: string ) {

    const update: any = {};
    update[ key ] = value;

    this.setState( update );

  }

  submitForm() {

    document.querySelector( '#app' ).scrollIntoView();

    const url = '/contact/me';
    const opts = {

      method: 'POST',
      headers: {

        'content-type': 'application/json'

      },
      body: JSON.stringify( {

        fullname: this.state.fullname,
        email: this.state.email,
        eventDate: this.state.eventDate,
        eventLoc: this.state.eventLoc,
        eventType: this.state.optionId === '-1' ? 'None Chosen' : this.photographyCategory[ parseInt( this.state.optionId ) ].value,
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

          NotificationManager.success( 'Message Sent. You can expect an email in the next 72 hours.' );
          this.setState( {

            fullname: '',
            email: '',
            eventDate: '',
            eventLoc: '',
            referral: '',
            message: '',
            optionId: '-1'

          } );


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
          placeholder="Full Name*"
          value={ this.state.fullname }
          onChange={ this.handleChange.bind( this ) }
        />
        <TextInput
          name="email"
          type="email"
          placeholder="Email Address*"
          value={ this.state.email }
          onChange={ this.handleChange.bind( this ) }
        />
        <TextInput
          name="eventDate"
          type="text"
          placeholder="Event Date*"
          value={ this.state.eventDate }
          onChange={ this.handleChange.bind( this ) }
        />
        <TextInput
          name="eventLoc"
          type="text"
          placeholder="Event Location*"
          value={ this.state.eventLoc }
          onChange={ this.handleChange.bind( this ) }
        />
        <TextInput
          name="referral"
          type="text"
          placeholder="Referral"
          value={ this.state.referral }
          onChange={ this.handleChange.bind( this ) }
        />
        <p style={{ paddingLeft: '10px', paddingBottom: '5px'}}>Photography Category*</p>
        <RadioChoices
          options={ this.photographyCategory }
          checked={ parseInt( this.state.optionId ) }
          onChange={ ( value ) => { this.handleChange( 'optionId', value ) } }
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

