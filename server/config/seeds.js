const sequelize = require('./connection');
const User = require('../models/User');

const userSeedData = [
    {
      "username": "Sal",
      "email": "sal@hotmail.com",
      "password": "password1234"
    },
    {
      "username": "Lernantino",
      "email": "lernantino@gmail.com",
      "password": "password1234"
    },
    {
      "username": "Amiko",
      "email": "amiko2k20@aol.com",
      "password": "password1234"
    }
  ]



const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userSeedData);

  process.exit(0);
};

seedDatabase();
