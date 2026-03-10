"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("pedidos_productos", [
      {
        cantidad: 2.000,
        valor_unitario: 5000.000,
        valor_unitario_promocion: null,
        total_teorico: 10000.000,
        total_final: 10000.000,
        id_promocion: null,
        id_producto: 1,
        id_pedido: 1
      },
      {
        cantidad: 1.000,
        valor_unitario: 3500.000,
        valor_unitario_promocion: null,
        total_teorico: 3500.000,
        total_final: 3500.000,
        id_promocion: null,
        id_producto: 2,
        id_pedido: 1
      },
      {
        cantidad: 3.000,
        valor_unitario: 2000.000,
        valor_unitario_promocion: null,
        total_teorico: 6000.000,
        total_final: 6000.000,
        id_promocion: null,
        id_producto: 3,
        id_pedido: 2
      },
      {
        cantidad: 5.000,
        valor_unitario: 1200.000,
        valor_unitario_promocion: null,
        total_teorico: 6000.000,
        total_final: 6000.000,
        id_promocion: null,
        id_producto: 2,
        id_pedido: 3
      },
      {
        cantidad: 4.000,
        valor_unitario: 1800.000,
        valor_unitario_promocion: null,
        total_teorico: 7200.000,
        total_final: 7200.000,
        id_promocion: null,
        id_producto: 1,
        id_pedido: 4
      },
      {
        cantidad: 2.000,
        valor_unitario: 4000.000,
        valor_unitario_promocion: null,
        total_teorico: 8000.000,
        total_final: 8000.000,
        id_promocion: null,
        id_producto: 2,
        id_pedido: 2
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("pedidos_productos", null, {});
  }
};