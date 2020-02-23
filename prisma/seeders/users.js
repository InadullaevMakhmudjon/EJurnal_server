const { hashSync } = require('bcryptjs');

const users = [
  {
    firstName: 'Admin',
    secondName: 'Admin',
    userName: 'admin',
    password: hashSync('admin', 7),
    roleId: '001',
  },
  {
    firstName: 'Author',
    secondName: 'Author',
    userName: 'author',
    password: hashSync('author', 7),
    roleId: '002',
  },
  {
    firstName: 'Editor',
    secondName: 'Editor',
    userName: 'editor',
    password: hashSync('editor', 7),
    roleId: '003',
  },
];

module.exports = users.map((user) => ({
  firstName: user.firstName,
  secondName: user.secondName,
  userName: user.userName,
  password: user.password,
  role: {
    connect: {
      id: user.roleId,
    },
  },
}));
