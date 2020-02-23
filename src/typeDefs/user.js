import { gql } from 'apollo-server-express';

export default gql`
    extend type Query {
        users(roleId: String): [User]!
        user(where: WhereInputUserType!): User
    }
    extend type Mutation {
        createUser(data: InputUserType!): User!
        updateUser(data: InputUpdateUserType!, where: WhereInputUserType!): User
        deleteUser(where: WhereInputUserType!): User
    }

    input WhereInputUserType {
        id: ID!
    }

    input InputUpdateUserType {
        firstName: String
        secondName: String
        userName: String
        password: String
        blocked: Boolean
        role: String
    }

    input InputUserType {
        firstName: String!
        secondName: String!
        userName: String!
        password: String!
        role: String!
    }

    type User {
        id: ID!
        firstName: String!
        secondName: String!
        userName: String!
        password: String!
        blocked: Boolean
        createdAt: String!
        lastEntered: String
        role: Role!
    }
`;
