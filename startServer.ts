import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { getSchema } from './getSchema';
import mongoose from 'mongoose';
import "dotenv/config";


const startServer = async () => {
  const app = express();
  
  const cors = {
          credentials: true,
          origin: "http://localhost:4000"
  }
  
 await mongoose.connect(`mongodb://localhost:27017/${process.env.TEST_SERVER === 'true' ? 'phonesTest' : 'phoneDb'}`);

  
  const server = new ApolloServer({schema: getSchema(), context: ({res, req}) => ({res, req})});
  
  await server.start();
  
  server.applyMiddleware({app});
  
  app.listen({cors, port: process.env.TEST_SERVER === 'true' ? 80 : 4000}, () => console.log(`Server listening on http://localhost:${process.env.TEST_SERVER === 'true' ? "80" : "4000"}${server.graphqlPath}`)).on('error', (err) => {
    // console.log(err);
  } );
}

export default startServer;