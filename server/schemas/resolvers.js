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
  },
  Mutation: {
    addUser: async(parent, args, context) => {
      const user = await User.create({UID: args.uid, regimen: "new"})
      return user;
    },
    updateUser: async(parent, args, context) => {
      const user = await User.update({args}, {
        where: {
          UID: args.uid
        }
      })
      return user;
    },
  }
};

module.exports = resolvers;
