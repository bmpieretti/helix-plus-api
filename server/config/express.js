import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';

const GRAPHQL_PORT = 3000;

const expressHelper = (schema) => {
  const graphQLServer = express();

  graphQLServer.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
  graphQLServer.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

  graphQLServer.listen(GRAPHQL_PORT, () => {
    console.log('Express server up and running!');
  });
};

export default expressHelper;
