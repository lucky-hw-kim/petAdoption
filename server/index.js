const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors')
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "./.env") });
const port = process.env.PORT || 5000;
const schema = require ('./schema/schema')
const app = express();


app.use(cors());

app.use('/graphiql', graphqlHTTP ({
  schema,
  graphiql: process.env.NODE_ENV === 'development'
}))

app.listen(port, console.log(`server running on port ${port}`))