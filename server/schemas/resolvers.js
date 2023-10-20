const User = require('../models/User');

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      const user = await User.findByPk(parseInt(args.id))
      return user;
    },
    users: async(_, args, context)=>{
      const users = await User.findAll();
      return users;
    }
  }
};

module.exports = resolvers;
