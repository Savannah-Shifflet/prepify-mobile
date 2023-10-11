const { User } = require('../models/User');

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      const user = await User.findByPk(args.id)
      return user;
    },
  }
};

module.exports = resolvers;
