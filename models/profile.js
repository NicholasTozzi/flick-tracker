const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
//Create our Profile model
class Profile extends Model {}
//create columns for Profile model
Profile.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    watched: {
      type: DataTypes.STRING,
      allowNull: false
    },
    watchList: {
      type: DataTypes.STRING,
      allowNull: false
    },
    top5: {
      type: DataTypes.STRING,
      allowNull: false
    },
    followingActors: {
      type: DataTypes.STRING,
      allowNull: false
    },
    followingUsers: {
      type: DataTypes.STRING,
      allowNull: false
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
        unique: false
      },
    },
    review_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "review",
        key: "id",
        unique: false
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
