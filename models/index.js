const User = require("./user");
const Profile = require("./profile");
const Review = require("./review"); //define relationship for views

//parent relationship
User.hasOne(Profile, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Profile.hasMany(Review, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

//child associations
Profile.belongsTo(User, {
  foreignKey: "user_id",
});
Review.belongsTo(User, {
  foreignKey: "user_id",
});
Review.belongsTo(Profile, {
  foreignKey: "profile_id",
});

//exports
module.exports = {
  User,
  Profile,
  Review,
};
