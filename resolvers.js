const { users, generateId } = require('./db');

const resolvers = {
  Query: {
    users: () => Array.from(users.values()),
  },
  Mutation: {
    addUser: (_, { name, email }) => {
      // Osnovna validacija
      if (!name || name.trim() === '') {
        throw new Error('Ime je obavezno');
      }
      if (!email || !email.includes('@')) {
        throw new Error('Neispravan format email adrese');
      }

      const id = generateId();
      const newUser = { id, name: name.trim(), email: email.trim() };
      users.set(id, newUser);
      return newUser;
    },
  },
};

module.exports = resolvers;