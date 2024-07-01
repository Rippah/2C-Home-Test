const { users, generateId } = require('./db');

// Vršimo validaciju mejla koristeći regex funkciju
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

const resolvers = {
  Query: {
        users: (_, { filter }) => {
          let filteredUsers = Array.from(users.values());
          if (filter) {
            const lowercaseFilter = filter.toLowerCase();
            filteredUsers = filteredUsers.filter(user => 
              user.name.toLowerCase().includes(lowercaseFilter) ||
              user.email.toLowerCase().includes(lowercaseFilter)
            );
          }
          return filteredUsers;
        },
  },
  Mutation: {
    addUser: (_, { name, email }) => {
      if (!name || name.trim() === '') {
        throw new Error('Ime je obavezno');
      }
      if (!email || !validateEmail(email)) {
        throw new Error('Neispravan format email adrese');
      }

      const id = generateId();
      const newUser = { id, name: name.trim(), email: email.trim() };
      users.set(id, newUser);
      return newUser;
    },
    deleteUser: (_, { id }) => {
        if (!users.has(id)) {
          throw new Error('Korisnik sa datim ID-om ne postoji');
        }
        return users.delete(id);
    },
  },
};

module.exports = resolvers;