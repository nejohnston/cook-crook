import { makeExecutableSchema } from "graphql-tools";

const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const { graphqlExpress, graphiqlExpress } = require("apollo-server-express");
const schema = require("./api/schema");
const createLoaders = require('./api/loaders');
const config = require("./config")
const app = express();

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

config(app);
initDB(app);

const GQL_PORT = process.env.PORT; // Where does this come from?
// First step to hooking up postgresql
const POSTGRESQL_PORT = process.env.POSTGRESQL_PORT

// Cross-Origin Resource Sharing, this applies extra middleware to our
// express server
app.use("*", cors());

// Where we will send all of our GraphQL requests
app.use("/graphql", bodyParser.json(), graphqlExpress({ schema }));

// A route for accessing the GraphiQL tool
app.use(
  "/graphiql",
  graphiqlExpress({
    endpointURL: "/graphql",
    schema,
    context: { loaders: createLoaders() }
  })
);
app.listen(GQL_PORT, () =>
  console.log(`GraphQL is now running on http://localhost:${app.get({GQL_PORT})}/graphql`)
);
