const express = require('express')
const { ApolloServer, gql} = require('apollo-server-express')

//criar schema
const schema = gql(`
    type Query {
        olaMundo: String!
    }
`)

const resolvers = {
    Query: {
        olaMundo: () => 'Olá mundo!'
    }
}

const server = new ApolloServer({ typeDefs: schema, resolvers})

const app = express()

server.applyMiddleware({ app })

app.listen({port: 4000}, () => console.log(`Server running on localhost:4000${server.graphqlPath}`))