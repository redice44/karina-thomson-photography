import * as React from 'react';

import { TextArea } from './TextArea';
import { TextInput } from './TextInput';

export const ContactForm = () => 

  <form id="contact-form">
    <TextInput type="text" placeholder="Full Name" />
    <TextInput type="email" placeholder="Email Address" />
    <TextInput type="text" placeholder="Event Date and Location" />
    <TextInput type="text" placeholder="Referral" />
    <TextArea placeholder="Your Message" />
    <input type="submit" value="Let's Connect" />
  </form>