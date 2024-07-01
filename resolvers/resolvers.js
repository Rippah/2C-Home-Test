const { User } = require('../database/db');

const resolvers = {
  Query: {
    users: async (_, { filter }) => {
      if (filter) {
        return User.find({
          $or: [
            { name: { $regex: filter, $options: 'i' } },
            { email: { $regex: filter, $options: 'i' } }
          ]
        });
      }
      return User.find();
    },
  },
  Mutation: {
    addUser: async (_, { name, email }) => {
      try {
        const newUser = new User({ name, email });
        await newUser.save();
        return newUser;
      } catch (error) {
        if (error.code === 11000) {
          throw new Error('Email adresa već postoji');
        }
        throw error;
      }
    },
    deleteUser: async (_, { id }) => {
      const result = await User.findByIdAndDelete(id);
      if (!result) {
        throw new Error('Korisnik sa datim ID-om ne postoji');
      }
      return true;
    },
  },
};

module.exports = resolvers;