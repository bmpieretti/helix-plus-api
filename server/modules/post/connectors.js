import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  authorId: String,
  title: String,
  description: String,
  body: String
}, {
  collection: 'PostList'
});

export default mongoose.model('post', postSchema);
