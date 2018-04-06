import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as path from 'path';

import routes from './routes';

export default () => {

  const server = express();

  server.set( 'port', process.env.PORT );

  server.use( bodyParser.urlencoded( { extended: true } ) );
  server.use( bodyParser.json() );

  server.set( 'views', path.join( __dirname, 'views' ) );
  server.set( 'view engine', 'pug' );

  server.use( express.static( path.join( __dirname, 'assets' ) ) );

  server.get( '/', routes.landingPage );
  server.use( '/contact', routes.contactRouter );

  return server;

}
