'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  class Picture extends Model {

    static associate({ User, Comment}) {
        Picture.belongsTo(User, { as: 'author', foreignKey: 'author_id' })
        Picture.hasMany(Comment, { foreignKey: 'pictureId', as: 'comments' })
      }
  };

  Picture.init({
    pictureId: {
      type: DataTypes.SMALLINT,
      primaryKey: true,
      autoIncrement: true
    },
    fileName: DataTypes.STRING,
    picURL: DataTypes.STRING,
    description: DataTypes.STRING,
    authorId: DataTypes.STRING
  }, {
    sequelize,
    underscored: true,
    modelName: 'Picture',
  });
  return Picture;
};