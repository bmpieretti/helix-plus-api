import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/local');

const mongooseHelper = () => {
  const db = mongoose.connection;

  db.on('error', (error) => {
    console.log(`Issue setting up mongodb connection, connection responded with: ${error.message}`);
  });

  db.once('open', () => {
    console.log('Mongoose server up and running!');
  });
};

export default mongooseHelper;
