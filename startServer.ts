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

  
  const server = new ApolloServer({schema: getSchema()});
  
  await server.start();
  
  server.applyMiddleware({app});
  
  app.listen({cors, port: 5000}, () => console.log(`Server listening on http://localhost:4000${server.graphqlPath}`));
}

export default startServer;