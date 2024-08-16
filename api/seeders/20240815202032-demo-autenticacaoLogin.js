module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('AutenticacaoLogins', [
			{
				"login": "Edersonfc7",
                "senha": "12345",
				"ativo": true,
				"createdAt": new Date(),
				"updatedAt": new Date()
			},

        ], {})
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('AutenticacaoLogins', null, {})
	}
}