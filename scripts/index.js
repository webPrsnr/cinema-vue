"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var films_1 = require("./films");
var randomizeFilms = function (films) {
    var result = [];
    var time = 300000000;
    for (var _i = 0, films_2 = films; _i < films_2.length; _i++) {
        var film = films_2[_i];
        var dates = film.dates;
        dates.map(function (date) {
            date.date += time;
        });
        film.dates = dates;
        result.push(film);
    }
    return result;
};
var main = function () {
    var result = randomizeFilms(films_1.films);
    var data = JSON.stringify(result);
    (0, fs_1.writeFile)('./src/data.json', data, function (error) {
        if (error) {
            console.error(error);
            throw error;
        }
    });
    console.log('data.json written correctly');
};
main();
