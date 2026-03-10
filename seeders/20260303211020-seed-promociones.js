'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('promociones', [
      {
        id: 1,
        estado: 1,
        nombre: 'Descuento Cervezas',
        imagen: 'promo_cerveza.jpg',
        porcentaje: 10,
        dias_semana: '0000110'
      },
      {
        id: 2,
        estado: 1,
        nombre: 'Oferta Lácteos',
        imagen: 'promo_lacteos.jpg',
        porcentaje: 15,
        dias_semana: '0100000'
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('promociones', null, {});
  }
};