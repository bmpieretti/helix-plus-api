import Post from './model';

const getPosts = () => {
  const posts = Post.find({});

  return posts;
};

const getPost = (postId) => {
  const post = Post.findById(postId);

  return post;
};

const savePost = (newPost) => {
  const postItem = new Post({
    authorId: newPost.authorId,
    title: newPost.title,
    description: newPost.description,
    body: newPost.body
  });

  const post = postItem.save();

  return post;
};

export default {
  getPosts,
  getPost,
  savePost
};
