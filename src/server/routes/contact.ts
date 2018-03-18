import * as express from 'express';

const ContactRouter = express.Router();

ContactRouter.post( '/me', ( req: express.Request, res: express.Response ) => {

  console.log( req.body );
  res.send( 'done' );

} );

export default ContactRouter;
