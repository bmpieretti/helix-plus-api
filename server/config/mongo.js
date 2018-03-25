import { MongoClient } from 'mongodb';

const url = 'mongodb://localhost:27017';
const dbName = 'blog';

const mongoHelper = () => {
  MongoClient.connect(url, (error, client) => {
    if (!error) {
      console.log("Connected successfully to server"); // eslint-disable-line

      const db = client.db(dbName);

      client.close();
    } else {
      throw new Error(`Issue setting up mongodb connection, connection responded with: ${error.message}`);
    }
  });
};

export default mongoHelper;
