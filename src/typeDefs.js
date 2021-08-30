
const { gql } = require('apollo-server')

const typeDefs = gql`

  type Post {
    id: ID!
    body: String!
    title: String!
    createdAt: String!
    username: String!
    enrolled: Boolean
  }

  type User {
    id: ID!
    email: String!
    fullName: String!
    password: String!
  }

  type RegisterInput {
    fullName: String!
    email: String!
    password: String!
    confirmPassword: String!
  }

  type loginInput{
      email: String!
      password: String!
  }

  type Query {
    getPosts: [Post]
  }

  type Mutation {
    registerUser(registerInput: RegisterInput): User!
    loginUser(loginInput: LoginInput): User!
  }
`
module.exports = typeDefs