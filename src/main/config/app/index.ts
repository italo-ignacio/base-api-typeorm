import { createServer } from 'http';
import { options } from '@main/routes/swagger';
import { setupMiddleware } from '@main/config/middleware';
import { setupRoutes } from '@main/config/routes';
// import cors from 'cors';
import express from 'express';
import expressJSDocSwagger from 'express-jsdoc-swagger';

const app = express();

expressJSDocSwagger(app)(options);

setupMiddleware(app);

// app.use(cors());

setupRoutes(app);

const http = createServer(app);

export { http, app };
