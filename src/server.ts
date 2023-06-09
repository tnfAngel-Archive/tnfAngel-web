export {};

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
app.use('/static', expressStatic(joinPath(__dirname, './static')));
app.use('/assets', expressStatic(joinPath(__dirname, './static/assets')));

// Routes
app.get('/', (_req: Request, res: Response): void => {
	res.sendFile(joinPath(__dirname, './static/html/index.html'));
});
app.get('/projects', (_req: Request, res: Response): void => {
	res.sendFile(joinPath(__dirname, './static/html/building.html'));
});
app.get(
	'/projects/arduino-bluetooth-car',
	(_req: Request, res: Response): void => {
		res.sendFile(
			joinPath(
				__dirname,
				'./static/html/projects/arduino-bluetooth-car.html'
			)
		);
	}
);
app.get('/github', (_req: Request, res: Response): void => {
	res.redirect('https://github.com/tnfAngel');
});
app.get('/discord', (_req: Request, res: Response): void => {
	res.redirect('https://discord.gg/8RNAdpK');
});

// Root
app.use('/', expressStatic(joinPath(__dirname, './static/assets/root')));

app.get('*', notFoundMW);

app.use(errorHandler);

// Starting the server
server.listen(app.get('port'), (): void => {
	console.log('==== Server ready ====');
	console.log(`Port: ${app.get('port')}`);
	console.log(`Environment: ${process.env.NODE_ENV}`);
	console.log(`Node version: ${process.version}`);
	console.log(`Visit: http://localhost:${app.get('port')}`);
	console.log('==== End Server ready ====');
});
