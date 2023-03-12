const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Profile extends Model {}

Profile.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    watched: {
      type: DataTypes.JSON,
    },
    watchlist: {
      type: DataTypes.JSON,
    },
    top5: {
      type: DataTypes.JSON,
    },
    followingActors: {
      type: DataTypes.JSON,
    },
    followingUsers: {
      type: DataTypes.JSON,
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
