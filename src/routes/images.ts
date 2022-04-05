import express, { IRouter, Request, Response } from 'express';
const router: IRouter = express.Router();

router.get('/', (req: Request, res: Response) => {
  console.log(req.query);

  res.send('ALL OK');
});

export default router;
