// External Imports
import { Router } from 'express';

// External Typings Imports
import type { Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
	res.send('200 OK');
});

module.exports = router;
