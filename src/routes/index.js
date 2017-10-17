import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.end("Welcome to SERVER!!");
});

/* #3 GET request for getting info of a post and its author*/

/* #4 GET request for getting info of a post and its author without votes*/

export default router;
