"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("categorias", [
      { id: 1, nombre: "Bebidas", adulto: 0 },
      { id: 2, nombre: "Snacks", adulto: 0 },
      { id: 3, nombre: "Licores", adulto: 1 },
      { id: 4, nombre: "Lácteos", adulto: 0 },
      { id: 5, nombre: "Panadería", adulto: 0 },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categorias', null, {});
  },
};
