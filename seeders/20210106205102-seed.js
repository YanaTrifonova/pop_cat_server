'use strict';

module.exports = {
    up: async (queryInterface) => {
        await queryInterface.bulkInsert(
            'cats',
            [
                {
                    name: 'catDefault',
                    url: "/images/default/cat_default_close_mouth.jpg",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: 'catDefault',
                    url: "/images/default/cat_default_open_mouth.jpg",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },

                {
                    name: "catPixel",
                    url: "/images/pixel/cat_pixel_close_mouth.jpg",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "catPixel",
                    url: "/images/pixel/cat_pixel_open_mouth.jpg",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },

                {
                    name: "catPirate",
                    url: "/images/pirate/cat_pirate_close_mouth.png",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "catPirate",
                    url: "/images/pirate/cat_pirate_open_mouth.png",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },

                {
                    name: "catWinter",
                    url: "/images/winter/cat_winter_close_mouth.png",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "catWinter",
                    url: "/images/winter/cat_winter_open_mouth.png",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },

                {
                    name: "catBW",
                    url: "/images/b&w/cat_bw_close_mouth.png",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "catBW",
                    url: "/images/b&w/cat_bw_open_mouth.png",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                }
            ], {}
        );

    },

    down: async (queryInterface) => {
          await queryInterface.bulkDelete('cats', null, {});
    }
};
