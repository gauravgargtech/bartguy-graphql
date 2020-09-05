const { graphqlHTTP } = require("express-graphql");
const graphSchema = require("../graphql/schema/common");
const resolver = require("../graphql/resolvers/common");

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
