const { gql } = require('apollo-server');

const typeDefs = gql`
    type Student{
        id: ID!,
        email: String!
        fullName: String!
        dep: String!
        enrolled: Boolean!
    }
    type Query{
        enrollment: [Student!],
        students: [Student!,
        student(id: ID!)]: Student
    }

    type Mutation{
        registerStudent(email: String!, fullName: String!, dept: String ) : String!
        enroll(id: ID!): String
    }

`
module.exports = typeDefs