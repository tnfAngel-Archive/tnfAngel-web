// External Typings Imports
import type { Request, Response } from 'express';

// Local Typings Imports
import type { HTTPError } from '../classes/HTTPError.class';

export const errorHandler = (err: Error, req: Request, res: Response): void => {
	res.status(400).json(err);
};
