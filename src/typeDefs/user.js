import { gql } from 'apollo-server-express';

export default gql`
    extend type Query {
        users: [User]!
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
        name: String
        username: String
        password: String
        roleId: String
    }

    input InputUserType {
        name: String!
        username: String!
        password: String!
        roleId: String!
    }

    type User {
        id: ID!
        name: String!
        username: String!
        role: Role!                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
    }
`;