# lyfeCycle
 
 Utilisation de YARN fortement recommandée
 Cette API permet d'accéder et de mettre à jour le statut d'une annonce
 Cette API ne gère pas la persistence 

 Avant toute mise à jour, l'API vérifie l'identité du vendeur. Seul le vendeur peut mettre à jour une annonce.

 Se base sur l'API des commandes située ici : https://github.com/Munderstand101/TP2-CPDL-Catalogues

 (Hello Valentin et Maxence)

 À besoin de l'API Vendeurs pour fonctionner : https://github.com/LEZEAUsteve/identite-atelier4/

 (Couocu Steve et Ali)

 __Prerequis__ : installer nvm et yarn pour votre OS

 __Étape 1__ : `nvm use` (utilisation de la version de node présente dans le nvmrc)

 __Étape 2__ : `yarn install`

 __Étape 3__ : créer un fichier .env à la racine du projet

 __Étape 4__ : par défaut le server se lance sur le **__PORT 3001__** il est possible de definir un autre port dans un fichier **.env** (voir fichier .env.example)

 __Étape 5__ : Cette API dépend de l'API Command pour fonctionner, c'est elle qui détient les informations sur les produits. Une fois l'API Command lancée, renseignez l'ip et le port utilisé dans le .env

 __Étape 6__ : Cette API dépend de l'API Vendeurs pour fonctionner, c'est elle qui détient les informations sur les vendeurs. Une fois l'API Vendeurs lancée, renseignez l'ip et le port utilisé dans le .env

 __Étape 7__ : `node index.js`

 ## Obtenir le swagger : 

 Une fois le server lancé vous pouvez accéder au swagger en vous rendant sur 

 http://127.0.0.1:3001/api-docs

 **Il est possible de définir un autre port voir Étape 3**
Le swagger fonctionne même si la connexion avec les API Vendeurs et Catalogues ne fonctionne pas

Il est également possible d'ouvrir https://editor.swagger.io et d'importer le fichier swagger.yaml

 ## Résumé des routes

 ### Toutes les annonces

 **Method** : GET

 **Réponses** :
    - 200 : array d'annonces
    - 204 : aucune annonce en base


 ### Toutes les annonces pour un utilisateur spécifique

 **À ce stade les annonces ne possèdent pas de champs permettant d'identifier le vendeurs**

 **Method** : GET

 **Header** : Bearer token

 **Réponses** :
    - 200 : array d'annonces
    - 204 : aucune annonce en base pour ce user
    - 401 : token invalid
    - 500 : il y a eu un problème

 ### Créer une nouvelle annonce

 **Method** : POST

 **Header** : Bearer token

 **Réponses** :
    - 204 : succés de la création
    - 401 : token invalid
    - 500 : il y a eu un problème