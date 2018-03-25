import Post from './connectors';

export const getPosts = async () => {
  const posts = await Post.find({});

  return posts;
};

export const getPost = async (postId) => {
  const post = await Post.findById(postId);

  return post;
};

export const savePost = async (newPost) => {
  const postItem = new Post({
    authorId: newPost.authorId,
    title: newPost.title,
    description: newPost.description,
    body: newPost.body
  });

  const post = await postItem.save();

  return post;
};
