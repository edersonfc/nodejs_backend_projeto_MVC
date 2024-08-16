module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Turmas', [
			  {
				  "data_inicio": "2021-05-10",
				  "nivel_id": 3,
				  "docente_id": 2,
				  "createdAt": new Date(),
				  "updatedAt": new Date()
				},
				{
				  "data_inicio": "2021-06-15",
				  "nivel_id": 2,
				  "docente_id": 2,
				  "createdAt": new Date(),
				  "updatedAt": new Date()
				},
				{
				  "data_inicio": "2021-08-20",
				  "nivel_id": 1,
				  "docente_id": 3,
				  "createdAt": new Date(),
				  "updatedAt": new Date()
				},
				{
				  "data_inicio": "2021-09-25",
				  "nivel_id": 2,
				  "docente_id": 4,
				  "createdAt": new Date(),
				  "updatedAt": new Date()
				}
		  			  
		], {})
  },

  down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Turmas', null, {})
  }
}
