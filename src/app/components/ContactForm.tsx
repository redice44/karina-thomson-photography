import * as React from 'react';

import { TextArea } from './TextArea';
import { TextInput } from './TextInput';

export const ContactForm = () =>

  <section id="contact-form">
    <h1>Let's Get In Touch</h1>
    <form method="POST" action="/contact/me">
      <TextInput name="full-name" type="text" placeholder="Full Name" />
      <TextInput name="email" type="email" placeholder="Email Address" />
      <TextInput name="event" type="text" placeholder="Event Date and Location" />
      <TextInput name="referral" type="text" placeholder="Referral" />
      <TextArea name="message" placeholder="Your Message" />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <input type="submit" value="Let's Connect" />
      </div>
    </form>
  </section>