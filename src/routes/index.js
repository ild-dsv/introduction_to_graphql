import express from 'express';
import _ from 'lodash';
const router = express.Router();

// Import fake data
import authors from '../data/authors.json';
import posts from '../data/posts.json';

router.get('/', (req, res) => {
  res.end("Welcome to SERVER!!");
});

/* #3 GET request for getting info of a post and its author*/
/* #4 GET request for getting info of a post and its author without votes*/
router.get('/fullpost/:id', (req, res) => {
  const { id } = req.params;
  const { votes } = req.query;

  const post = _.find(posts, { id: Number(id) });
  const author = _.find(authors, { id: post.authorId });

  if (votes === 'true') {
    res.json({ data: { post: {...post, author }}});
  } else {
    res.json({ data: { post: {..._.omit(post, ['votes']), author }}});
  }
});
export default router;
