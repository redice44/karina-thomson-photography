import * as express from 'express';

import ContactRouter from './contact';

const landingPage = ( req: express.Request, res: express.Response ) => {

  return res.render( 'landing' );

}

export default {

  landingPage: landingPage,
  contactRouter: ContactRouter

};

