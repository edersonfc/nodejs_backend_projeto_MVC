module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Pessoas', [
			{
				"nome": "Lucas Ferreira",
				"ativo": true,
				"email": "lucas@lucas.com",
				"role": "estudante",
				"createdAt": new Date(),
				"updatedAt": new Date()
			},
			{
				"nome": "Bianca Oliveira",
				"ativo": true,
				"email": "bianca@bianca.com",
				"role": "estudante",
				"createdAt": new Date(),
				"updatedAt": new Date()
			},
			{
				"nome": "Renato Silva",
				"ativo": true,
				"email": "renato@renato.com",
				"role": "estudante",
				"createdAt": new Date(),
				"updatedAt": new Date()
			},
			{
				"nome": "Mariana Costa",
				"ativo": false,
				"email": "mariana@mariana.com",
				"role": "estudante",
				"createdAt": new Date(),
				"updatedAt": new Date()
			},
			{
				"nome": "João Pereira",
				"ativo": true,
				"email": "joao@joao.com",
				"role": "docente",
				"createdAt": new Date(),
				"updatedAt": new Date()
			},
			{
				"nome": "Larissa Mendes",
				"ativo": true,
				"email": "larissa@larissa.com",
				"role": "docente",
				"createdAt": new Date(),
				"updatedAt": new Date()
			}

		], {})
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Pessoas', null, {})
	}
}
