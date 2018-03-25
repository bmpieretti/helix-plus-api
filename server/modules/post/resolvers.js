import { getPosts, getPost, savePost } from './post';

const resolvers = {
  Query: {
    posts: () => (getPosts()),
    post: (root, { id }) => (
      getPost(id)
    )
  },
  Mutation: {
    savePost: (root, {
      authorId, title, description, body
    }) => (
      savePost({
        authorId, title, description, body
      })
    )
  }
};

export default resolvers;
