import * as express from 'express';
// @ts-ignore
import * as gmailSend from 'gmail-send';

const ContactRouter = express.Router();

ContactRouter.get( '/', ( req: express.Request, res: express.Response ) => {

  res.render( 'contact' );

} );

ContactRouter.post( '/me', ( req: express.Request, res: express.Response ) => {

  const name = req.body.fullname;
  const email = req.body.email;
  const event = req.body.event;
  const referral = req.body.referral;
  const message = req.body.message;
  const send = gmailSend( {

    user: process.env.HOST_EMAIL_NAME,
    pass: process.env.HOST_EMAIL_PASS

  } );

  const bodyText = `${ name } has sent you the following:

Email: ${ email }
Event Date and Location: ${ event }
Referral: ${ referral }

Message: ${ message }
`;

  send( {

    to: process.env.HOST_EMAIL_NAME,
    subject: `New contact from ${ name }`,
    text: bodyText,

  }, ( err: any, emailRes: any ) => {

    res.json( { message: 'success' } );

  });

} );

export default ContactRouter;
