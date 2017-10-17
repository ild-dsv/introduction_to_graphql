import express from 'express';
import _ from 'lodash';
const router = express.Router();

// Import fake data
import authors from '../data/authors.json';
import posts from '../data/posts.json';

// Start endpoint: /authors
router.get('/', (req, res) => {
  res.end("This is start routes for /authors endpoint");
});

// TODO
/* #1 GET request for getting info of an author. */

/* #2 GET request for getting info of an author except url field. */

export default router;
