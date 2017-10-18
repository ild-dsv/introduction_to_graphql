import bodyParser from 'body-parser';
import cors from 'cors';
import http from 'http';
import express from 'express';
import { graphiqlExpress, graphqlExpress } from 'graphql-server-express';

import schema from './schema';

const app = express();
const server = http.createServer(app);
const PORT = 4000;

// Enable cors
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql'
}));

app.use('/graphql', graphqlExpress({ schema }));

server.listen(PORT, (err) => {
  if (err) {
    console.log("Oop! Something's wrong!");
  } else {
    console.log(`Server running on ${PORT}`);
  }
})
