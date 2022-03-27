// Local Imports
import { HTTPError } from '../classes/HTTPError.class';

// External Typings Imports
import type { Request, Response, NextFunction } from 'express';

export const notFoundMW = (req: Request, res: Response, next: NextFunction) => {
	const error = new Error('Not Found.');
	next(error);
};
