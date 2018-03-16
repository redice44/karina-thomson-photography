import * as express from 'express';

const landingPage = ( req: express.Request, res: express.Response ) => {

  return res.render( 'landing' );

}

export default {

  landingPage: landingPage

};

