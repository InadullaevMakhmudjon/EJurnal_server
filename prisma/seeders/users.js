const { hashSync } = require('bcryptjs');

const users = [
  {
    name: 'Admin',
    username: 'admin',
    password: hashSync('admin', 7),
    roleId: '1',
  },
  {
    name: 'Author',
    username: 'author',
    password: hashSync('author', 7),
    roleId: '2',
  },
  {
    name: 'Editor',
    username: 'editor',
    password: hashSync('editor', 7),
    roleId: '3',
  },
];

module.exports = function (seeder) {
  return users.map((user) => seeder({
    name: user.name,
    username: user.username,
    password: user.password,
    role: {
      connect: {
        id: user.roleId,
      },
    },
  }));
};
