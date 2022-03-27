// External imports
import express, {
	json as jsonMW,
	urlencoded as urlencodedMW,
	static as expressStatic
} from 'express';
import { createServer as httpServer } from 'http';
import { join as joinPath } from 'path';
import morgan from 'morgan';

// Local imports
import { notFoundMW } from './middlewares/notFound.middleware';
import { errorHandler } from './handlers/errorHandler.handler';

// External Typings imports
import type { Request, Response } from 'express';

// App & Server
const app = express();
const server = httpServer(app);
const port = process.env.PORT ?? 3000;

// App settings
app.set('port', port);
app.set('json spaces', 2);
app.set('trust proxy', true);

// Middlewares
app.use(morgan('dev'));
app.use(jsonMW());
app.use(
	urlencodedMW({
		extended: false
	})
);

// Path Middlewares
app.use('/assets', expressStatic('./assets'));
app.use('/static', expressStatic('./static'));

// Routes
app.get('/', (req: Request, res: Response): void => {
	res.sendFile(joinPath(__dirname, './static/pages/index/html/index.html'));
});
app.get('/discord', (req: Request, res: Response): void => {
	res.redirect('https://discord.gg/8RNAdpK');
});

// Robots
app.get('/robots.txt', (req: Request, res: Response): void => {
	res.sendFile('assets/robots.txt', { root: __dirname });
});

// 404 Middleware
app.use(notFoundMW);

// Error handler
app.use(errorHandler);

// Starting the server
server.listen(app.get('port'), (): void => {
	console.log(`Server listening on port ${app.get('port')}`);
});
