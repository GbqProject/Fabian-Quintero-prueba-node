'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('tiendas', [
      {
        id: 1,
        estado: 1,
        nombre: 'Supermercado La Esquina',
        descripcion: 'Tienda de barrio con productos frescos',
        telefono: '3001234567',
        direccion: 'Calle 10 #15-20',
        direccion_anexo: 'Local 1',
        direccion_barrio: 'Centro',
        calificacion: 4.5,
        calificacion_cantidad: 120,
        impuestos: 1,
        dias_trabajados: '1111111'
      },
      {
        id: 2,
        estado: 1,
        nombre: 'MiniMarket El Ahorro',
        descripcion: 'Precios bajos todos los días',
        telefono: '3019876543',
        direccion: 'Carrera 8 #22-11',
        direccion_barrio: 'San José',
        calificacion: 4.2,
        calificacion_cantidad: 80,
        impuestos: 1,
        dias_trabajados: '1111110'
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tiendas', null, {});
  }
};