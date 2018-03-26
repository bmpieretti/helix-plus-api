import connectors from './connectors';

const resolvers = {
  Query: {
    posts: () => (connectors.getPosts()),
    post: (root, { id }) => (
      connectors.getPost(id)
    )
  },
  Mutation: {
    savePost: (root, {
      authorId, title, description, body
    }) => (
      connectors.savePost({
        authorId, title, description, body
      })
    )
  }
};

export default resolvers;
