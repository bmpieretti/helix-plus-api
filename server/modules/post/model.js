import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  authorId: { type: String, required: true },
  title: { type: String, required: true },
  description: String,
  body: { type: String, required: true }
}, {
  collection: 'PostList'
});

export default mongoose.model('post', postSchema);
