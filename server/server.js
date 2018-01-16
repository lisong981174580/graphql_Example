const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');
const cors = require('cors');
const {typeDefs,resolvers} = require('./models/index');

// Put together a schema
const schema = makeExecutableSchema({
        typeDefs,
        resolvers
});

// Initialize the app
const app = express();
app.use('*',cors({origin:'*'}));
// The GraphQL endpoint
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

// GraphiQL, a visual editor for queries
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

// Start the server
app.listen(4000, () => {
    console.log('Go to http://localhost:4000/graphiql to run queries!');
});





