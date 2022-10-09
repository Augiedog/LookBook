'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {  
  //  Add altering commands here.
     return queryInterface.addColumn('users', 'password_digest', {
      type: Sequelize.DataTypes.STRING
    })
  },

  async down (queryInterface, Sequelize) {
  // Add reverting commands here.
  return queryInterface.removeColumn('users', 'password_digest')
  }
};
