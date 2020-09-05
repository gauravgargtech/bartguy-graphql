const { graphqlHTTP } = require("express-graphql");
const graphSchema = require("../graphql/schema");
const resolver = require("../graphql/resolvers");

module.exports = (app) => {
  app.use(
    "/graphql",
    graphqlHTTP({
      schema: graphSchema,
      rootValue: resolver,
      graphiql: true,
    })
  );
};
