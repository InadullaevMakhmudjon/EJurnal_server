import { gql } from 'apollo-server-express';

export default gql`
    extend type Query {
        details: User!
    }
    extend type Mutation {
        signIn(data: InputAuthUserSignInType): LoginResponse
        signUp(data: InputAuthUserSignUpType): User!
    }
    input InputAuthUserSignUpType{
        name: String!
        userName: String!
        password: String!
        roleId: ID!
    }
    input InputAuthUserSignInType{
        userName: String!
        password: String!
    }
    type LoginResponse {
        token: String!,
        user: User!
    }
`;
