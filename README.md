# NotFriday - #DotnetTlse - Coding For Fun 2017-12-18

NotFriday est une extension pour TFS/VSTS qui empêche la mise en prod le vendredi et/ou veille de jour férié

Pré-requis :  
Installer NodeJS (https://nodejs.org/) et les outils de ligne de commande TFS `npm i -g tfx-cli`

## Création d'une tâche de build   
Documentation pour la création d'extension TFS - tâches de build:  
https://docs.microsoft.com/fr-fr/vsts/extend/get-started/node  
https://docs.microsoft.com/fr-fr/vsts/extend/develop/add-build-task  

Il existe plusieurs possibilités pour la création d'extensions (fichiers bat ou powershell, exécutables) ; cet exemple est développé en Javascript avec NodeJS  

## Manifest
Fichiers json à créer : le manifest de l'extension `vss-extension.json`, et un `task.json` pour chaque tâche de build que propose l'extension.

**vss-extension.json**  
https://docs.microsoft.com/fr-fr/vsts/extend/get-started/node  
https://docs.microsoft.com/fr-fr/vsts/extend/develop/manifest  

**metadata task.json**  
https://docs.microsoft.com/fr-fr/vsts/extend/develop/add-build-task#createmetadata  
https://docs.microsoft.com/fr-fr/vsts/extend/develop/build-task-schema  

## Script 
Notre extension étant développée en NodeJS, le fichier `task.json` référence un fichier .js qui va être exécuté `NotFriday/index.js`

SDK : https://github.com/Microsoft/vss-web-extension-sdk  
TS API : https://github.com/Microsoft/vsts-task-lib/blob/master/node/README.md  


## Package
Une fois l'extension créée, on va en faire un package pour pouvoir l'installer sur TFS ou la soumettre au marketplace VSTS :  
https://docs.microsoft.com/fr-fr/vsts/extend/develop/add-build-task#packageext  

    tfx extension create --manifest-globs vss-extension.json

Déploiement : http://aka.ms/vsmarketplace-manage  
https://docs.microsoft.com/fr-fr/vsts/extend/develop/add-build-task#publishext  

Il est possible de rendre le package disponible publiquement, ou de le réserver à un compte VSTS  

Installation et test de l'extension  
https://docs.microsoft.com/fr-fr/vsts/extend/develop/add-build-task#installandtest  




## Est-ce qu'on met en prod aujourdhui ?
Si vous faites encore vos mises en prod à la main  
https://www.estcequonmetenprodaujourdhui.info/