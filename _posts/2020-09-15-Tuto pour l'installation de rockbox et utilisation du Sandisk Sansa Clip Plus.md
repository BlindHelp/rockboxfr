---
title: Tuto pour l'installation de rockbox et utilisation du Sandisk Sansa Clip Plus
layout: post
author: RockboxFR
commentsId: 2
---

<footer>Mardi 15 Septembre 2020</footer>


Coucou mes amis du blog de RockboxFR!    
Je viens d'acheter le Sansa Clip Plus - Lecteur MP3 - Radio FM - 8 Go - Noir un produit de la firme Sandisk, actuellement disponible pour 199,00€ plus frais d'envoi: 6,99€ donc ça fait en total: 205,99€ en neuf (pas en reconditionné) sur un site de vente que tout le monde trouvera en 2 clics.    
Note : On peut ajouter des cartes  MicroSDHC jusqu'à 32 go!.    
Il est arrivé dans les cinq jours ouvrables à partir de la date de la commande. 😃    
Je l'ai déballé hier soir, pour la première fois vous devriez le commencer à charger pendant environ trois heures à l'aide du câble fourni en le branchant sur votre PC.    
Une fois que vous l'avez branchée vous trouverez le lecteur dans le poste de travail comme nom:    
`Sansa Clip+ 8GB`    

Donc voici ci-dessous a tout fin utile la tuto pour l'installation du firmware Rockbox et le mode d'emploi uniquement pour le lecteur Sansa Clip Plus.    

Mille merci à nouveau à mes amis Sof, Desertix et Stephane pour leurs précieux conseils!    
Je vous souhaite une bonne lecture!    

Mais avant tout je vais décrire ci-dessous les points principaux de ce qui fait le firmware Rockbox avec les lecteurs compatibles (y compris le lecteur Sansa Clip Plus):    

# C'est quoi Rockbox?

Rockbox est un logiciel, ou firmware, qui permet d'étendre les fonctionnalités de nombreux lecteurs mp3 ou multimédia. En plus de lire d'autres formats, comme le WAV par exemple, il permet de nombreux réglages simples (avec le choix d'ambiances : rock, classique…) ou très précis (avec un nombre d'options sonores ou visuelles impressionnant).    
Il permet également :    

