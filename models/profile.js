//TODO: finish this file

const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Profile extends Model {}

Profile.init(
  {
    watched: {
      type: DataTypes.TEXT,
      //create SQL statement where you insert the movie to the user_id
    },
    watchlist: {
      type: DataTypes.TEXT,
      // defaultValue: [],
    },
    top5: {
      type: DataTypes.TEXT,
      // defaultValue: [],
    },
    followingActors: {
      type: DataTypes.TEXT,

      // defaultValue: [],
    },
    followingUsers: {
      type: DataTypes.ARRAY(DataTypes.TEXT),

      // defaultValue: [],
    },
    genre: {
      type: DataTypes.ARRAY(DataTypes.TEXT),

      // defaultValue: [],
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
