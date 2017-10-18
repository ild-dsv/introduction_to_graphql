import { find, filter } from 'lodash';

import posts from './data/posts.json';
import authors from './data/authors.json';

const resolvers = {
  Query: {
    posts: () => posts,
    author: (_, { id }) => find(authors, { id }),
    post: (_, { id }) => find(posts, { id }),
  },
  Mutation: {
    upvotePost: (_, { postId }) => {
      const post = find(posts, { id: postId });
      if (!post) {
        throw new Error(`Couldn't find post with id ${postId}`);
      }
      post.votes += 1;
      return post;
    },
    createPost: (_, { title, content, authorId }) => {
      const newPost = {
        id: posts.length + 1,
        title,
        content,
        votes: 0,
        authorId
      }

      return newPost;
    }
  },
  Author: {
    posts: (author) => filter(posts, { authorId: author.id }),
  },
  Post: {
    author: (post) => find(authors, { id: post.authorId }),
  },

}

export default resolvers;
