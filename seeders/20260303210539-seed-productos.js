'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('productos', [
      {
        id: 1,
        estado: 1,
        kit: 0,
        barcode: '7701001001001',
        nombre: 'Leche Entera 1L',
        presentacion: 'Botella',
        descripcion: 'Leche entera pasteurizada',
        foto: 'leche.jpg',
        peso: 1.0
      },
      {
        id: 2,
        estado: 1,
        kit: 0,
        barcode: '7702002002002',
        nombre: 'Cerveza Lager 330ml',
        presentacion: 'Lata',
        descripcion: 'Cerveza tipo lager',
        foto: 'cerveza.jpg',
        peso: 0.33
      },
      {
        id: 3,
        estado: 1,
        kit: 0,
        barcode: '7703003003003',
        nombre: 'Pan Integral',
        presentacion: 'Paquete',
        descripcion: 'Pan integral fresco',
        foto: 'pan.jpg',
        peso: 0.5
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('productos', null, {});
  }
};