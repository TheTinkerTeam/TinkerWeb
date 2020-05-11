require("dotenv").config();

const express = require("express");
const path = require("path");
const { ApolloServer, makeExecutableSchema } = require("apollo-server-express");
const { applyMiddleware } = require("graphql-middleware");

const app = require("./app");
const appConfig = require("./config/app");

const { connect } = require("./config/db");
connect();

const typeDefs = require("./schema");
const resolvers = require("./resolvers/Root");
let schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

const permissions = require("./permissions");
schema = applyMiddleware(schema, permissions);

const { prisma } = require("../prisma/generated/prisma-client");
const { checkAuth } = require("./utils/auth");
const server = new ApolloServer({
  schema,
  context: ({ req, res }) => ({
    prisma,
    user: checkAuth(req, res)
  })
});

server.applyMiddleware({ app, path: "/api/v2" });

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "../../frontend/build")));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../frontend/build/index.html"));
});

const port = process.env.PORT || appConfig.port;

app.listen({ port }, () =>
  console.log(
    `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
  )
);
