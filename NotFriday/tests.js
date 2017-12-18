// npm install nodeunit -g
// nodeunit tests.js

var ferie = require('./ferie');

function compareDates(test, actualDate, y, m, d) {
    test.equal(actualDate.getFullYear(), y);
    test.equal(actualDate.getMonth(), m - 1);
    test.equal(actualDate.getDate(), d);
}

exports.testDimancheDePaques = function (test) {
    compareDates(test, ferie.dimancheDePaques(2008), 2008, 3, 23);
    compareDates(test, ferie.dimancheDePaques(2017), 2017, 4, 16);
    compareDates(test, ferie.dimancheDePaques(2018), 2018, 4, 1);
    compareDates(test, ferie.dimancheDePaques(2019), 2019, 4, 21);
    compareDates(test, ferie.dimancheDePaques(2020), 2020, 4, 12);
    compareDates(test, ferie.dimancheDePaques(2024), 2024, 3, 31);
    test.done();
};

exports.testDifferenceJours = function (test) {

    test.equal(0, ferie.joursDepuisPaques(2008, 3, 23));
    test.equal(1, ferie.joursDepuisPaques(2008, 3, 24));
    test.equal(9, ferie.joursDepuisPaques(2008, 4, 1));

    test.done();
}




exports.testFerie = function (test) {
    test.ko = function (val) { test.ok(!val); };

    test.ok(ferie.estFerie(2017, 1, 1));
    test.ko(ferie.estFerie(2017, 1, 2));

    test.ok(ferie.estFerie(2017, 11, 1));
    test.ok(ferie.estFerie(2017, 4, 17));
    test.ok(ferie.estFerie(2017, 5, 25));
    test.ok(ferie.estFerie(2018, 5, 21));

    test.ko(ferie.estFerie(2020, 1, 21));
    test.ko(ferie.estFerie(2017, 1, 2));


    test.done();
};