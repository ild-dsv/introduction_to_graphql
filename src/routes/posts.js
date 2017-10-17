import express from 'express';
import _ from 'lodash';
const router = express.Router();

// Import fake data
import authors from '../data/authors.json';
import posts from '../data/posts.json';

Start endpoint: /posts
router.get('/', (req, res) => {
  res.end("This is start routes for /posts endpoint");
});

// TODO
/* GET request for list of all posts. */


/* GET request for one post. */


/* POST request for creating a new post. */


/* PATCH request for updating a post. */


/* DELETE request for deleting a post. */


export default router;
