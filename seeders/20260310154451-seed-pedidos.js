"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("pedidos", [
      {
        id: 1,
        instrucciones: "Entregar en la puerta",
        entrega_fecha: "2026-03-11",
        valor_productos: 15000.000,
        valor_envio: 3000.000,
        valor_descuento: 0.000,
        valor_cupon: 0.000,
        impuestos: 19,
        valor_impuestos: 2850.000,
        valor_final: 20850.000,
        calificacion: null,
        id_tienda: 1,
        direccion: "Calle 10 #12-30",
        valor_comision: 1500.000,
        id_user: 1
      },
      {
        id: 2,
        instrucciones: "Llamar antes de llegar",
        entrega_fecha: "2026-03-11",
        valor_productos: 9000.000,
        valor_envio: 2500.000,
        valor_descuento: 500.000,
        valor_cupon: 0.000,
        impuestos: 19,
        valor_impuestos: 1615.000,
        valor_final: 12615.000,
        calificacion: 4.50,
        id_tienda: 2,
        direccion: "Carrera 5 #8-20",
        valor_comision: 900.000,
        id_user: 2
      },
      {
        id: 3,
        instrucciones: null,
        entrega_fecha: "2026-03-12",
        valor_productos: 22000.000,
        valor_envio: 3500.000,
        valor_descuento: 1000.000,
        valor_cupon: 500.000,
        impuestos: 19,
        valor_impuestos: 3990.000,
        valor_final: 27990.000,
        calificacion: null,
        id_tienda: 1,
        direccion: "Av. Principal #45-12",
        valor_comision: 2200.000,
        id_user: 3
      },
      {
        id: 4,
        instrucciones: "Dejar en portería",
        entrega_fecha: "2026-03-12",
        valor_productos: 12000.000,
        valor_envio: 2000.000,
        valor_descuento: 0.000,
        valor_cupon: 0.000,
        impuestos: 19,
        valor_impuestos: 2280.000,
        valor_final: 16280.000,
        calificacion: 5.00,
        id_tienda: 2,
        direccion: "Calle 8 #22-14",
        valor_comision: 1200.000,
        id_user: 1
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("pedidos", { id: [1, 2, 3, 4] }, {});
  }
};