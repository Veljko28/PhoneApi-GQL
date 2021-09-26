import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { getSchema } from './getSchema';


const startServer = async () => {
  const app = express();
  
  const cors = {
          credentials: true,
          origin: "http://localhost:4000"
  }
  
  
  const server = new ApolloServer({schema: getSchema()});
  
  await server.start();
  
  server.applyMiddleware({app});
  
  app.listen({cors, port: 4000}, () => console.log(`Server listening on http://localhost:4000${server.graphqlPath}`));
}

export default startServer;