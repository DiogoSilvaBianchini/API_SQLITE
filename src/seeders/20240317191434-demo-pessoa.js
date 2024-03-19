'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('pessoas', [
      {
        name: 'Solange Estudante',
        email: 'solange@email.com',
        cpf: '63058133022',
        ativo: true,
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Igor Estudante',
        email: 'igor@email.com',
        cpf: '99018205028',
        ativo: true,
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Aline Estudante',
        email: 'aline@email.com',
        cpf: '92797497066',
        ativo: true,
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Fernando Estudante',
        email: 'fernando@email.com',
        cpf: '17195730000',
        ativo: true,
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Ricardo Docente',
        email: 'ricardo@email.com',
        cpf: '06946507061',
        ativo: true,
        role: 'docente',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Dine Docente',
        email: 'dine@email.com',
        cpf: '80941142078',
        ativo: true,
        role: 'docente',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('pessoas', null, {})
  }
}
