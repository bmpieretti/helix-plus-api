import { makeExecutableSchema } from 'graphql-tools';

import express from './config/express';
import mongo from './config/mongo';
import mongoose from './config/mongoose';

import postSchema from './modules/post/schema';
import postResolvers from './modules/post/resolvers';

const resolvers = {
  ...postResolvers
};

const SchemaDefinition = `
  schema {
    query: Query
    mutation: Mutation
  }
`;

const schema = makeExecutableSchema({
  typeDefs: [
    SchemaDefinition,
    postSchema
  ],
  resolvers
});

mongo();
mongoose();
express(schema);
