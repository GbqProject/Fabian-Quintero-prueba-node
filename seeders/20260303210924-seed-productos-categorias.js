"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("productos_categorias", [
      { id: 1, id_categoria: 4, id_producto: 1 },
      { id: 2, id_categoria: 3, id_producto: 2 },
      { id: 3, id_categoria: 5, id_producto: 3 },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("productos_categorias", null, {});
  },
};
