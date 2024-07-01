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
          throw new Error('Email already exists.');
        }
        throw error;
      }
    },
    deleteUser: async (_, { id }) => {
      const result = await User.findByIdAndDelete(id);
      if (!result) {
        throw new Error('User with the given ID does not exist.');
      }
      return result;
    },
  },
};

module.exports = resolvers;