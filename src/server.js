const { GraphQLServer } = require("graphql-yoga");
const path = require("path");
const resolvers = require("./resolvers");
const mongoose = require("mongoose");

mongoose.connect("mongodb://root:123456@localhost:27017/digital-content-api?authSource=admin&authMechanism=SCRAM-SHA-1", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});



const server = new GraphQLServer({
  typeDefs: path.resolve(__dirname, "schema.graphql"),
  resolvers
});


server.start();
