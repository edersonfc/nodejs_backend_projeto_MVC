'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Pessoas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING
      },
      ativo: {
        type: Sequelize.BOOLEAN
      },
      email: {
        type: Sequelize.STRING
      },
      role: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
      // ,pessoa_id: {
      //   allowNull: false,
      //   type: Sequelize.INTEGER,
      //   references: { model: 'AutenticacaoLogin', key: 'id'}
      // },

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Pessoas');
  }
};