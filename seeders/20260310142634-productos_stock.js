"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "productos_stocks",
      [
        {
          id: 1,
          cantidad: 10,
          id_tienda: 1,
          id_producto: 1,
          fecha_ingreso: new Date(),
        },
        {
          id: 2,
          cantidad: 20,
          id_tienda: 2,
          id_producto: 1,
          fecha_ingreso: new Date(),
        },
        {
          id: 3,
          cantidad: 100,
          id_tienda: 1,
          id_producto: 2,
          fecha_ingreso: new Date(),
        },
        {
          id: 4,
          cantidad: 50,
          id_tienda: 2,
          id_producto: 3,
          fecha_ingreso: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('productos_stocks', null, {});
  },
};
