const userSeed = require('./users');
const roles = require('./roles');
const { prisma } = require('../generated/prisma-client');

function execute(array) {
  return Promise.all(array.reduce((a, b) => a.concat(b), []));
}

function seed(data, seeder) {
  return data.map((element) => seeder(element));
}

function main() {
  execute([
    seed(roles, prisma.createRole),
    userSeed(prisma.createUser),
  ])
    .then(() => console.log('Done'))
    .catch((error) => console.log(error));
}

main();
