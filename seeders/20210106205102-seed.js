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

        await queryInterface.bulkInsert(
            'instruments',
            [
                {
                    name: "defaultPianoAudios",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "piano2",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "piano3",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "piano4",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "bassDrum",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "sadViolin",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "dunDunDun",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "electricSaw",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "heartBit",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "cow",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "pig",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {}
        );

        await queryInterface.bulkInsert(
            'instrumentsNotes',
            [
                {
                    instrumentId: 1,
                    a: "/instruments/default-piano/a_note.mp3",
                    b: "/instruments/default-piano/b_note.mp3",
                    c: "/instruments/default-piano/c_note.mp3",
                    d: "/instruments/default-piano/d_note.mp3",
                    e: "/instruments/default-piano/e_note.mp3",
                    f: "/instruments/default-piano/f_note.mp3",
                    g: "/instruments/default-piano/g_note.mp3",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    instrumentId: 2,
                    a: "/instruments/piano-2/A2.mp3",
                    b: "/instruments/piano-2/B2.mp3",
                    c: "/instruments/piano-2/C3.mp3",
                    d: "/instruments/piano-2/D3.mp3",
                    e: "/instruments/piano-2/E2.mp3",
                    f: "/instruments/piano-2/F2.mp3",
                    g: "/instruments/piano-2/G2.mp3",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    instrumentId: 3,
                    a: "/instruments/piano-3/A3.mp3",
                    b: "/instruments/piano-3/B3.mp3",
                    c: "/instruments/piano-3/C4.mp3",
                    d: "/instruments/piano-3/D4.mp3",
                    e: "/instruments/piano-3/E3.mp3",
                    f: "/instruments/piano-3/F3.mp3",
                    g: "/instruments/piano-3/G3.mp3",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    instrumentId: 4,
                    a: "/instruments/piano-4/A4.mp3",
                    b: "/instruments/piano-4/B4.mp3",
                    c: "/instruments/piano-4/C5.mp3",
                    d: "/instruments/piano-4/D5.mp3",
                    e: "/instruments/piano-4/E5.mp3",
                    f: "/instruments/piano-4/F4.mp3",
                    g: "/instruments/piano-4/G4.mp3",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    instrumentId: 5,
                    a: "/instruments/bass-drum/Bass-Drum-Hit-Level-1a.mp3",
                    b: "/instruments/bass-drum/Bass-Drum-Hit-Level-2a.mp3",
                    c: "/instruments/bass-drum/Bass-Drum-Hit-Level-3a.mp3",
                    d: "/instruments/bass-drum/Bass-Drum-Hit-Level-4a.mp3",
                    e: "/instruments/bass-drum/Bass-Drum-Hit-Level-5a.mp3",
                    f: "/instruments/bass-drum/Bass-Drum-Hit-Level-6a.mp3",
                    g: "/instruments/bass-drum/Bass-Drum-Hit-Level-6c.mp3",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    instrumentId: 6,
                    a: "/instruments/sad-violin/Sad-Violin-A.mp3",
                    b: "/instruments/sad-violin/Sad-Violin-B.mp3",
                    c: "/instruments/sad-violin/Sad-Violin-C.mp3",
                    d: "/instruments/sad-violin/Sad-Violin-D.mp3",
                    e: "/instruments/sad-violin/Sad-Violin-Fast-E.mp3",
                    f: "/instruments/sad-violin/Sad-Violin-G.mp3",
                    g: "/instruments/sad-violin/Sad-Violin-H.mp3",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    instrumentId: 7,
                    a: "/instruments/dun-dun-dun/110Speed_DunDunDun.mp3",
                    b: "/instruments/dun-dun-dun/120Speed_DunDunDun.mp3",
                    c: "/instruments/dun-dun-dun/130Speed_DunDunDun.mp3",
                    d: "/instruments/dun-dun-dun/150Speed_DunDunDun.mp3",
                    e: "/instruments/dun-dun-dun/160Speed_DunDunDun.mp3",
                    f: "/instruments/dun-dun-dun/180Speed_DunDunDun.mp3",
                    g: "/instruments/dun-dun-dun/190Speed_DunDunDun.mp3",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    instrumentId: 8,
                    a: "/instruments/electric-saw/Electric-Saw-A1.mp3",
                    b: "/instruments/electric-saw/Electric-Saw-A2.mp3",
                    c: "/instruments/electric-saw/Electric-Saw-A3.mp3",
                    d: "/instruments/electric-saw/Electric-Saw-A4.mp3",
                    e: "/instruments/electric-saw/Electric-Saw-A5.mp3",
                    f: "/instruments/electric-saw/Electric-Saw-A6.mp3",
                    g: "/instruments/electric-saw/Electric-Saw-Slow-Rev-Down-A1.mp3",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    instrumentId: 9,
                    a: "/instruments/heart-beat/Dramatic-Heartbeat.mp3",
                    b: "/instruments/heart-beat/Heartbeat-Getting-Faster.mp3",
                    c: "/instruments/heart-beat/Heartbeat-Slow-To-Fast.mp3",
                    d: "/instruments/heart-beat/Heartbeat-Soft-To-Loud-And-Fast-A.mp3",
                    e: "/instruments/heart-beat/Heartbeat-Soft-To-Loud-And-Fast-B.mp3",
                    f: "/instruments/heart-beat/Human-Heartbeat.mp3",
                    g: "/instruments/heart-beat/Suspense-Heartbeat-A.mp3",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    instrumentId: 10,
                    a: "/instruments/cow/Cow-Moo-A.mp3",
                    b: "/instruments/cow/Cow-Moo-B.mp3",
                    c: "/instruments/cow/Cow-Moo-D.mp3",
                    d: "/instruments/cow/Cow-Mooing-C.mp3",
                    e: "/instruments/cow/Cow-Mooing-E.mp3",
                    f: "/instruments/cow/Cow-Moos-in-the-distance.mp3",
                    g: "/instruments/cow/Cow-Slow-Starting-Moo.mp3",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    instrumentId: 11,
                    a: "/instruments/pig/Pig-Heavy-Grunting-A.mp3",
                    b: "/instruments/pig/Pig-Heavy-Screaming-A.mp3",
                    c: "/instruments/pig/Pig-Heavy-Squealing-C.mp3",
                    d: "/instruments/pig/Pig-Heavy-Squealing-D.mp3",
                    e: "/instruments/pig/Pig-Oinking.mp3",
                    f: "/instruments/pig/Pig-Squealing-A.mp3",
                    g: "/instruments/pig/Pigs-Oinking-And-Squealing-A.mp3",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                }
            ],
            {}
        );

    },

    down: async (queryInterface) => {
        await queryInterface.bulkDelete('cats', null, {});
        await queryInterface.bulkDelete('instrumentsNotes', null, {});
        await queryInterface.bulkDelete('instruments', null, {});
    }
};
