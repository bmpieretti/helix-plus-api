import express from './config/express';
import mongo from './config/mongo';
import mongoose from './config/mongoose';

import schema from './modules/post/schema';
// import connectors from './modules/post/connectors';

mongo();
mongoose();
express(schema);
