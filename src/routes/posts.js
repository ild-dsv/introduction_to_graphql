import express from 'express';
import _ from 'lodash';
const router = express.Router();

// Import fake data
import authors from '../data/authors.json';
import posts from '../data/posts.json';

// TODO
/* GET request for list of all posts. */
router.get('/', (req, res) => {
  res.json({ data: posts });
});

/* GET request for one post. */
router.get('/:id', (req, res) => {
  const { id } = req.params;

  const post = _.find(posts, { id: Number(id) });
  res.json({ data: post });
});

/* POST request for creating a new post. */
/*
* endpoint: /
* body:
  + content: String
  + authorId: Int
  Response:
    + status: 200
    + data: post
*/
router.post('/', (req, res) => {
  const { title, content, authorId } = req.body;
  const newId = posts.length + 1;

  const newPost = {
    id: newId,
    content,
    authorId: Number(authorId),
    votes: 0,
  };

  posts.push(newPost);

  res
    .status(200)
    .json({
      data: {post: newPost}
    });
});

/* PATCH request for updating a post. */
/*
* endpoint: /:id/votes
* body:
  + id: Int
  Response:
    + status: 201
    + data: post
*/
router.patch('/:id/votes', (req, res) => {
  const { id } = req.params;

  const i = _.findIndex(posts, { id: Number(id) });
  if (i !== -1) {
    posts[i].votes += 1;

    res
      .status(201)
      .json({
        data: { post: posts[i] }
      });
  }
  else {
    res
      .status(404)
      .json({
        message: 'Post Not Found'
      });
  }
});

/* DELETE request for deleting a post. */
/*
* endpoint: /
* body:
  + id: Int
  Response:
    Success:
    + status: 201
    + data: posts
*/
router.delete('/:id', (req, res) => {
  const { id } = req.params;

  const i = _.findIndex(posts, { id: Number(id) });
  if (i !== -1) {
    posts.splice(i, 1);

    res
      .status(201)
      .json({
        data: { posts: posts }
      });
  }
  else {
    res
      .status(404)
      .json({
        message: 'Post Not Found'
      });
  }
});

export default router;
