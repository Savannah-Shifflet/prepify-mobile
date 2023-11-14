const sequelize = require('./connection');
const User = require('../models/User');

const userSeedData = [
    {
      "UID": "stringofletters",
      "regimen": "new"
    },
    {
      "UID": "stkerkwlkwkle",
      "regimen": "daily"
    },
    {
      "UID": "asdklfjwkeljf",
      "regimen": "onDemand"
    }
  ]



const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userSeedData);

  process.exit(0);
};

seedDatabase();
