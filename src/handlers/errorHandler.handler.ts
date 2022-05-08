// External Imports
import { join as joinPath } from 'path';

// External Typings Imports
import type { Request, Response, NextFunction } from 'express';

export const errorHandler = (
	error: any,
	_req: Request,
	res: Response,
	_next: NextFunction
) => {
	if (!error.statusCode) error.statusCode = 500;

	if (error.statusCode === 404) {
		return res
			.status(error.statusCode)
			.sendFile(joinPath(__dirname, '../static/html/404.html'));
	}

	return res
		.status(error.statusCode)
		.json({ statusCode: error.statusCode, message: error.message });
};
