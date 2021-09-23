// Servidor de Express
import express from 'express';
import http from 'http';
import path from 'path';
import cors from 'cors';
import { environment } from './config/environments/environment';
import db from './config/db';

import routeProject from './routes/project.route';

// const Sockets  = require('./sockets');

class Server {
  constructor() {
    this.app = express();
    this.port = environment.PORT;
    // Http server
    this.server = http.createServer(this.app);
    // Configuraciones de sockets
    // this.io = socketio( this.server, { /* configuraciones */ } );
  }

  middlewares() {
    // Desplegar el directorio público
    this.app.use(express.static(path.resolve(__dirname, '../src/public')));

    // CORS
    this.app.use(cors());

    this.app.use(express.json());
  }

  routes() {
    // rutas API
    this.app.use('/api/v1/project', routeProject);
  }

  // Esta configuración se puede tener aquí o como propieda de clase
  // depende mucho de lo que necesites
  configurarSockets() {
    // new Sockets( this.io );
  }

  execute() {
    // iniciar db
    db();
    // Inicializar Middlewares
    this.middlewares();

    // Inicializar sockets
    this.configurarSockets();
    this.routes();

    // Inicializar Server
    this.server.listen(this.port, () => {
      console.log('Server corriendo en puerto:', this.port);
    });
  }
}
module.exports = Server;
