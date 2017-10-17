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
/* #2 GET request for getting info of an author except nickname field. */
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const { nickname } = req.query;

  const author = _.find(authors, { id: Number(id) });

  if (nickname === 'true') {
    res.json({ data: { author }});
  } else {
    res.json({ data: { author: _.omit(author, ['nickname']) }});
  }
});
export default router;
