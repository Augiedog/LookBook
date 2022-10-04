'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
    //  Add altering commands here.    
    await queryInterface.createTable('picture', {
      picture_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      file_name: {type: Sequelize.STRING},
      pic_url: {type: Sequelize.STRING},
      description: {type: Sequelize.STRING},
      author_id: {type: Sequelize.INTEGER},
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  async down (queryInterface, Sequelize) {
  
    // Add reverting commands here.
    await queryInterface.dropTable('picture');
  }
};
