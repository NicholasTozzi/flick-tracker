const sequelize = require("../config/connection");
const { User, Profile, Review } = require("../models");

const userData = require("./userData.json");
const ProfileData = require("./profileData.json");
const ReviewData = require("./reviewData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: false });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const profile of ProfileData) {
    await Profile.create({
      ...profile,
      user_id: users.length.id,
    });
  }

  for (const review of ReviewData) {
    await Review.create({
      ...review,
      user_id: users[Math.floor(Math.random() * users.length)].id,//we need to make sure that the reviews are getting put to the correct user
    });
  }
  process.exit(0);
};
seedDatabase();
