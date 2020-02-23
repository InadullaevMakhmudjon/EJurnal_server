export const FRAGMENT_USER = `
fragment UserWithRole on User {
    id
    firstName
    secondName
    userName
    blocked
    password
    createdAt
    lastEntered
    role {
        id
        name
    }
}
`;

export const FRAGMENT_ROLE = `
fragment RoleWithUser on Role {
  id
  name
  users {
    id
    name
    username
  }
}
`;
