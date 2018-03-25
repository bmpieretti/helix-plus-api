const Post = `
  type Post {
    id: String!
    authorId: String!
    title: String
    description: String
    body: String
  }

  type Query {
    posts: [Post],
    post(id: String!): Post
  }

  type Mutation {
    savePost(authorId: String!, title: String, description: String, body: String): Post
  }
`;

export default Post;
