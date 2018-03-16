import * as express from 'express';
import * as path from 'path';

import routes from './routes';

export default () => {

  const server = express();

  server.set( 'views', path.join( __dirname, 'views' ) );
  server.set( 'view engine', 'pug' );

  server.use( express.static( path.join( __dirname, 'assets' ) ) );

  server.get( '*', routes.landingPage );

  return server;

}