import * as express from 'express';

const SoonRouter = express.Router();

SoonRouter.get( '/', ( req, res ) => {

  res.render( 'coming-soon' );

} );

export default SoonRouter;
