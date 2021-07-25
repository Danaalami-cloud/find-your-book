const { gql } = require('appollo-server-express');

const typeDefs = gql`
type Book {
    bookId: ID!
    authors: String!
    description: String
    title: String
    image: String
    link: String
}

type User {
    _id: ID
    username: String
    email: String
    thoughts: [Thought]!
    bookCount: Int
}
type Auth {
    token: ID!
    user: User
}


type Query {
    users: [User]
    user(username: String!): User
    thoughts(username: String): [Thought]
    thought(thoughtId: ID!): Thought
    me: User
}
input saveBook {
    description: String
    title: String
    bookId: Int 
    image: String
    link: String
}

type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addThought(thoughtText: String!): Thought
    removeBook(bookId: ID!): User
    saveBook(description: String!, title: String!, bookId: String!, image: String!, link: String!)
}
`;

module.exports = typeDefs;