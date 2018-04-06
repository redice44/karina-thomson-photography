import configServer from './server/config';

const server = configServer();

server.listen( server.get( 'port' ) );
