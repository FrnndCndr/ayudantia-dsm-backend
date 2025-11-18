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
      {
        title: 'Por Esos Ojos',
        artist: 'Fuerza Regida',
        duration: 188, // 3:08 minutos
        coverUrl: 'https://res.cloudinary.com/dm3j4u2pn/image/upload/v1763497555/por_esos_ojos_cover_wdpvtd.jpg',
        audioUrl: 'https://res.cloudinary.com/dm3j4u2pn/video/upload/v1763497699/poresosojos_ik5dhe.mp3',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'MY LOVE',
        artist: 'FloyyMenor y Lewis Somes',
        duration: 172, // 2:52 minutos
        coverUrl: 'https://res.cloudinary.com/dm3j4u2pn/image/upload/v1763497555/mylove_cover_q13ukl.jpg',
        audioUrl: 'https://res.cloudinary.com/dm3j4u2pn/video/upload/v1763497770/mylove_k3nzfj.mp3',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'TQM',
        artist: 'Fuerza Regida',
        duration: 157, // 2:37 minutos
        coverUrl: 'https://res.cloudinary.com/dm3j4u2pn/image/upload/v1763497555/tqm_cover_zodsif.jpg',
        audioUrl: 'https://res.cloudinary.com/dm3j4u2pn/video/upload/v1763497860/tqm_askpdm.mp3',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('songs', null, {});
  }
};
