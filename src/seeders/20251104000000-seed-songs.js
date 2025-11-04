'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('songs', [
      {
        title: 'Moscow Mule',
        artist: 'Bad Bunny',
        duration: 246, // 4:06 minutos
        coverUrl: 'http://localhost:7070/uploads/images/moscow-mule-cover.jpg',
        audioUrl: 'http://localhost:7070/uploads/audio/moscow-mule.mp3',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'HOLLYWOOD',
        artist: 'Peso Pluma y Estevan Plazola',
        duration: 265, // 4:25 minutos
        coverUrl: 'https://res.cloudinary.com/dm3j4u2pn/image/upload/v1762285187/hollywood-cover_eebmjl.jpg',
        audioUrl: 'https://res.cloudinary.com/dm3j4u2pn/video/upload/v1762285195/hollywood.mp3',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Agrega más canciones aquí
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('songs', null, {});
  }
};
