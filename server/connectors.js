import Mongoose from 'mongoose';

Mongoose.Promise = global.Promise;

const mongo = Mongoose.connect('mongodb://localhost:views', {
  useMongoClient: true
});

const viewSchema = Mongoose.Schema({
  postId: Number,
  views: Number
});

const view = Mongoose.model('views', viewSchema);

