"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("basket_devices", "count", {
      type: Sequelize.INTEGER,
      defaultValue: 1, // Установите значение по умолчанию для поля count
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("basket_devices", "count");
  },
};
