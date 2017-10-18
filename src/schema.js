import {
  makeExecutableSchema
} from 'graphql-tools';

import resolvers from './resolvers';

const typeDefs = `
  type Post {
    id: Int!
    title: String!
    content: String
    votes: Int
    author: Author
  }

  type Author {
    id: Int!
    firstName: String
    lastName: String
    nickname: String
    url: String
    posts: [Post]
  }

  #The root of all queries:
  type Query {
    author(id: Int!): Author
    post(id: Int!): Post
    posts: [Post]
  }

  type Mutation {
    createPost(title: String, content: String, authorId: Int!): Post
    upvotePost(postId: Int!): Post
  }

  schema {
    query: Query
    mutation: Mutation
  }
`;

// Make a GraphQL schema with no resolvers
const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;
