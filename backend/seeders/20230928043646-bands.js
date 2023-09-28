"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Bands",
      [
        {
          color: "pink",
          significantNumber: null,
          multiplier: 0.001,
          tolerance: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          color: "silver",
          significantNumber: null,
          multiplier: 0.01,
          tolerance: 0.1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          color: "gold",
          significantNumber: null,
          multiplier: 0.1,
          tolerance: 0.05,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          color: "black",
          significantNumber: 0,
          multiplier: 1,
          tolerance: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          color: "brown",
          significantNumber: 1,
          multiplier: 10,
          tolerance: 0.01,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          color: "red",
          significantNumber: 2,
          multiplier: 100,
          tolerance: 0.02,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          color: "orange",
          significantNumber: 3,
          multiplier: 1000,
          tolerance: 0.0005,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          color: "yellow",
          significantNumber: 4,
          multiplier: 10000,
          tolerance: 0.0002,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          color: "green",
          significantNumber: 5,
          multiplier: 100000,
          tolerance: 0.005,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          color: "blue",
          significantNumber: 6,
          multiplier: 1000000,
          tolerance: 0.0025,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          color: "violet",
          significantNumber: 7,
          multiplier: 10000000,
          tolerance: 0.0001,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          color: "gray",
          significantNumber: 8,
          multiplier: 100000000,
          tolerance: 0.00001,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          color: "white",
          significantNumber: 9,
          multiplier: 1000000000,
          tolerance: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Band", null, {});
  },
};
