'use strict'

module.exports = `

    type Query {
        version: String!
    }
    type Mutation {
        createuser(name: String): String
    }


`;