* De supprimer les coupures entre 2 morceaux 
* De modifier la vitesse de lecture ainsi que la tonalité, et de choisir parmi plusieurs modes pour l'équaliser
* D'enregistrer sur différents formats (radio et dictaphone)
* D'afficher le nom de la radio (et non juste la fréquence) et de changer de liste de présélections selon la ville où l'on se trouve (en téléchargeant ou en créant ces listes)
* De personnaliser l'apparence du lecteur ou télécharger un thème parmi une trentaine déjà existant (choix des nombreuses infos qui peuvent s'afficher pendant la lecture, taille et police des caractères…)
* De disposer d'un oscilloscope, métronome, calendrier, d'une calculatrice, horloge (binaire, digitale, avec la date…), alarme (reprise de la lecture a l'heure voulue)
* D'écrire un N° de téléphone ou une petite note 
* De jouer malgré son petit écran : Démineur, Pong, Sudoku, Snake...
* D'afficher les morceaux par noms ou par "Tags", comme initialement
* De faciliter l'utilisation du lecteur aux personnes malvoyantes (plug-in pour un menu audio)

Logiciel qui n'efface pas les fichiers d'origine, et qui peut donc être désinstallé pour revenir au firmware initial (non testé, et ce n'est pas prévu :-)) 

Vous trouverez plus d'informations sur le firmware Rockbox sur le [site officiel (page en anglais)](http://www.rockbox.org/)    

## Tuto pour l'installation et utilisation de ROCKBOX sur un SANDISK Sansa Clip Plus.

Attention : Comme d’habitude, vous êtes seuls responsables de vos actes, le mode opératoire que je donne ici a fonctionné pour moi mais je ne saurais être tenu pour responsable en cas de pépins, vous êtes prévenus !    

Sommaire <a id="Sommaire"></a>
-------------
[1.- Description du produit.](#mark1)
[2.- Découverte du Sansa Clip Plus et premier pas.](#mark2)
[3.- Préréglages de notre lecteur Sansa Clip Plus](#mark3)
[4.- Téléchargement des fichiers avant l'installation du firmware Rockbox](#mark4)
[5.- Préparation avant l'installation du firmware Rockbox [astuce].](#mark5)
[6.- Branchement de notre lecteur Sansa Clip Plus au PC.](#mark6)
[7.- Installation du firmware Rockbox sur notre Sansa Clip Plus.](#mark7)
[8.- Installation de la voix en français pour un Sansa Clip Plus.](#mark8)
[9.- Configuration de la langue en français pour un lecteur Sansa Clip Plus.](#mark9)
[10.- Description physique ddu Sansa Clip Plus.](#mark10)
[11.- Recommandations utils!](#mark11)
[12.- COMMENT UTILISER  mon lecteur Sansa Clip Plus à l'aide de Rockbox?](#mark12)
[13.- FONCTIONS DES TOUCHES.](#mark13)
[14.- GESTION DES FICHIERS ET DES DOSSIERS](#mark14)
[15.- COMMENT ÉCOUTER DE LA RADIO FM ?](#mark15)
[16.- Comment enregistrer une emission de Radio](#mark16)
[17.- Programmation des présélections des vos Radio FM.](#mark17)
[18.- Sélectionner une présélection.](#mark18)
[19.- Comment utiliser le clavier virtuel?](#mark19)
[20.- Mettre de la musique sur votre lecteur Sansa Clip Plus](#mark20)
[21.- AJOUT D'UN DOSSIER contenant de la MUSIQUE](#mark21)
[22.- Créer et transférer des listes de lecture M3U sur mon lecteur Sansa Clip Plus](#mark22)
[23.- Comment écoutez une playlist avec mon Sansa Clip Plus?](#mark23)
[24.- La carte MicroSDHC](#mark24)
[25.- LA VOIX EN ROCKBOX](#mark25)
[26.- Mise à jour du firmware Rockbox sur notre Sansa Clip Plus.](#mark26)
[27.- Désinstallation du firmware Rockbox sur notre Sansa Clip Plus.](#mark27)
[28.- Documentation annexe pour le lecteur Sansa Clip Plus](#mark28)
[29.- Mots final ](#mark29)

---

# 1.- Description du produit.<a id="mark1"></a>

Voici la description du produit  Sandisk \- Sansa Clip Plus - Lecteur MP3 - Radio FM - 8 Go - Noir    

Un lecteur MP3 pas très récent de chez Sandisk (sortie en 2009.    
Parfois, une image vaut 1000 mots! :)    

![sansa clip plus rockbox](https://blindhelp.github.io/rockboxfr/sansa_clip_plus_rockbox.jpg "Sansa Clip Plus Rockbox")


# Détails techniques

> * Super compact et super léger, le lecteur MP3 Radio FM Sansa Clip+ de la firme Sandisk fait le plein de musique à moindre frais! Son de qualité et écran lumineux sont au menu du Sansa Clip+ pour profiter de vos fichiers audio dans les meilleures conditions.    
> * Son interface vous permet de naviguer simplement dans sa mémoire de 8 Go à la recherche de vos morceaux préférés par titre, album ou artiste.    
> * Le lecteur Sansa Clip+ stocke ainsi jusqu'à 2000 fichiers MP3 et 4000 fichiers WMA, étant par ailleurs compatible avec les formats secure WMA, Audible, Ogg Vorbis et FLAC.    
> * Il lit également les audiobooks et les podcasts.    

# Caractéristiques détaillées

## Capacité de stockage disponible

> * 8 Go    

## Type de cartes supportées

> * microSD, microSDHC    

## Technologie de l'écran

> * OLED    

## Résolution écran / Couleurs

> * NC pixels / Monochrome    

## Taille de l'écran (diagonale)

> * 2,54 cm    

## ENTRÉES & SORTIES

> * Interface PC: USB 2.0    
> * Casque connection: 3,5 mm    

## ALIMENTATION

> * Type d'alimentation: Lithium Ion    

## DIMENSIONS

> * Largeur: 3,47 cm    
> * Hauteur: 1,53 cm    
> * Epaisseur: 5,5 cm    
> * Poids: 24 g    

## Garantie du fabricant

> * Détails des services et de la maintenance: Garantie Fabricant: 1 an    


  [Retour au sommaire](#Sommaire)
  
# 2.- Découverte du Sansa Clip Plus et premier pas.<a id="mark2"></a>

Une fois fait le déballage du lecteur Sansa Clip Plus qui vient dans une boîte digne d'un coffre-fort de la CIA, pour reprendre les termes de mon ami Sof,  nous avons le lecteur en soi, le cable USB2.0, les écouteurs et un Guide de mise en route rapide (Quick Start Guide) Version papier.    

La première chose à faire    

C'est de branchez votre appareil Sandisk a la prisse USB de votre ordinateur à l'aide du cable fourni.    
L'installation du driver pour l'appareil se fait automatiquement    
Je profite pour connectez l'appareil pour charger la batterie la première fois! comme je l'ai dit plus haut, cette charge prend environs trois heures.    

Note : le lecteur est par defaut en mode MTP, il est visible dans l'explorateur de Windows.    

Donc quand vous explorer le Poste de travail pour la première fois vous aurai un icône nommé :    
`Sansa Clip + 8GB`    
Une fois ouvert celui-ci nous avons un dossier nommé :    
`Internal Memory`    
Une fois ouvert celui-ci nous avons  huit éléments comme sui :    
`Albums (Ici, nous avons six fichiers avec l'extension *.alb)`    

* Il disparaît en mode USB quand il est connectez au PC!    
* Mais on le retrouve dans le lecteur!     

`Audiobooks (il est vide)`    

`Music (il contient  six dossiers avec des sous dossiers avec de la musique sous forme *.mp3 par défaut)`    

* Sauf erreur de ma part se dossier devient vide une fois passer en mode USB quand on le connecte au PC!!! Donc, une sauvegarde est recommandable!!!  La musique est très belle!!!    
* Mais on le retrouve dans le lecteur!    

`Playlists (il est vide)`    

* Il disparaît en mode USB quand il est connectez au PC!    
* Mais on le retrouve dans le lecteur!    

`Podcasts (il est vide)`    
`Record (il y à deux dossiers, FM et Voice)`    
`Service (il y à un dossier nommé Rhapsody le quelle une fois ouvert contient deux dossiers et deux fichiers tel que : Artist (vide), Playlists (vide), capabilities.xml et radiopc.txt.`    

* Il disparaît en mode USB quand il est connectez au PC!    
* Mais on le retrouve dans le lecteur!    

Et on trouve un fichier nommé :    
`DevIcon.fil`    

* Il disparaît en mode USB!    


Voila pour la structure de l'appareil Sansa Clip Plus pour la première fois sans avoir changer en mode USB.    

Ceci est à titre d'information!    

[Retour au sommaire](#Sommaire)

# 3.- Préréglages de notre lecteur Sansa Clip Plus avant l'installation du firmware Rockbox.<a id="mark3"></a>

  Voici les premier Réglages préalable de l'appareil Sansa Clip Plus à l'aide d'une personne voyante!    
  
Procèdure donner par notre ami Desertix    
Mille merci à lui!    

1.- La première chose à faire sera, grâce à l'aide d'un voyant, de mettre en  mode msc votre sansa. Ainsi votre appareil sera reconnu comme une clef USB  et nous pourrons passer à la deuxième étape.  
Note : Par défaut il est en mode MTP et peut être visible sur Windows. Il faut toutefois noter, si vous n'avez pas d'aide extérieure pour faire ce réglage, que certains utilisateur ont pu installer rockbox sans mettre  préalablement le mode msc sur leur appareil.    

Notre ami Sof nous dit que pour une personne DV il existe un moyen de forcer le mode MSC de façon temporaire, sans passer par les réglages, mais il faudra renouveler l'opération quand vous voudrez mettre à jour Rockbox ou accéder à la structure normale de vos dossiers.     

Pour un Sansa Clipp+, branchez le câble USB à votre lecteur et, tout en connectant l'autre extrémité du câble à votre PC, maintenez la touche centrale du pavé directionnell (select) enfoncée et relâchez-la environ 2 secondes après avoir branché le câble.    

Pour une personne voyante : N'oubliez pas d'enlevé la petite protection en plastique qui est sur l' écran.    

L'appareil est sur la langue en anglais par défaut.    
Pour changer la langue actuelle par notre belle langue le francais fair comme sui :    
Il faut aller sur Settings puis aller dans System puis dans Language : `French`    
Maintenant que l'appareil Sansa Clip Plus est en francais c'est plus simple!    

Pour le mettre en mode msc donc : aller dans réglage puis paramètre système et enfin mode USB, en cherchant quelques instants de ce côté vous  trouverez ce mode.    

Note :    

<span lang="en">Eng :</span>    

> <span lang="en">MSC mode instructions:</span>        
> * <span lang="en">Turn on the Clip+ </span>      
> * <span lang="en">Navigate to "Settings" on the menu of the device itself </span>       
> * <span lang="en">Next select "System Settings" </span>       
> * <span lang="en">Next, navigate to "USB Mode" and select "MSC"</span>       


FR :    

> Instructions de mode MSC:    
> * Allumez le Clip +    
> * Accédez à "Réglages" dans le menu de l'appareil lui-même    
> * suivant sélectionnez "Paramètres système"    
> * Ensuite, accédez au Mode "USB" et sélectionnez "MSC"    

Là changez le mode "automatique" ou "Auto", ce qui donne du "MTP" sous Windows, réglage sélectionné par défaut, en "MSC" (= UMS) (Le mode MSC permet les "glisser/déposer" de fichiers dans le lecteur).    
Avec l'une ou l'autre de ces méthodes, votre lecteur devrait maintenant apparaître dans votre système de fichiers. Si tel est le cas, notez la lettre de votre lecteur car vous aurais besoin de celui-ci pendant l'installation du firmware Rockbox.    
Au passage, dans les réglages, vous pouvez également modifier la "Configuration d'Usine" (sélectionnée au premier lancement). Au lieu de "Europe", choisissez "Amérique du Nord", et ainsi le volume sonore ne sera plus bridé. Vous pourrez ensuite toujours choisir "Français" pour la langue ou la configuration de la radio FM. 

[Retour au sommaire](#Sommaire)

# 4.- Téléchargement des fichiers avant l'installation du firmware Rockbox sur un Sansa Clip Plus.<a id="mark4"></a>

Il faut téléchargez les fichiers suivants pour notre lecteur Sansa Clip Plus pour qui soi compatible avec le firmware Rockbox (fichiers uniquement pour le Sansa Clip Plus!)    

1. L'utilitaire Rockbox utility    
Pour installer Rockbox sur notre Sansa Clip Plus, nous allons avoir besoin de RockboxUtility, un petit programme qui va configurer comme un grand le sansa clip plus!    
Lors de l'écriture de cet article la dernière  version en date de l'utilitaire Rockbox était la 1.4.1 sortie le 15.11.2019 pour la plate-forme Windows (7 / 8 / 10)    
Mais le firmware Rockbox comporte comme numéro de version: 3.15    
Ci-dessous Je vous donne le dernier lien de téléchargement de RockboxUtility trouvé sur cette page,  disponible sous Windows:
[http://download.rockbox.org/rbutil/win32/RockboxUtility-v1.4.1.zip](http://download.rockbox.org/rbutil/win32/RockboxUtility-v1.4.1.zip)    
Il est disponible aussi sous Linux et Mac, voir sur [cette page en anglais)](http://www.rockbox.org/wiki/RockboxUtility)    
Mais il est mis à jour de temps en temps donc à vous de vérifier occasionnellement si une nouvelle version corrigeant des bugs, apportant de nouvelles fonctionnalités ou prenant en charge de nouveaux modèles, n'est pas sortie.    
Une fois ddécompresser vous devez trouver le fichier nommé :    
`RockboxUtility.exe`    
2. Firmware original du Sansa Clip+    
La dernière version au moment où j'écris cet article est la 01.02.18.    
Téléchargez le fichier:    
[clipplus01.02.18.zip](https://blindhelp.github.io/rockboxfr/clipplus01.02.18.zip)    
Une fois ddécompresser vous devez trouver le fichier nommé :    
`clppa.bin`    

[Retour au sommaire](#Sommaire)

# 5.- Préparation avant l'installation du firmware Rockbox [astuce].<a id="mark5"></a>

Je pense que c'est plus sûre de créer au préalable un dossier nommé :    
`RockboxInstall`    
Dans Mes documents ou Documents selon votre Windows installé.    
Merci à nouveau pour l'astuce donner par Sof!    

Ce dossier doit contenir les fichiers dans l'ordre suivants :    
clppa.bin (firmware d'origine pour le Sansa Clip Plus).    
Pour le Sansa clip plus ils ne proposent qu'une version.    
RockboxUtility.exe (Installation du firmware Rockbox pour le Sansa Clip Plus).    

Maintenant que nous avons ces fichiers  dans notre dossier afin de configurer notre Sansa Clip Plus, on procède à mettre les mains dans le cambouis!    

[Retour au sommaire](#Sommaire)

# 6.- Branchement de notre lecteur Sansa Clip Plus au PC.<a id="mark6"></a>

Si une personne nous à mit l'appareil Sansa Clip Plus déjà en mode USB, sans l'avoir branchez au PC...    

On connecte notre Sansa Clip Plus à l'aide du cable USB qui va être connectez à notre PC, et l'autre extrême du cable mini-USB le quelle va être branchez à notre appareil.    
Une fois fait cela...    
NVDA/Jaws nous dit nouveau matèriel  détecter bla bla bla    
Ensuite NVDA/Jaws nous dit le nouveau matèriel   est prêt pour l'emploi.    

maintenant  Dans le Poste de travail il figure deux nouveau « éléments :    
Disque amovible suivi d'une lettre.    
Celui-ci n'est pas accessible si nous avons pas mis au préalable une carte MicroSDHC dans notre lecteur Sansa Clip Plus!    
Puis  notre lecteur:    
SANSA CLIPP suivi d'une lettre.    

Il faut impérativement retenir la lettre du Sansa Clip Plus, car nous aurons besoins ultérieurement!!!    

Celui-ci une fois ouvert contient des dossiers/fichiers.    
A titre d'information :    
`AUDIBLE (c'est un dossier il est vide)`    
`AUDIOBOOKS (c'est un dossier il est vide)`    
`DID.bin (c'est un fichier)`    
`MTABLE.SYS (c'est un fichier)`    
`MUSIC (c'est un dossier il est vide)`    
`PODCASTS (c'est un dossier il est vide)`    
`RECORD (c'est un dossier il contient deux dossiers : FM et Voice)`    
`RES_INFO.SYS (c'est un fichier)`    
`SYS_CONF.SYS (c'est un fichier)`    
`version.sdk (c'est un fichier)`    

Voila pour la structure de l'appareil Sansa Clip Plus une fois changer en mode USB.    

Note a propos du mode USB:    
(Sous Mac OS)    
Si nous changions par le mode msc celui-ci apparaît dans le Poste de travail comme:    
SANSA CLIPP ) suivi de la lettre du lecteur.    
Il s'affiche sur Windows de la même façon.    

(Sous Windows)    
Si nous l'avons laissez tel quelle sans avoir changer le mode il apparaît dans le Poste de travail comme:    
Sansa Clip+ 8GBSuivi de la lettre du lecteur.    

J'ignore si surMac OS)  s'affiche de la même façon aussi.    

Remarque très importante avant l'installation de Rockbox dans notre lecteur!!!    

Il est bon de se rappeler que l'installation de Rockbox dans le lecteur ne détruit pas le système original.    
Ce qui fait cette application dans le lecteur, c'est de changer votre bootloader, c'est-à-dire le démarrage de Rockbox par défaut une fois allumé votre lecteur, laissant le système original sur le lecteur.    
Ainsi, si un utilisateur veut restaurer le lecteur à sont système original, simplement il faut désinstaller le firmware Rockbox en exécutant  l'application Rockbox utilityt afin d'exécuter l'étape de désinstallation. Quel dommage. :-(    

Avant de procéder à l'installation de rockbox, il faut vérifier que votre lecteur est à jour et bien chargé. Pour connaître la version du lecteur, il suffit d'aller dans Réglages > Paramètres Système > Information, il faut s'aider d'une personne voyante pour le savoir.    
La dernière version au moment où j'écris  cette article est la 01.02.18. Si vous êtes déjà à la version 01.02.18 passez à l'étape suivante    
Sinon voici comment faire la mise à jour     du firmware original du Sansa Clip Plus:    
Par exemple si votre lecteur Sansa Clip Plus comporte le  FW (firmware) comme numéro de version:    
`V01.02.17A`    
 Il suffit de télécharger le fichier *.bin mis à disposition à partir du lien ci-dessous:    
Téléchargez le fichier [clipplus01.02.18.zip](https://blindhelp.github.io/rockboxfr/clipplus01.02.18.zip)    
Une fois ddécompresser vous devez trouver le fichier nommé :    
`clppa.bin`    
et collez le à la racine du lecteur. Déconnectez le lecteur et patientez : la mise à jour se fait automatiquement, il s'affiche "Mise à jour du firmware" sur le lecteur pendant environ 10 secondes, puis il s'éteint tout seul.    

[Retour au sommaire](#Sommaire)

# 7.- Installation du firmware Rockbox sur notre Sansa Clip Plus<a id="mark7"></a>
Voilà on installe Rockbox donc!!!    
Environ 10 minutes chrono!    

Suivez le guide!!!    
Merci a nos amis Sof, Desertix et Stephane!!!    
J'ai adapter celui-ci uniquement pour un Sansa Clip Plus!    
Note:    
Pour les personnes ayant un Windows 7, . Il semblerait que le controle de comptes utilisateurs empêche RockboxUtility de fonctionner normalement. alors, il vaut mieux le désactiver avant de faire l'instal... Merci a notre ami Cyrille.    
De même, si vous avez d'autres appareils  de la marque Apple, par exemple, un lecteur de type iPod ou   toute autre lecteurs compatibles avec Rockbox, déconnectez-le  de votre PC avant d'exécuter le fichier:    
`RockboxUtility.exe`    
sinon le lecteur ne sera  Rockboxable!    
Et va donner un message: erreur de configuration.    

1.- Tout d'abord  on fait l'installation du firmware Rockbox à l'aide de l'utilitaire nommé :    
`RockboxUtility.exe`    
Validez sur le fichier, l'utilitaire Rockbox se lance!    
Celui-ci contiendra le firmware Rockbox pour les baladeurs compatibles.    
Donc une fois valider sur celui-ci, se déplacer avec des commandes clavier normales, comme "Tabulation" et "Majuscule+Tabulation" pour se déplacer entre les contrôles:    
Au  premier lancement vous aurez une fenêtre: "Historique des modifications", ", utilisez les Flèches Haut ou Bas pour lire le texte.    
`Montrer au démarrage`    
case à cocher (non cochée).    
Appuyez sur le bouton "OK".    
La deuxième fenêtre est:    
`Nouvelle installation`    
Appuyez sur le bouton "OK".    
La troisième fenêtre de configuration va s'ouvrir.    
Ne pas oublier que vous   devez connecté votre appareil à l'ordinateur.    
Branchez le sansa clip plus et patientez jusqu'à ce que Windows le détecte. Chez moi il est accessible via le lecteur I.    
`Sélection du point de montage et du modèle du lecteur:`    
`Sélectionnez votre périphérique dans le Système de fichiers`    
Il faut sélectionnez le model de votre baladeur avec la flèche Bas dans la liste en arborescence.    
(chez moi la lettre est:  I:) et le type de lecteur Sansa Clip+ (Stable)    
Utiliser le bouton "Rafraîchir".    
Ce bouton on peut l'utilisé pour  réactualiser la liste contenant notre appareil (utile si le model de votre baladeur ne figure pas dans cette liste).    
 Si le model de votre baladeur ne figure pas dans cette liste est parce que ce n'est pas pris en charge par le firmware Rockbox.    
`Afficher les cibles d'installation désactivées`    
case à cocher (non cochée).    
Utiliser le bouton "Autodétection".    
Ce bouton on peut l'utilisé pour une détection automatique de notre périphérique, le programme tente de le trouver tout seul.    
Un message indiquera si le périphérique a été détectée ou non et si celui-ci est pris en charge par le firmware Rockbox.    
Appuyez sur le bouton "OK".    
 Pour confirmer l'action.    
Appuyez sur le bouton "Annuler".    
Pour annuler celle-ci.    
Cliquez sur OK. Arrive alors la quatrième  fenêtre principal d'installation, je vous conseille de cocher au moins les suivantes cases à cocher:    
`Choix des options de configuration de Rockbox`    
`Utilitaire Rockbox fenêtre`    
`Rockbox à installer liste déroulante Version stable (Version 3.15)`    
Note:    
Choisissez la version de Rockbox à installer entre Version stable (release) et Version de développement (build). Normalement je devrais conseiller la Version stable pour le grand public car comme son nom l'indique, elle garantit une stabilité contrairement aux versions de développement. Cela dit, en réalité mon expérience montre que les versions de développement sont tout aussi stables le plus souvent, elles corrigent même parfois des bugs présents dans la version stable. Et bien entendu, elles améliorent ou ajoutent également des fonctionnalités. Je serais presque donc tenté de conseiller les versions de développement pour tout le monde, mais le choix final vous revient bien évidemment. ;-)    
`Composants de Rockbox à installer groupe`    
`Bootloader case à cocher coché`    
`Rockbox case à cocher coché`    
`Polices case à cocher coché`    
`Thèmes case à cocher non coché`    
Utile sauf si vous avez un residue visuel.    
Si vous souhaitez avoir des thèmes particuliers, choisissez les en cliquant sur le bouton Personnaliser afin d'installer.    
`Personnaliser bouton`    
Vous pouvez télécharger via Rockbox.org (page en anglais) deux thèmes qu'on m'a dit qu'ils sont très sympas, [Classic](http://themes.rockbox.org/index.php?themeid=1035&target=sansaclipplus) et [Equilibrium.](http://themes.rockbox.org/index.php?themeid=1534&target=sansaclipplus) Après c'est une question de goût!    
Attention, le pack de polices est indispensable au bon fonctionnement de certains thèmes donc il est préférable de l'installer d'emblée dans tous les cas, même si vous n'installez pas tout de suite de thèmes, pour être tranquille par la suite.    
`Fichiers de jeux case à cocher non coché`    
Si vous êtes intéressés par Doom (oui, oui!), cochez la case Fichiers de jeux. Je ne l'ai pas essayé, mais on parle en bien.    
`Installer bouton`    
Quand vous êtes prêt, cliquez sur Installer, RockboxUtility va alors vous demander de lui fournir le fichier clppa.bin (téléchargeable sur [le site de Sandisk](http://kb.sandisk.com/app/answers/detail/a_id/300) ou [ici)](https://blindhelp.github.io/rockboxfr/clipplus01.02.18.zip)    
et va alors commencer le déploiement de Rockbox sur votre Sansa Clip+    
Comme vous l'indique cette fenêtre, l'installation du bootloader a besoin du firmware d'origine de l'appareil pour fonctionner. Souvenez-vous, nous l'avons téléchargé tout à l'heure. Après avoir confirmé par OK, un dialogue d'ouverture de fichiers classique s'affiche pour vous permettre de sélectionner le fichier .bin situé dans votre dossier RockboxInstall, situé dans "mes documents;    
`Déploiement de Rockbox`    
`Prérequis fenêtre`    
`Système réduit`    
`L'installation du bootloader nécessite que vous fournissiez une copie du firmware original (fichier bin). Ce firmware sera alors modifié et installé sur votre lecteur avec le bootloader de Rockbox. Vous devez télécharger ce fichier par vous-même pour des raisons légales. Veuillez vous référer aux Forums de Sansa ou au manuel et à la page wiki Sansa AMS pour obtenir ce fichier. Note:Ce fichier n'est pas présent sur votre lecteur et disparaîtra automatiquement après l'avoir installé. Appuyez sur Ok pour continuer et parcourir les fichiers sur votre ordinateur pour indiquer le fichier du firmware.`    
`OK bouton`    
`Abort bouton`    
cliquez sur `OK`    
Pour les curieux, Rockbox Utility va à ce moment "patcher" le fichier firmware, c'est-à-dire qu'il va modifier le fichier `*.bin` pour y inclure le bootloader Rockbox (ce qui permet de démarrer Rockbox).    
`Sélectionnez le fichier firmware dialogue Nom du fichier :`    
`Nom du fichier : liste déroulante`    
`Types de fichiers : liste déroulante Fichiers du bootloader (*.bin *.zip)`    
`clppa.bin`    
Appuyez sur la touche Entrée sur ce fichier ou cliquez sur le bouton:    
`Ouvrir bouton`    
Laissez maintenant Rockbox Utility tout installer automatiquement.    
L'installation commence et devrait annoncer toute une suite de chiffres indiquant qu'il travaille. Vous pouvez utiliser la touche de tabulation ou les flèches dans ce dialogue pour essayer de connaître les différentes étapes du processus;    
`Utilitaire Rockbox fenêtre`    
`Avancement fenêtre`    
`Progression liste Progression`    
`Téléchargement du bootloader`    
`3 pour cent`    
`20 pour cent`    
`52 pour cent`    
`Avancement fenêtre`    
`100 pour cent`    
`0 pour cent`    
`10 pour cent`    
Etc, etc, etc...
`Progression liste Progression`    
`Téléchargement terminé.`    
`Modification du firmware...`    
`Le firmware a été modifié avec succès`    
`Création du journal d'installation`    
`Le journal d'installation a été crée`    
Au bout de quelques instants, RockboxUtility arrive à l'étape "installation de Rockbox".    
`Téléchargement du fichier rockbox-sansaclipplus-3.15.zip`    
`Téléchargement terminé.`    
`Extraction du fichier.`    
`Création du journal d'installation`    
`Le paquet a été installé avec succès.`    
Au bout de quelques instants, RockboxUtility arrive à l'étape "installation de polices".    
`Téléchargement du fichier rockbox-fonts-3.15.zip`    
`Téléchargement terminé.`    
`Extraction du fichier.`    
`Création du journal d'installation`    
`Le paquet a été installé avec succès.`    
Au bout de quelques instants, RockboxUtility arrive à l'étape "installation de thèmes". Ces thèmes n'étant utiles que pour ceux qui ont un restant visuel.    
`Aucun thème sélectionné, étape ignorée`    
Vous pouvez ignorer ceci en choisissant le bouton "Annuler".    
Quand tout est installé, cliquez sur le bouton OK dans le cas où vous avez installé des  thèmes.    
Dans les deux cas de figure, vérifiez que Rockbox Utility a bien ajouté le fichier `*.bin` à la racine de votre baladeur.    
PS: si vous ne voyez pas certains dossiers ou fichiers sur votre baladeur, c'est probablement parce que vous n'avez pas activé l'affichage des dossiers et fichiers cachés dans l'explorateur Windows.    
Par exemple, ".rockbox" est un répertoire caché.    
Pour cela cliquez sur "Affichage", puis "Afficher les fichier cachés".    
Puis fermé à ce moment l'assistant de Rockbox utility, via le menu Fichier Alt+F, et chercher puis appuyer sur l'élément: Quitter Ctrl+Q.    

[Retour au sommaire](#Sommaire)
 
# 8.- Installation de la voix en français pour un Sansa Clip Plus.<a id="mark8"></a>

Si vous souhaitez utiliser le support de voix, vous aurez également besoin d'un fichier de voix. Les fichiers de voix (.voice) permettent à Rockbox de verbaliser l'interface utilisateur pour vous. Rockbox Utility peut installer un fichier de voix en anglais (en-us), ou vous pouvez le télécharger à partir de [cette page (en anglais)](https://www.rockbox.org/daily.shtml)    
Une fois ouvert cette page, chercher le mot:    
`sansaclipplus`    
Vous trouverez ici des liens pour télécharger la dernière version de Rockbox, les différents fichiers de voix des principales langues supportées par Rockbox et le manuel en anglais, tous ceux-ci sont des  "Daily builds", c'est-à-dire des constructions quotidienne pour le lecteur Sansa Clip Plus.    
Mais je vous donne ci-dessous les liens de téléchargement des fichier de voix pour le français et l'anglais (États-Unis) pour Rockbox version 3.15 compatible avec le lecteur Sansa Clip Plus, mais avant tout la procédure d'installation manuelle.

1.- Pour faire la vocalisation, il faudra aller donc dans poste de travail et entrer dans votre lecteur Sansa Clip Plus    
Dans mon cas celui-ci est nommé par :    
SANSA CLIPP suivi d'une lettre.    
2.- vous pouvez télécharger le fichier pour la langue en français nommé :    
[sansaclipplus-20200827-francais.zip](https://blindhelp.github.io/rockboxfr/sansaclipplus-20200827-francais.zip)    
3.- Une fois ddécompresser vous devez trouver le fichier nommé :    
`francais.voice`    
4.- Faire un copier du fichier pour la langue en français nommé :    
`francais.voice`    
5.- Une fois validez sur notre lecteur Sansa Clip Plus, il faut aller dans le dossier nommé:    
.rockbox, faire entrée puis choisissez le dossier langs, et faire entrée    
ici on colle le fichier nommé:    
`francais.voice`    

# Installation de la voix en anglais pour un Sansa Clip Plus

1.- Si vous voulez avoir la langue en Anglais (États-Unis), vous pouvez télécharger le fichier nommé :    
[sansaclipplus-3.15-english.zip](https://blindhelp.github.io/rockboxfr/sansaclipplus-3.15-english.zip)    
2.- Une fois ddécompresser vous devez trouver le fichier nommé :    
`english.voice`    
3.- Faire un copier du fichier pour la langue en anglais nommé :    
`english.voice`    
4.- Une fois validez sur notre lecteur Sansa Clip Plus, il faut aller dans le dossier nommé:    
.rockbox, faire entrée puis choisissez le dossier langs, et faire entrée    
ici on colle le fichier nommé:    
`english.voice`    

Note :    
S'est  possible de créer un fichier .voice et faire la Création des fichiers d'annonce  à l'aide de RockboxUtility.    

Remarque Importante!    
Pour ma part je n'est pas pu arriver  à créer un nouveau fichier .voice et faire la Création des fichiers d'annonce  à l'aide de Rockbox Utility sous W7 ni W10!    
Affaire à suivre pour les pro du blogh de RockboxFR!    
Si solution mille merci par avance de le signaler!    

[Retour au sommaire](#Sommaire)

# 9.- Configuration de la langue en français pour un lecteur Sansa Clip Plus.<a id="mark9"></a>

Voici la procèdure pour la configuration du Sansa Clip Plus en francais.    
Notre ami Sof nous dit :    

>Par défaut, Rockbox démarre en anglais. Pour que l'affichage et la vocalisation se fasse automatiquement en français, je vous propose d'installer un fichier de paramètres préconfiguré pour le Sansa Clip Plus.    

Je vous donne ci-dessous le lien de téléchargement, ce fichier de paramètres préconfiguré pour la langue  en français pour le Sansa Clip Plus inclut un autre changement fait par mes soins autres que ceux proposées à la base par Sof, en utilisant la version de Rockbox 3.15.    
J'ai ajoutée la ligne dans le fichier nommé:    
`config.cfg`    
pour avoir les radios de ma région en fm avec le Sansa Clip Plus (si disponibles), et cette ligne est:    
`fmr: /.rockbox/fmpresets/Grenoble.fmr`    
Au préalable j'ai créé le dossier nommé:    
`fmpresets`    
à la racine du .rockbox, ensuite  j'ai collé le fichier nommé:    
`Grenoble.fmr`    
dans ce dossier.    
Note:    
Si vous ne avez pas créé ce dossier dans la racine du .rockbox ou si vous n'avez un fichier `*.fmr` dans ce dossier probablement cette ligne ne sera pas prise en compte dans le fichier de configuration.    
Mais ne vous inquiétez pas pour le moment, j' expliquerai le tout dans[cette  section](#mark15) :)    

Ci-dessous Je vous donne quelques exemples des fichiers `config.cfg` utilisés dans mon Sansa Clip Plus pour avoir une idée lors de mes tests:    

# Voici le contenu du fichier config.cfg par défaut la première fois que vous lancez Rockbox, une fois que vous avez mis le fichier english.voice:
<br>
`# .cfg file created by rockbox 3.15 - http://www.rockbox.org`    
<br>
`volume: -2`    
<br>

# Voici le contenu du fichier config.cfg avec les lignes données par Sof la première fois que vous lancez Rockbox, une fois que vous avez mis le fichier francais.voice:
<br>
`# .cfg file created by rockbox 3.7.1 - http://www.rockbox.org`    
<br>
`volume: -10`    
`talk dir: spell`    
`talk file: spell`    
`lang: /.rockbox/langs/francais.lng`    
<br>

# Si je reprends les lignes données par Sof avec mon changement afin d'avoir la radio  de ma région le contenu du fichier config.cfg au premier lancement de Rockbox  une fois que vous avez mis le fichier francais.voice est le suivant:
<br>
`# .cfg file created by rockbox 3.15 - http://www.rockbox.org`    
<br>
`volume: -10`    
`talk dir: spell`    
`talk file: spell`    
`fmr: /.rockbox/fmpresets/Grenoble.fmr`    
`lang: /.rockbox/langs/francais.lng`    
<br>
Ce fichier `config.cfg` est disponible en téléchargement à partir du lien ci-dessous.

# Si je reprends les lignes données par Sof avec mon changement afin d'avoir la radio  de ma région le contenu du fichier config.cfg au premier lancement de Rockbox  une fois que vous avez mis le fichier english.voice est le suivant:
<br>
`# .cfg file created by rockbox 3.15 - http://www.rockbox.org`    
<br>
`volume: -10`    
`talk dir: spell`    
`talk file: spell`    
`fmr: /.rockbox/fmpresets/Grenoble.fmr`    
`lang: /.rockbox/langs/english.lng`    
<br>

# Si je reprends les lignes données par Sof avec mon changement afin d'avoir la radio  de ma région et en faisant d'autres changements le contenu du fichier config.cfg au premier lancement de Rockbox  une fois que vous avez mis le fichier english.voice est le suivant:
<br>
`# .cfg file created by rockbox 3.15 - http://www.rockbox.org`    
<br>
`volume: -10`    
`talk dir: spell`    
`talk file: spell`    
`talk filetype: on`    
`Announce Battery Level: on`    
`fmr: /.rockbox/fmpresets/Grenoble.fmr`    
`lang: /.rockbox/langs/english.lng`    
<br>

Les exemples ci-dessus dans les deux langues sont à titre purement informatif car le réglage du volume et le nom du fichier .fmr utilisé pour la radio peut être changer (y compris le nom du fichier de la langue et d'autres paramètres du lecteur) via l'interface de Rockbox par l'utilisateur.    
Pour configurer la voix qui va nous guider dans différents répertoires et fichiers consulter la section [LA VOIX EN ROCKBOX](#mark25).    
N'oubliez pas au préalable de consulter la section pour [l'Installation de la voix en français pour un Sansa Clip Plus.](#mark8) (y compris   celle pour l'installation de la voix en anglais).    

# Téléchargement et mise en route du fichier de configuration en français:

1.- Pour obtenir le fichier de configuration en français, vous devez télécharger le fichier nommé:    
[FichierConfigRockboxFRClipPlus.zip](https://blindhelp.github.io/rockboxfr/FichierConfigRockboxFRClipPlus.zip)    
2.- Une fois ddécompresser vous devez trouver le fichier nommé:    
`config.cfg`    
3.- Maintenant il nous Reste Copier le fichier nommé:    
`config.cfg`    
4.- Maintenant ce fichier vous le collez à la racine du .rockbox, est vous fermer l'explorateur de fichiers  par Alt+F4.    

C'est fini, débranchez l'appareil Sansa Clip Plus en toute sécurité, (n'essayez pas de l'éteindre par le bouton March/Arrêt du dessus = bouton Power).    
Cette étape est indispensable pour l'installation de Rockbox. Si le firmware n'est pas mis à jour, Rockbox ne pourra pas se lancer.    
Dès qu'il est débranché, la mise à jour commence : il s'affiche "Mise à jour du firmware" sur le lecteur pendant environ 10 secondes, puis il s'éteint tout seul.    
 Et quand on le rallume... tout est installé, Rockbox se lancera et le balladeur devrait parler en français! :-)    
 À moins que vous l'avez installé et configuré avec la langue en anglais.    
 Par défaut c'est maintenant toujours Rockbox qui se lancera au lieu du firmware Sansa Clip Plus. :-P    
Enjoy! 8-)     

[Retour au sommaire](#Sommaire)

# 10.- Description physique ddu Sansa Clip Plus.<a id="mark10"></a>

Voici un descriptif des touches, boutons et les prises etc.    

1.- Placez votre appareil enface a vous.    

2.- Dans la partie principal supérieur vous aurais l'écran.    
Il affiche les informations et le statut à l'écran, practique si vous avez encore des residue visuelles ou pour nos amis voyants!    

3.- Dans la partie principal inférieure se trouve un espèce  de grand carré, en milieu de celui-ci se trouve un espèce  de petit carré .    
Le premier nous l'appelons touche de navigation et le second touche de sélection.    

## Description de la touche de navigation.

Quand nous somme dans la touche de navigation :    
Un appui sur la touche du haut(play) sert pour la lecture et mettre en pause un morceaux ou de remontée d'un élément.    
Un appui sur la touche du Bas (sous-menu) sert pour ouvrir les sous-menu ou pour descendre d'un élément.    
Un appui sur la touche de gauche (left) sert pour revenir au morceaux précédent ou pour revenir en arrière ou se déplacer vers la gauche.    
Un appui sur la touche de droit (rigth) sert pour aller au morceaux suivant ou pour avancer ou se déplacer vers la droite.    

## Description de la touche de sélection (select).
La touche de sélection sert à sélectionner un élément.    

4.- Dans la partie principal centrale vers la droite se trouve un petit bouton.    
Se bouton est représenter par un dessin d'une maison (home).    
On va l'appler touche Accueil, celui-ci sert pour revenir au menu principal.    
Egalement  cette touche sert pour verrouiller ou déverrouiller notre lecteur, pour cela il suffit de maintenir cette touche enfoncée.    

5.- Le bouton de March/Arrêt(power) se trouve dans la tranche supérieur côté droite.    
Pour allumer ou éteindre notre lecteur il suffit de maintenir cette touche enfoncée.    

Note :    
Un apui sur la touche Marche/Arrêt  allume notre lecteur Sansa Clip Plus et démarre Rockbox.    
Un long appui sur la touche Marche/Arrêt etaint notre lecteur Sansa Clip Plus et rockbox enregistre la configuration.    
Un bref appui sur cette touche annulle une action et il revient au point d'avant.    

Dans se même endroit il y à une partie lisse ou se trouve aussi le microphone pour faire un enregistrement vocal, pour nous les aveugles il est a peine touchable avec le doigt .    

6.- Dans la tranche latéral côté gauche se trouve les éléments suivants:    
En haut le port pour le branchement du cable avec la prise Mini-USB qui se trouve à l'extrémité du cable puis dans l'autre extrémité du cable se trouve la prise USB 2.0 vers votre ordinateur.    
Si on se balade légèrement avec notre index vers le bas on retrouve les deux boutons pour le volume    
Ils sont séparé par une partie lisse.    
Il suffit de maintenir le bouton enfoncée.    
Le bouton du haut, sert pour augmenter le volume.    
Le bouton du bas, sert pour diminuer le volumm.    

7.- Dans la tranche latéral côté droit se trouve les suivants éléments:    
En haut la prisse pour branchez vos écouteurs.    
Si on se balade avec l'index vers le bas on trouve le compartiment pour placer une carte MicroSDHC    

Note : On peut ajouter des cartes  MicroSDHC jusqu'à 32 go.    
Sachant que les cartes 32GB se négocient entre 15 et 20€, ça fait beaucoup de place à pas cher!   

8.- Dans la partie arrière de notre lecteur nous avons un clip!    
Il suffit de tourner l'appareil vers l'autre sens c'est-à-dire l'écran vers le sol puis on trouve l'ouverture de celui-ci vers la partie inférieur et ons pousse le clip vers le haut.    
Practique pour accrocher notre lecteurs à nos vêtements, un sac, ou a la cinture!!!    
Pour écouter de la bonne sic ou une station de radio!!! c'est cool!!!    

[Retour au sommaire](#Sommaire)

# 11.- Recommandations utils!<a id="mark10"></a>

Pour arrêter votre Sansa Clip Plus, il faut maintenire la touche enfoncé  environ 2 secondes.   
Pour verrouillé  votre Sansa Clip Plus appuyer sur le bouton Accueil quelques secondes.    
N'oubliez pas que l'appareil doit être en fonctionnement pour faire cela!    
Le boutons du lecteur Sansa Clip Plus reste inopérants lorsque la fonction Verrouiller est active.    
Cependant vous pouvez écouter de la musique!    
Pour déverrouiller le lecteur, appuyez sur le bouton Accueil et il faut maintenire enfoncé quelques secondes.    

# Réinitialisation    
Si le lecteur Sansa Clip Plus se bloque pour quelque raison que ce soit, appuyez sur le bouton d'alimentation et le  maintenire  enfoncé pendant environ 15 secondes. Cela équivaut à une mise hors tension du lecteur. Toutefois, sachez qu'une  fois qu'après une réinitialisation, tous les réglages que vous avez effectués au cours de la dernière opération seront  perdus.    

# Précaution!     
Ne jamais aller sur réglages pendant la lecture d'un fichier de musique! il se peut que le lecteur se bloque!    

Quand on arrête notre lecteur Sansa Clip Plus on écoute: Arrêt en cour.    
Quand on l'allume on écoute le nom du dossier ou nous étions par exemple si on est entraint d'écoutez un morceaux  puis on etaint notre lecteur Sansa Clip Plus, et on l'allume plu tard il nous dira: music, donc sa veux dire que nous somme positioner sur se dossier.    

[Retour au sommaire](#Sommaire)

# 12.- COMMENT UTILISER  mon lecteur Sansa Clip Plus à l'aide de Rockbox?<a id="mark12"></a>

Note: N'oubliez pas que La batterie doit être complètement chargée avant la première utilisation du lecteur!, je pense que s'il est en 50% c'est bon pour installer le firmware Rockbox.    
P.S: La charge de la batterie prend environs trois heures.    

À savoir que l'interface en anglais est différente du français et cette première  ne sera pas traitée dans ce tutoriel.    
Mais je ne vais pas vous laisser lâcher tout de suite  dans la nature, car il existe une documentation très détaillée à télécharger ou à consulter en ligne pour le lecteur Sansa Clip Plus  dans la langue de Shakespeare.    
Faire Enregistrer la cible du lien sous... pour les deux premiers manuels (pdf et html-zip) pour le lire avec plus de confort.    
[pdf 1403 kB](https://download.rockbox.org/daily/manual/rockbox-sansaclipplus.pdf)    
[html-zip 599 kB](https://download.rockbox.org/daily/manual/rockbox-sansaclipplus-20200922-html.zip)    
Et voici ci-dessous ce même manuel en anglais consultable en ligne via Rockbox.org:    
[online](https://download.rockbox.org/daily/manual/rockbox-sansaclipplus/rockbox-build.html)    
Puis finalement voici ci-dessous la source de la page en anglais où j'ai fait la trouvaille, toujours via Rockbox.org:    
[Rockbox - Daily Built Manuals](https://www.rockbox.org/manual.shtml)    

Si vous avez mis le fichier francais.voice comme indiqué plus haut suivez ces instructions:    

1.- Allumez le lecteur Sansa Clip Plus, puis on trouve le menu principal de Rockbox.    
Dans ce menu, ont n'a les options suivantes :    
Dossiers et Fichiers ; (donne accès à la racine du lecteur).    
Base de données d'état ; (définit le mode de lecture).    
Reprende la lecture ; (reprend la lecture d'un morceaux mit en pause).    
Réglages ; (vous pouvez accéder à les différent réglages du lecteur).    
Enregistrement ; (démarre le processus d'enregistrement).    
Radio FM ; (donne l'accès à la radio FM).    
Catalogue de la Liste de lecture ; (affiche la liste de lecture actuelle c'est-à-dire les playlists).    
Modules d'extentions ; (on peut accéder à d'autres applications de Rockbox).    
Système ; ((donne accès à l'information du système).    

[Retour au sommaire](#Sommaire)

# 13.- FONCTIONS DES TOUCHES <a id="mark13"></a>

1.- Pour naviguer entre les différents menus des options du lecteur, vous devez utiliser la grande touche directionnel  en touche en forme de carré la quelle je l'appellerai  touche de navigation.    

2.- Pour rentrer dans l'un des menus du lecteur, vous devez appuyer sur la  touche en forme de petit carré afin de valider votre choix. Cette touche je l'appellerai touche de sélection, celui-ci se situe dans la touche de navigation.    

Une autre façon d'accéder à un sous-menu, c'est d'appuyez sur la flèche à droite de la touche de navigation.    
Pour quitter un sous-menu, c'est d'appuyez sur la flèche à gauche de la touche de navigation.    
Cette même procédure est également valide pour entrer ou sortir des dossiers et sous-dossiers.    

3.- En appuyant sur la flèche du haut de la touche de navigation, on va démarrer la  lecture depuis le point ou nous l'avons quitté, et ce, indépendamment de l'endroit où on se trouvent.    
Cette même flèche du haut sert aussi pour faire une pause pendant la lecture du morceaux en cours.    

4.- Au moment de sélectionner un nouveau fichier afin d'être lù, la touche de lecture ou Pause, il n'est pas valide lorsque  on appui sur elle;  il va reprendre  ce qui avez au paravant.    
Pour cela on doit aller avec la touche de navigation et la touche de sélection jusqu'à le fichier approprié, et avec la même touche de sélection validez la lecture du fichier préalablement sélectionné.    

5.- Pour retourner au menu principal de n'importe quelle position, simplement appuyez sur la petite touche qui est situer entre l'écran et le grand carré c'est-à-dire la touche de navigation vers le côté droit ; cette touche je l'appellerai  touche Accueil.    
Selon l'endroit où on se trouvent, le lecteur sera positionné.    
Par exemple, si nous somme dans réglages son, une fois appuyer sur cette touche vous serez dans le menu principal de l'option de réglages. Mais si vous êtes à l'intérieur du dossier music entraint de parcourir le contenu de ce dossier, en appuyant sur la même touche, ils sera situés dans le menu principal de l'option de Dossiers et Fichier.    
Cette même touche, si elle est enfoncée alors que nous sommes à l'écoute d'un fichier, il va être situés  dans le menu principale dans une option appelée Lecture en cour.    
Si on maintien la touche de sélection  sur Lecture en cour on peut acceder aussi a les option tel que:    
Aléatoire, Répéter, etc, etc...    

6.- Pour faire un enregistrement vocal, il suffit d'appuyer sur l'option du menu principal nommé:    
Enregistrement ;a l'aide de la touche de sélection.    
Pour commencer l'enregistrement plus précisément, on doit appuyez sur la touche de sélection.    
Puis l'enregistrement démarre.    

Pour mettre en pause l'enregistrement appuyer à nouveau sur la touche de sélection.    
Pour reprendre l'enregistrement appuyez à nouveau sur cette même touche.    
Il me semble sauf erreur de ma part qu'il va créer  un nouveau fichier wav aprè d'enlever la pause.    
Pour les fichiers MP3 c'est un fichier unique.    

Pour sortire de la fenêtre d'enregistrement il faut appuyer deux fois rapidement sur le bouton marche/arrêt.    

Tout les fichiers enregistrées son sauvegardez dans la racine du dossier nommé:    
Dossiers et fichiers depuis le lecteur Sansa Clip Plus.    
Par défaut il est enregistrer comme fichier .wav    
Nous pouvons changer cela, pour se faire :    

1.- Aller sur enregistrement.    
2.- Pour ouvrir les options d'enregistrement, il suffit de faire un appui long sur la touche de  sélection.    
3.- Nous trouvons les suivantes options :    
Format ; il contient  les types de fichiers suporter par notre lecteur, par exemple .mp3.    
Réglage de l'encodeur ; il contient Echantillonage , si nous avons choisi le format .mp3, une fois ouvert celui-ci nous avons plusieurs valeurs, par exemple 128 kilobits par seconde.    
Fréquences ; ici nous avons les fréquences par exemple : 44 kilo hertz.    
Sources ; ici nous avons la source pour l'enregistrement, par exemple     
Micro intégrée, pour un enregistrement vocale, puis     
Radio FM, pour un enregistrement radial.    
Canaux ; ici nous avons deux choix, Stéréo et mono.    
Mode mono ; ici nous pouvons choisire le type de mono souhaitez.    
Options de coupure des fichiers ; ici nous pouvons choisire le type decoupure pour le fichier enregistrer.    
Temp de préenregistrement ;  ici nous allons choisire le temp de préenregistrement par Non, ou lui donner une valeur.    
Restorer le dossier d'enregistrement initial, il va mettre le dossier des enregistrements par défaut.    
Rétro éclairage synchroniser.    
Déclencheur.    
Indicateur de niveaux des piques.    
Charger un fichier de configuration.    
Sauvegarder configuration actuel.    

Note :    
Pour les réglages appuyer sur les flêches bas, haut puis sélection.    
Pour ajuster la sélection des réglages appuyer sur les flêches de gauche ou de droite.    
Pour annuller une action appuyer légèrement une fois la touche March/Arrêt.    

Quand vous connectez votre Sansa Clip Plus a l'ordinateur vous ouvrez le lecteur:    
SANSA CLIPP Suivi de sa lettre correspondante.    
Et a la racine de celui-ci vous retrouver votre fichier enregistré, par exemple il apparait avec le nom:    
`R_MIC_121201-205240.wav`    
Ou avec l'extention .mp3 si vous avez changer le format d'enregistrement au préalable :    
`R_MIC_120110-213052.mp3`    

Note au début du fichier nous trouvons l'abréviation nommé R_MIC, celui-ci correspond  a un enregistrement vocal.    
Par contre l'abreviation attribuer à un enregistrement d'une Radio FM est nommé : R_FM.    

Vous pouvez renommé le nom du fichier par F2 depuis l'explorateur de fichiers si votre enregistrement vous convient, ou vous pouvez le supprimer du lecteur.    

Note :    
Démarrer à partir du firmware original    
Rockbox a une fonctionnalité nommé dual-boot. Pour démarrer le firmware original, appuyez et maintener le bouton gauche tout en allumant le lecteur.    
Le lecteur fera toujours démarrer le firmware original si elle est alimentée par une connexion USB et en outre si l'USB est inséré pendant l'exécution de rockbox sans maintenir le bouton Select. Cette fonctionnalité peut être retirée à l'avenir lorsque Rockbox est capable de gérer les transferts USB en mode natif.    

[Retour au sommaire](#Sommaire)

# 14.- GESTION DES FICHIERS ET DES DOSSIERS<a id="mark14"></a>

Dans le lecteur, de la même façon que dans un PC on na la possibilité de Rénommé, Copier, coller, couper, supprimer, etc., tout fichier ou dossier.    
Cela peut se faire en maintenant enfoncée la touche de sélection pendant une seconde.    
De cette façon plutôt que d'entrer dans le dossier sur le quelle nous somme positionnés, ou de commencer la lecture du fichier audio comme il convient, il va nous apparaître un menu avec les suivantes options selon l'endroit ou nous somme:    
Par exemple si on ouvre l'option du menu Dossiers et Fichiers, puis si nous allons sur un fichier enregistrer en .wav et on maintien la touche de sélection appuyer 2 secondes par exemple, nous avons les suivantes options:    
Liste de lecture ; il contient l'élément insérer.    
Catalogue de liste de lecture ; il contient afficher le catalogue,    
Ajouter à la liste de lecture et     
Ajouter à une nouvelle liste.    

Rénommé, on peut le renomé par l'intermédiaire du clavier virtuel.    
Couper, il va marquer l'élément en cour pour être déplacer par la suite dans un autre endroit.    
Copier, il va marquer l'élément pour être copier par la suite dans un autre endroit.    

Dans le cas que nous avons choisi Coupper ou copier il apparaît l'optionColler afin de coller l'élément dans un autre endroit.    

Effacer, il efface l'élément en cour.    
Confirmation a la question Effacer?    
par la touche Sélection.    
Ouvrir avec, il donne la possibilité d'ouvrir le fichier avec une quel qonc application, mais pour moi il ne s'affiche pas aucune liste.    
Donc, impossible de le faire.    
Créer un répertoire, il va créer un nouveau dossier dans la structure du lecteur.    
Propriété, il nous donne les détails de l'élément.    
Mais impossible de lire cette information avec Rockbox.    
Ajouter un raccourci.    

En tout cas je n'est pas tout tester lol de lol!!!    

Biensur pour moi c'est plus simple de passer par l'explorateur de Windows!! Pour renommé un fichier enregistrer!!!  lol de lol!    

[Retour au sommaire](#Sommaire)

# 15.- COMMENT ÉCOUTER DE LA  RADIO FM ?<a id="mark15"></a>

Notre lecteur Sansa Clip Plus possède une radio FM intégrée pour écouter des émissions de radio en direct.    
Pour se faire il faut aller a l'option Radio FM, qui se trouve dans le menu principal, puis valider avec la touche de sélection.    
Nous allons écouter une espèce de grésillement puis l'annonce :    
`Aucunne présélection trouver ? recherche auto ?`    
Soit on fait la touche de sélection, pour trouver la  présélection ou la recherche auto.    
On peut enregistrer les changements par la touche de sélection.    
On peut rechercher une radio manuelment, pour se faire...    
Appuyer briefment sur la flèche gauches ou droite de la touche de navigation pour retrouver les fréquence FM  souhaitée dans votre région.    
Vous pouvez également  maintenir les touches gauche/droit appuyer pour une recherche rapide des station présélectioner.    
Vous pouvez mettre en pause (mute) la lecture de la radio en cour en appuyant sur la touche du  haut de la touche de navigation, ou appuyer à nouveau pour reprendre l'écoute de la radio FM.    
Un long appui sur celui-ci stope la Radio et nous renvoi au menu principal.    
La touche Accueil (home)    
Il fait la bascule entre le mode recherche automatique et station.    
La touche sélection  ouvre la liste des radio présélectionner que vous avez, toute les radio serons afficher sur une liste, vous pouvez basculer  entre les station.    
Si on fait un appui long avec la touche de sélection sur Radio FM ou vous faites simplement un appui sur la flèche bas vous trouvez quelques options rélatif à celui-ci.    
Ajouter station.   
Charger liste de station.    
Sauvegarder liste de station.    
Réinitialiser la liste de station.    
Forcer mono.    
Région.    
Réglages son.    
Enregistrement.    
Option d'enregisstrement.    
Recherche automatique des station.    

Pour augmenter le volume le bouton du haut.    
Pour diminuer le volume le bouton du bas.    
Pour quitter totalement la fenêtre de la Radio FM pendant l'écoute d'une Radio, appuyer deux fois sur le bouton Marche/Arrêt.    

Vos radio présélectioner son sauvegarder dans un fichier avec l'extention .fmr.    
Par exemple :    
`preset01.fmr`    
Il se trouve dans le chemin suivant :    
`/.rockbox/fmpresets`    

[Retour au sommaire](#Sommaire)

# 16.- Comment enregistrer une emission de Radio?<a id="mark16"></a>

Vous pouvez enregistrer une émission de Radio avec Radio FM pendant l'écoute de celui-ci.    

C'est la même procèdure décrit ci-dessus que pour un enregistrement vocal.    
La bascule de la source sa se fait automatiquement.    
Vous trouvez le fichier enregistrer à la racine  du lecteur Sansa Clip Plus depuis l'explorateur des fichiers, ou depuis le lecteur Sansa Clip Plus a la racine de l'option Dossiers et Fichiers.    
N'oubliez pas que l'abreviation du début du fichier sera nommé par : R_FM.    
Exemple :    
`R_FM_120113-202121.mp3`    

[Retour au sommaire](#Sommaire)

# 17.- Programmation des présélections des vos Radio FM<a id="mark17"></a>

Vous pouvez Enregistrer une présélection jusqu'à 64 de vos stations de radio FM favorites les quelles peuve être enregistré comme présélections.    
Flêche bas pour ouvrire le sous-menu pour aller au menu, puis sélectionnez:    
Ajouter station.    
Entrez le nom de la station de Radio FM (nombre maximal de caractères est de 32).    
Un appui long à l'aide de la touche de Sélection pour enregistrer.    

Il se trouve dans le chemin suivant :    
`/.rockbox/fmpresets`    

Note : Voir plus bas la manière d'utiliser le clavier virtuel avec Rockbox.    

Si vous souhaitez ajouter des stations de Radio française a votre lecteur qui intègre une Radio FM compatible avec les fichiers *.FMR, voici le fichier idéal contenant plusieurs fichiers *.fmr pour vous!    
pour chaque ville où vous soyez!!!    
Sa ne vient pas de moi! mes Je vous donne ci-dessous le lien de téléchargement de tous les fichiers fmr français soumis avant le 8 mai 2006 pour la France via le site Rockbox.org afin que les utilisateurs puissent les utiliser si elles viennent à votre ville / région et que vous souhaitez écouter la radio sans avoir à rechercher des stations. lol de lol!!!   

À savoir que les entrées dans les fichiers fmr sont constitués d'une fréquence en Hz, un: séparateur, puis le nom de la station.    

# Par régions

Pour les régions de l'Amérique (Nord et Amérique du Sud) vous pouvez consulter [cette page (en anglais)](https://www.rockbox.org/wiki/Main/FmPresetsAmerica) et trouver puis télécharger les fichiers fmr correspondant à la région désirée, toujours via le site Rockbox.org.    
Pour les régions Asiatiques vous pouvez consulter [cette page (en anglais)](https://www.rockbox.org/wiki/Main/FmPresetsAsia) et trouver puis télécharger les fichiers fmr correspondant à la région désirée, toujours via le site Rockbox.org.    
Pour les régions Européennes vous pouvez consulter [cette page (en anglais)](https://www.rockbox.org/wiki/FmPresetsEurope) et trouver puis télécharger les fichiers fmr correspondant à la région désirée, toujours via le site Rockbox.org.    
Pour les régions Océaniennes vous pouvez consulter [cette page (en anglais)](https://www.rockbox.org/wiki/Main/FmPresetsOceania) et trouver puis télécharger les fichiers fmr correspondant à la région désirée, toujours via le site Rockbox.org.    
Pour les régions des Caraïbes vous pouvez consulter [cette page (en anglais)](https://www.rockbox.org/wiki/Main/FmPresetsCaribbean) et trouver puis télécharger les fichiers fmr correspondant à la région désirée, toujours via le site Rockbox.org.    

# Paquet Presets FM

[fmr-complete.zip](http://www.rockbox.org/twiki/bin/viewfile/Main/FmPresets?rev=2;filename=fmr-complete_071111.zip)    
Le paquet global contenant des fichiers fmr (dernière mise à jour le 11 novembre 2007).    

Remarque: Le paquet global contenant des fichiers fmr qui est dans le dossier fmr-complete_060717//fmr-europe_060508/fmr-france_060508 comporte  le même contenu et la même date du fichier [fmr-france.zip](https://www.rockbox.org/wiki/pub/Main/FmPresetsEurope/fmr-france.zip)    
(dernière mise à jour le 8 mai 2006).    

# Convertisseurs prédéfinis

Ce sont des scripts de conversion pour convertir les fichiers FM prédéfinies entre les formats pour les différents programmes, les lecteurs et les firmwares.

Note: Ne me demandez pas comment cela fonctionne, je donne seulement l'information pour les programmeurs qui veulent connaître plus à propos de ça.    
Faire `"Enregistrer la cible du lien sous..."` sur chaque lien car ils sont des fichiers texte (*.txt).    

[meizu2rockbox.txt - Meizu-To-Rockbox script by pabouk](https://www.rockbox.org/wiki/pub/Main/FmPresets/meizu2rockbox.txt)    

[rockbox2meizu.txt - Rockbox-To-Meizu script by pabouk](https://www.rockbox.org/wiki/pub/Main/FmPresets/rockbox2meizu.txt)    

Voici la page (en anglais): [FM Presets](https://www.rockbox.org/wiki/FmPresets) via Rockbox.org où j'ai fait la trouvaille:    

Dans le cas présent, si vous avez téléchargé le fichier nommé:    
[fmr-france.zip](https://www.rockbox.org/wiki/pub/Main/FmPresetsEurope/fmr-france.zip)    
(dernière mise à jour le 8 mai 2006).    
Une fois désiper vous trouver un dossier nommé :    
`fmr-france_060508`    
le quelle inclus  60 fichiers sous forme .fmr    
Biensure nous allons retrouver le nom de notre ville par exemple dans mon cas c'est :    
`Grenoble.fmr`    
Le contenu du fichier Grenoble.fmr comporte les radio FM d'écoute national et radio FM local de la ville de Grenoble.    

Donc, pour le faire reconnaître par mon lecteur Sansa Clip Plus utilisant Rockbox par exemple, j'ai fait comme sui :    
Branchez le lecteur Sansa Clip Plus au PC.    
Ouvrir le dossier .rockbox    
Auparavant à la racine du dossier .rockbox je crée le dossier nommé:    
`fmpresets`    
Note: seulement faire ceci dans le cas où  le dossier est pas présent.    
Puis collez votre fichier .fmr de votre vile par exemple.    
Ensuite, j'ai ajoutée la ligne pour avoir les radios de ma région en fm avec le Sansa Clip Plus (si disponibles), pour cela j'ai ouvert le fichier nommé:    
`config.cfg`    
avec Notepad. Vous pouvez également l'ouvrir avec un autre éditeur de texte.    
Ensuite j'ai ajouté la ligne:    
`fmr: /.rockbox/fmpresets/Grenoble.fmr`    
Et enregistré les modifications avec Ctrl+S, puis fermé le fichier par Alt+F4.    
J'ai donné mon exemple de la région utilisée, mais vous pouvez évidemment changer pour la vôtre.    
Changer à la fin de la ligne le nom de la région:    
`Grenoble.fmr`    
par:    
`Paris.fmr`    
Si vous vivez à Paris par exemple.    
ou rechercher votre propre région qui se trouve dans le dossier nommé:    
`fmr-france_060508`    
le quelle inclus  60 fichiers sous forme .fmr    
Une fois désiper le fichier nommé:
[fmr-france.zip](https://www.rockbox.org/wiki/pub/Main/FmPresetsEurope/fmr-france.zip)    
Débranchez votre Lecteur Sansa Clip Plus du PC.    
Aller sur Radio FM    
Faire flèche bas puis chercher «charger liste de stations »  et appuyer sur la touche Select.    
Le nom de la liste des radio chargé s'affiche :    
Appuyer sur Select.    
Maintenant vous pouvez vous déplacez de radio en radio  à l'aide des flèches gauche ou droit.    

Vous pouvez  sauvegarder la liste des stations présélectionées.    

# Astuce :
Faire une copie du fichier d'avant dans le même endroit puis le renommé par :    
`preset01.fmr`
ou le faire depuis l'option Radio FM du lecteurSansa Clip Plus, pour cela appuyer sur la flèche bas puis retrouver Sauvegarder liste de station, puis appuyer sur Select.    
Il contient les mêmes stations radio que sur l'autre fichier!    
En tout cas certaines Radio FM national et Local de Grenoble sa fonctionne!!!    

# Astuce :
Pour changer de radio si vous utiliser le fichier avec les noms de radio, appuyer sur la toucheSelect, le nom de la Radio est épeler.    
Utiliser les flèches haut ou droit, a chaque déplacement le nom de la radio est épeler.    
Une fois trouvez la radio que on souhaite écoutez, appuyer sur Select.    
Si vous souhaitez changer de radio, il faut renouveler la même opération a chaque fois.    

J'ignore si sa va fonctionner mais on peut ajouter plusieurs fichiers déjà présélectionner par exemple si vous voyager à Paris, Dijon, Toulouse etc, etc...    
Il sufit d'ajouter celui-ci a votre lecteur Sansa Clip Plus puis charger la nouvelle liste des stations ensuite Vous pouvez  sauvegarder celui-ci, il va à créer un nouveau fichier comme nom :    
`preset02.fmr`    

Voilà!    

Maintenant on peut sélectionner une présélection!!!    

[Retour au sommaire](#Sommaire)

# 18.- Sélectionner une présélection<a id="mark18"></a>

Appuyer sur la touche de Sélection pour aller à la liste des présélections.    
Utilisez les boutons du Volume Haut  et Volume bas pour déplacer le curseur, puis appuyez sur la touche de Sélection ou la flêche droite pour choisir.    
Utilisez la flêche gauche pour quitter la liste des présélections sans sélectionner quoi que ce soit.    

# Suppression d'une présélection:
Appuyer sur la touche de Sélection pour aller à la liste des présélections    
 Utiliser les bboutons du Volume haut et Volume bas pour déplacer le curseur puis fair un appui long sur la touche de sélection sur la présélection que vous souhaitez supprimer, puis  sélectionnez Supprimer la présélection.    

Note : La radio  FM sera désactiver lors du démarrage de la  lecture d'un fichier audio.    

[Retour au sommaire](#Sommaire)

# 19.- Comment utiliser le clavier virtuel?<a id="mark19"></a>

C'est le clavier virtuel qui est utilisé lorsque vous entrer du texte dans Rockbox, par  exemple lorsque vous renommer un fichier ou créez un nouveau répertoire. Le clavier virtuel peut être facilement changé en faisant un fichier texte avec la configuration requise.    

Remarque : Lorsque le curseur se trouve sur la ligne d'entrée, la touche de sélection  supprime le caractère précédent    

A chaque ajout de lettre le mot est épeler.    

Exemple de la grille du haut en bas et de droite à gauche.    
`a, b, c, d, e, f, g, vide`    
`h, i, j, k, l, m, n, vide, 7, 8, 9, vide`    
`o, p, q, r, s, t, u, vide, 4, 5, 6, vide`    
`w, x, ygreck, z, point,  0, 1, 2, 3, vide`    
les flêches Gauche ou  droite, va déplacez le curseur sur le clavier virtuel.    
Si vous vous déplacez hors de la zone du sélecteur, vous obtenez la page précédente/suivante  des caractères (s'il y a plus d'un).    
Les flêches haut  / bas va déplacer le curseur sur le clavier virtuel.    
Si vous déplacez hors de la zone du sélecteur, vous obtenez la ligne en mode d'édition.    
Retourner à la page suivante de caractères (s'il y a plus d'un).    
La touche de Sélection va insérer la lettre sélectionnée au clavier  sur la position du  curseur dans l'actuelle ligne.    

Sauf erreur de ma part le vide  c'est l'espace.    

Pour voir les lettres écrite sur la ligne il sufit de se déplacer à l'aide des bboutons du Volume haut et Volume bas pour déplacer le curseur dans l'actuelle ligne.    

Un long appui sur la touche de Sélection on va sortire  du clavier virtuel et enregistrer  toutes les modifications.    
 Le bouton March/Arrêt va nous faire sortire du clavier virtuel sans enregistrer les  modifications.    

[Retour au sommaire](#Sommaire)

# 20.- Mettre de la musique sur votre lecteur Sansa Clip Plus<a id="mark20"></a>

Avec le lecteur Sansa Clip Plus connecté à l'ordinateur comme un Disque amovible MSC/UMS (comme un lecteur USB), les fichiers  de musique peuvent être mis sur le lecteur par l'intermédiaire de toute méthode de transfert de fichier standard que vous  utiliseriez pour copier des fichiers entre lecteurs (p. ex. Drag-and-Drop). Les fichiers peuvent être placées partout où vous  le souhaitez sur le lecteur, mais il est fortement suggéré de ne pas les placer dans le dossier /.rockbox.    
 Par défaut La structure des répertoires par certaines parties de Rockbox (balise manquant de secours dans certains WPS)  qui  est supposée utiliser le répertoire parent d'une chanson comme le nom de l'Album et le répertoire parent de ce dossier au nom  de l'artiste. WPS (While Playing Screen) peut afficher les informations de manière incorrecte si vos fichiers ne sont pas correctement étiquetés et que vous avez votre musique organisé de manière différente de celle assumée par eux lorsqe ils tente de deviner les noms de l'artiste et l'Album de votre arborescence de fichiers.    

[Retour au sommaire](#Sommaire)

# 21.- AJOUT D'UN DOSSIER contenant de la MUSIQUE<a id="mark21"></a>

Notre lecteur Sansas Clip Plus, peut lire des fichiers contenant de la musique    
Pour cela il suffit d'avoir au préalable créer un dossier dans le quelle inclus des fichiers de musique en format MP3.    
Pour placer tout dossiers contenant de la musique par exemple, il faut branchez le lecteur au PC, puis ouvrir celui-ci, puis coller votre dossier à la racine de celui-ci!!!    
Vous pouvez aussi placer le nouveau dossier dans le dossier nommé MUSIC qui se trouve à la racine du lecteur, en tout cas quand on navigue depuis le lecteur Sansa Clip Plus apparaît dans le dossier MUSIC!!.    
Aller sur Dossiers et fichiers a l'aide de la touche de Sélection    
Puis vous trouvez le dossier MUSIC. Valider avec la touche de Sélection.    
Dans se dossier a l'aide des touches haut ou bas vous trouver vos dossiers réçament ajouter par vos soins.    
On peut fair de mmême si nous avons des Podcasts, livres parler, etc etc.    
 
Par contre si vous placer le dossier qui contient les fichiers audio à la racine du lecteur Sansa Clip Plus  Vous les retrouverais en allons sur Dossiers et Fichiers    
Ici vous retrouverai votre dossier de musique réçament  mit.    

Bienssûre  si vous le souhaitez, vous pouvez placez le dossier contenant vos fichiers MP3 aussi dans le dossier MUSIC!!!    

[Retour au sommaire](#Sommaire)

# 22.- Créer et transférer des listes de lecture M3U sur mon lecteur Sansa Clip Plus<a id="mark22"></a>

Voici une fonction qui peut nous servir afin de jouer nos pistes qui se trouve dans un dossier placez dans le dossier MUSIC, par exemple, suivez le guide!    

# Comment créer et transférer une liste de lecture M3U sur mon Sansa?

Etape 1 - Glissez et déposez la musique de l'ordinateur dans le dossier MUSIQUE du lecteur Sansa Clip Plus.    

Etape 2 - Créer une liste de lecture M3U    

1.- Créez un nouveau document texte.    
2.- Renommez le document texte pour qu'il ait l'extension m3u (exemple: Musique.m3u), ou le nom du dossier qui contient votre musique.    
3.- Ouvrez le fichier m3u avec Notepad ou un autre éditeur de texte.    
4.- Ecrivez sur la première ligne `#EXTM3U`     
Puis ajoutez quelques espaces libres.    
5.- Commencez à énumérer vos fichiers de musique(avec extension), séparés entre eux par une nouvelle ligne.    
6.- Fermez l'éditeur de texte et enregistrez le fichier m3u avant de sortir.    

Remarque  Importante:    
Le chemin du dossier ajouter doit être différent, si nous l'avons placez à la racine du lecteur Sansa Clip Plus.    
Exemple :    
le nom du dossier qui contient vos pistes en forme mp3+ le nom de la piste avec l'extention .mp3.    

[Retour au sommaire](#Sommaire)

# 23.- Comment écoutez une playlist avec mon Sansa Clip Plus?<a id="mark23"></a>

1.- Au préalable il faut créer un fichier comme extention .m3u.    
Vous vous pouvez aussi utiliser l'editeur Notepad++ par exemple.    
Voici un aperçu du fichier .m3u  Celui-ci contient le chemin de votre piste:    
Exemple:    
Dossier MUSIC + le nom du dossier qui contient vos pistes en forme mp3+ le nom de la piste avec l'extention .mp3.    

`#EXTM3U`     
Puis ajoutez quelques espaces libr

`MUSIC\Scott McKenzie - San Francisco Very Best Of-2002\01 - San Francisco.mp3`    
`MUSIC\Scott McKenzie - San Francisco Very Best Of-2002\02 etc...`    
`MUSIC\Scott McKenzie - San Francisco Very Best Of-2002\03 etc...`    
etc, etc...    
la ligne final est:    
`MUSIC\Scott McKenzie - San Francisco Very Best Of-2002\11 - What's The Difference (Chapter 1).mp3`    

Note :    
S'il s'agit d'un dossier placer a la racine de votre lecteur Sansa Clip Plus, le chemin sera :    
`#EXTM3U`    

`Lady Jazz\01-Norah Jones - Don't know why.mp3`    
Etc, etc...    

N'oubliez pas de fermez l'éditeur de texte et enregistrez le fichier m3u avant de sortir.    

2.- Pour jouer votre playlist celui-ci doit être placer dans le dossier PLAYLIST de votre lecteur Sansa Clip Plus.    
3.- Ouvrez l'élément nommé Catalogue de la liste de lecture en anglais (Playlists) qui se trouve sur votre lecteur Sansa Clip Plus a l'aide de la touche Select.    
4.- Avec les flêche haut ou bas sélectionnez le nom de votre Playlist  avec l'extention .m3u, puis appuyer sur la touche Select.    
5.- Attendez qu'elle  soit charger.    
6.- Appuyer sur la première piste avec la touche Select.    
7.- La piste joue.    
8.- Si vous voulez changer de piste, appuyer sur la flèche du bas, pour afficher les pistes, puis monter ou décendre avec les flèches du haut ou bas, puis appuyer sur la touche Select pour écoutez la piste souhaitez.    
9.- Pour quitter la lecture de votre playlist appuyer deux fois rapidement sur le bouton Power (Marche/Arrêt).    

[Retour au sommaire](#Sommaire)

# 24.- La carte MicroSDHC<a id="mark24"></a>

On peut insérer une carte MicroSDHC dans notre lecteur Sansa Clip Plus.    

Le contenu est afficher dans un dossier nommé :    
Micro sd1, celui-ci se trouve dans Dossiers et Fichiers, c'est le premier élément.    
Pour savoir la capacité  de celui-ci il faut aller sur :     
Système puis Infos Rockbox    
Une fois rentrée la on cherche a l'aide de la flèche bas l'info nommé :    
Micro sd ; espace disque livre ; contient le nombre en giga octet ; disque contient le nombre en giga octet de l'espace ocupée.    

Note : On peut ajouter des cartes  MicroSDHC jusqu'à 32 go!.    

On place la Carte MicroSDHC, dans la fente qui se trouve a l'autre extrême où  est situé la prise casque.    

Il faut faire beaucoup d'attention c'est très fragile!    
Placer la partie de la carte MicroSDHC  qui est en forme d'encoche vers la gauche, vous vous retrouvez avec l'autre partie légèrement haute, donc, la carte est en position horizontale.    

Votre lecteur doit être dans sa position habituelle lorsque vous l'utiliser.    

Placez la Carte MicroSDHC, dans la fente avec beaucoup de soin,il ne faut pas la poussée trop fort.    
S'aider avec l'index et le pouce.    
Une fois que cellci est rentrée, on va entendre un petit cliquetis.    

Pour retirer la Carte MicroSDHC, si nécessaire,     
Appuyer avec l'ongle du pouce sur la bordure  de la carte MicroSDHC  située dans la fente avec beaucoup de soin    
S'aider avec l'index et le pouce pour retirer celci.    

Lorsque  votre lecteur Sansa Clip Plus est connectez au PC, vous trouver un autre  Disque amovible suivi d'une lettre.    

C'est ici où son  stocker vos morceaux de musique par exemple.    
Vous pouvez mettre un dossier contenant vos fichiers mp3 a la racine de celui-ci, ou dans le dossier MUSIC.    

Le dossier MUSIC est située a la racine du Disque amovible.    
Celui-ci contient deux dossier:    
`AUDIOBOOKS`    
et    
PODCASTS.    
Les deux son vides!    

A la racine aussi il y a le dossier nommé :    
`LIFEBOLG`    
Il contient un dossier nommé TEMP.    
Mais le dossier LIFEBOLG est visible si On accède par l'élément Dossiers et Fichiers ;et  le dossier Micro sd1.    

[Retour au sommaire](#Sommaire)

# 25.- LA VOIX EN ROCKBOX<a id="mark25"></a>

À savoir que l'interface en anglais est différente du français et cette première  ne sera pas traitée dans ce tutoriel.    
Mais je ne vais pas vous laisser lâcher tout de suite  dans la nature, car il existe une documentation très détaillée à télécharger ou à consulter en ligne pour le lecteur Sansa Clip Plus  dans la langue de Shakespeare.    
Faire Enregistrer la cible du lien sous... pour les deux premiers manuels (pdf et html-zip) pour le lire avec plus de confort.    
[pdf 1403 kB](https://download.rockbox.org/daily/manual/rockbox-sansaclipplus.pdf)    
[html-zip 599 kB](https://download.rockbox.org/daily/manual/rockbox-sansaclipplus-20200922-html.zip)    
Et voici ci-dessous ce même manuel en anglais consultable en ligne via Rockbox.org:    
[online](https://download.rockbox.org/daily/manual/rockbox-sansaclipplus/rockbox-build.html)    
Puis finalement voici ci-dessous la source de la page en anglais où j'ai fait la trouvaille, toujours via Rockbox.org:    
[Rockbox - Daily Built Manuals](https://www.rockbox.org/manual.shtml)    

Si vous avez mis le fichier francais.voice comme indiqué plus haut suivez ces instructions:    
Pour configurer la voix qui va nous guider dans différents répertoires et fichiers, ainsi que dans les menus, il faut aller sur Réglages, puis a l'aide de la touche de navigation il faut chercher puis valider avec la touche de sélection l'option Réglages généraux, puis à nouveau avec la touche de navigation chercher puis valider avec la touche de sélection l'option Interface vocal.    
Chercher les options des menus à l'aide de la touche de navigation.    
Pour valider le choix il faut appuyer sur la touche de sélection sur l'option souhaitez.    
On peut aussi accéder  avec la touches gauche pour annuler le choix ou droite pour valider le choix.    
Ici nous avons les suivantes options:    
Prononcer les menus.    
Il y à les options Oui ou Non.    
Prononcer les répertoires.    
Il y à les options Oui ou Non.   
Utiliser les clips du dossier Talk     
Il y à les options Oui ou Non.    
Prononcer les noms de fichiers.    
Ily à les options épeler, non ou Nombre.    
Utiliser les clips du fichier Talk    
Il y à les options Oui ou Non.    
Prononcer le type de fichier.    
Il y à les options Oui ou Non.    
Prononcer le niveau de la batterie.    
Il y à les options Oui ou Non.    

Les fichiers avec l'extention .talk que la voix nous va lire il doive être créer au préalable par l'utilisateur, car notre lecteur ne dispose pas un moteur de voix installer!!!    
Donc, si nous voulons que un déterminé dossier soit plutot verbaliser comme un mot que épeler, il faut que les fichiers .talk soit générer depuis le PC.    
Tout cela sa ce fait grace a l'utilitaire nommé:    
Rockbox utility, le même utiliser pour installer notre firmware Rockbox pour notre lecteur Sansa Clip Plus!.    

L'utilitaire  génère  un fichier nommé:    
_dirname.talk.    
Celui-ci va faire en sorte que notre dossier soi lù correctement.    
Il ne doit pas être supprimer!!!    
Aussi on peut générer  des fichiers .Talk pour nos fichiers.     
L'utilitaire Rockbox utility va générer un fichier nommé par exemple:    
`coco.mp3.talk`    
qui va être dans le dossier ou se trouve le fichier nommé par exemple:    
`coco.mp3`    
Remarque: Le fichier .talk il ne doit pas être supprimer!    
Dans le cas contraire le fichier coco.mp3 va être à nouveau épeler!!!    
N'oubliez pas que pour créer les voix, il faut avoir installer des voix sapi5 sur votre PC afin que l'utilitaire Rockbox utility fonctione correctement!!     

Ce document en anglais via Rockbox.org couvre les différentes capacités annoncés ci-dessus   pour l'option Interface vocal, vous pouvez le consulter en cliquant sur le lien ci-dessous:    
[VoiceHowto](https://www.rockbox.org/wiki/VoiceHowto)    
Une fois ouverte la page voir la section "Voiced names for directories and files" laquelle  je trouve qu'elle est pertinente et je pense que cela peut vous aider   pour une meilleure configuration phonétique des noms des répertoires et fichiers dans l'option Interface vocal.    

[Retour au sommaire](#Sommaire)

# 26.- Mise à jour du firmware Rockbox sur notre Sansa Clip Plus<a id="mark26"></a>

Pour mettre à jour le firmware Rockbox, il suffit d'utiliser Rockbox Utility comme pour la première installation mais en cochant la case Rockbox seulement cette fois. En effet, l'installation du bootloader n'est nécessaire que pour la première installation, pas pour les mises à jour du firmware Rockbox.    

[Retour au sommaire](#Sommaire)

# 27.- Désinstallation du firmware Rockbox sur notre Sansa Clip Plus<a id="mark27"></a>

Je doute que quelqu'un souhaite le faire, :-(    
mais si vraiment vous y tenez, il suffit alors de réinstaller le firmware Sansa Clip Plus d'origine que vous avez téléchargé en mettant le fichier *.bin à la racine de votre Sansa Clip Plus puis en le laissant mettre à jour le firmware lors de la déconnexion de l'appareil. Ce fichier *.bin n'ayant pas été patché par Rockbox Utility, il ne contient donc plus le bootloader Rockbox. Ensuite et enfin, supprimez tout simplement le dossier .rockbox à la racine de votre baladeur Sansa Clip Plus.    

[Retour au sommaire](#Sommaire)

# 28.- Documentation annexe pour le lecteur Sansa Clip Plus<a id="mark28"></a>

Télécharger le fichier en .PDF
[clipplus-fr-um.pdf](http://downloads.sandisk.com/downloads/um/clipplus/clipplus-fr-um.pdf)    
C'est un manuel pour l'utilisateur d'un lecteur Sansa Clip Plus, je trouve que c'est bien expliquer!    
C'est fait par  le support tecknique de  Sandisk pour le Sansa Clip Plus .    
[www.sandisk.com/support/clipplus](http://www.sandisk.com/support/clipplus)    

Bref cette documentation est plus pour nos amis voyants n'utilisant pas  le firmware Rockbox avec le lecteur Sansa Clip Plus, mais je vous le donne à titre d'information uniquement!    

# Avant de vous lâcher dans la nature
Sachez que des âmes charitables  de l'équipe de RockBox ont écrit un manuel d'utilisation pour Rockbox sur le Sansa Clip Plus, vous le trouverez [ici en PDF (en anglais).](http://download.rockbox.org/manual/rockbox-sansaclipplus.pdf)    

[Retour au sommaire](#Sommaire)

# 29.- Mots final<a id="mark29"></a>

Chers amis du blog de RockboxFR Je pense avoir fait le tour des fonctions de base du Sansa Clip Plus!    
En tout cas pour la lecture des fichiers audio puis la radio FM déjà se n'est pas trop mal! lol de lol!    

amusez-vous bien avec votre lecteur Sansa Clip Plus!    
Voilà, maintenant vous savez tout!    
Arobamicalement à vous.    
Rémy (BlindHelp!)

[Retour au sommaire](#Sommaire)

---

Nous espérons vous revoir bientôt sur le nouvel espace de BlindHelp dédié au Firmware Rockbox pour les lecteur de musique gratuit via [GitHub](https://blindhelp.github.io/rockboxfr)                    
En outre, si vous êtes intéressé sur mes autres blogs, vous devriez jeter un oeil à quelques pages Web supplémentaires, en cliquant sur les liens suivants.    
[BlindHelp via GitHub.io](https://blindhelp.github.io)                    
[Blog de BlindHelp via Blogspot.com](http://blindhelp.blogspot.fr/)                    

---
