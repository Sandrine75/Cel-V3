# Cel-V3

        
                                                  PROJET CELEBETRIP
                                               Login/Logout component

                                                  PROJET OPEN SOURCE
__________________________________________________________________________________________________________________________

Component 1 : https://github.com/Sandrine75/CelebetripOSS

Component 2 : https://github.com/Sandrine75/CelebetripLogComponentOSS
__________________________________________________________________________________________________________________________


Je suis interressée par des poolrequest :

Component 1 :


     1-  mettre le projet sous Heroku >> Cela a échoué jusqu'à présent >> revoir le code
     voir réponse Mlab * >> le transfert des infos ne se fait pas sur la Bdd
     
     2-  anomalie dans le code : l'animation du texte déroulant fait sauter le site au bout de quelques instants. Trouver le bug.

     3-  fusionner le composent 1 et 2 (component 1 = CelebetripOSS)
     
Component 2 :

     1-  mettre le projet sous Heroku >> Cela a échoué jusqu'à présent >> revoir le code

     2-  anomalie dans le code :  Au niveau du menu (bootstrap) les onglets des menus sont collés. A voir dans le code
     
     3-  création d'un dashboard en cours


____________________________________________________________________________________________________________________________________
* Réponse Mlab le 11/06/2018 :

Hello again,

We are seeing successful connections to your "loginlogout" database, so this doesn't appear to be connectivity issue:

2018-06-11T08:01:49.209-0700 I NETWORK  [thread1] connection accepted from 90.79.218.24:57925 #352097 (43 connections now open)
2018-06-11T08:01:49.217-0700 I NETWORK  [conn352097] received client metadata from 90.79.218.24:57925 conn352097: { driver: { name: "nodejs", version: "2.2.34" }, os: { type: "Windows_NT", name: "win32", architecture: "x64", version: "10.0.17134" }, platform: "Node.
js v8.11.2, LE, mongodb-core: 2.1.18" }
2018-06-11T08:01:49.315-0700 I ACCESS   [conn352097] Successfully authenticated as principal loginlogout on loginlogout
You'll likely need to debug the code path that inserts new documents to determine why documents are not being inserted.

Does that help?

Please let us know if we can assist further.

Kind regards,
Sean@mLab
_____________________________________________________________________________________________________________________________________
