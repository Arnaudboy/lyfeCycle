# lyfeCycle
 
 Utilisation de YARN fortement recommandée
 Cette API permet d'accéder et de mettre à jour le statut d'une annonce

 Se base sur l'API des commandes située ici : https://gitlab.com/eliottbernard44/api-catalogue-annonce

 (Hello Géo et Eliott)

 __Prerequis__ : installer nvm et yarn pour votre OS

 __Étape 1__ : `nvm use` (utilisation de la version de node présente dans le nvmrc)

 __Étape 2__ : `yarn install`

 __Étape 3__ : créer un fichier .env à la racine du projet

 __Étape 4__ : par défaut le server se lance sur le **__PORT 3001__** il est possible de definir un autre port dans un fichier **.env** (voir fichier .env.example)

 __Étape 5__ : Cette API dépend de l'API Command pour fonctionner, c'est elle qui détient les informations sur les produits. Une fois l'API Command lancée, renseignez l'ip et le port utilisé dans le .env

 __Étape 6__ : `node index.js`

 ## Obtenir le swagger : 

 Une fois le server lancé vous pouvez accéder au swagger en vous rendant sur 

 http://127.0.0.1:3001/api-docs

 **Il est possible de définir un autre port voir Étape 3**

