const sequelize = require("../config/connection");
const { User, Profile } = require("../models");

const userData = require("./userData.json");
const ProfileData = require("./profileData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const profile of ProfileData) {
    await Profile.create({
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }
  process.exit(0);
};
seedDatabase();
