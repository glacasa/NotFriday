var task = require('vso-task-lib');

function failTask(message) {
    task.setResult(task.TaskResult.Failed, message);
}

// var checkfriday = task.getBoolInput('checkfriday', false);
// if (checkfriday) {
//     var today = new Date();
//     if (today.getDay() === 5) {
//         failTask("On ne déploie pas, c'est vendredi !");
//     }
//     if (today.getDay() === 1) {
//         failTask("Doucement, c'est que lundi, on déploiera demain");
//     }
// }


// var ferie = require('./ferie');
// var checkholiday = task.getBoolInput('checkholiday', false);
// if (checkholiday) {
//     var today = Date.UTC();
//     var tomorrow = new Date(today + 86400000);

//     if (ferie.estFerie(tomorrow)) {
//         failTask("Demain c'est férié, pas la peine de déployer");
//     }
// }
