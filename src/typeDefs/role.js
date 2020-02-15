import { gql } from 'apollo-server-express';

export default gql`
    extend type Query {
        roles: [Role]!
        role(where: WhereRoleType!): Role!
    }
    extend type Mutation {
        createRole(data: InputRoleType!): Role!
        updateRole(data: InputRoleType!, where: WhereRoleType!): Role!
        deleteRole(where: WhereRoleType!): Role!
    }

    input InputRoleType {
        name: String!
    }
    input WhereRoleType {
        id: ID!
    }

    type Role {
        id: ID!
        name: String!
        users: [User]!
    }
`;