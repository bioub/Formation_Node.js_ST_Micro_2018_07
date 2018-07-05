# Exercices

## Créer un nouveau point d'entrée HTTP /api/societes

Dans 5 actions CRUD (List, Show, Create, Update, Delete)

Sociétés : nom, ville....

## Sur le showController de Contact

Ajouter une clé societe sur Contact de type ObjectId (et ref de Societe)

Faire le populate sur Societe dans le controller show

http://mongoosejs.com/docs/populate.html


# Exercices Test

## Ecrire les tests de :

* La fonction errorHandler (unitaire) : `src/middlewares/error-handler`
* La méthode create de (unitaire) : `src/middlewares/contact/controller`
* POST /api/contacts (fonctionnel) : `src/app`
