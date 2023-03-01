//TODO: finish this file

const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Profile extends Model {}

Profile.init(
  {
    watched: {
      type: DataTypes.STRING,
    },
    watchlist: {
      type: DataTypes.STRING,
    },
    top5: {
      type: DataTypes.JSON,
    },
    followingActors: {
      type: DataTypes.STRING,
    },
    followingUsers: {
      type: DataTypes.STRING,
    },
    genre: {
      type: DataTypes.STRING,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "profile",
  }
);

module.exports = Profile;
