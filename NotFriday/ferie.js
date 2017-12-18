// Calcul des dates de jours fériés en France

// Calcul de la date du dimanche de Pâques (Algorithme de Oudin)
function dimancheDePaques(annee) {
    var G = (annee % 19);

    var C = Math.floor(annee / 100);
    var C4 = Math.floor(C / 4);

    var E = Math.floor((8 * C + 13) / 25);

    var H = ((19 * G) + C - C4 - E + 15) % 30;

    if (H == 29 || (H == 28 && G > 10)) {
        H--;
    }

    var K = Math.floor(H / 28);

    var P = Math.floor(29 / (H + 1));

    var Q = Math.floor((21 - G) / 11);

    var I = (K * P * Q - 1) * K + H;

    var B = Math.floor(annee / 4) + annee;

    var J1 = B + I + 2 + C4 - C;

    var J2 = (J1 % 7);

    var R = 28 + I - J2;

    // R = nombre de jours après le 1er mars
    return new Date(Date.UTC(annee, 2, R));
}


var dureeJournee = 24 * 60 * 60 * 1000;
function joursDepuisPaques(y, m, d) {
    var paques = dimancheDePaques(y);
    var date = new Date(Date.UTC(y, m - 1, d));

    return Math.round(Math.abs((date.getTime() - paques.getTime()) / (dureeJournee)));
}

function dateFerie(date) {
    var d = date.getDate();
    var m = date.getMonth() + 1;
    var y = date.getFullYear();
    return estFerie(y, m, d);
}

function estFerie(y, m, d) {
    // si le premier parametre est une date, on convertit
    if ((typeof y) !== "number") {
           return dateFerie(y); 
    }

    // Jours fériés à date fixe
    if (
        (m == 1 && d == 1)                          // jour de l'an
        || (m == 5 && (d == 1 || d == 8))           // 1er ou 8 mai
        || (m == 7 && d == 14)                      // 14 juillet
        || (m == 8 && d == 15)                      // 15 août
        || (m == 11 && (d == 1 || d == 11))         // 1er ou 11 novembre
        || (m == 12 && d == 25)                     // Noel
    ) {
        return true;
    }

    // Jours fériés basés sur le dimanche de Paques
    var diffPaques = joursDepuisPaques(y, m, d);
    if (diffPaques == 0 || diffPaques == 1          // Dimanche et lundi de Paques
        || diffPaques == 39                         // Ascension
        || diffPaques == 49 || diffPaques == 50     // Pentecote et lundi
    ) {
        return true;
    }

    return false;
}


module.exports = {
    dimancheDePaques: dimancheDePaques,
    joursDepuisPaques: joursDepuisPaques,
    estFerie: estFerie
};