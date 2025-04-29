---
title: Rockbox version 4.0 - Téléchargement et installation pour le lecteur SANDISK Sansa Clip Plus
permalink: "/rockbox-4-0-released-for-sansaclipplus-player/"
layout: post
author: RockboxFR
commentsId: 5
---

<footer>Mardi Ier Avril 2025 - Dernière mise à jour Mardi 29 Avril 2025</footer>


Coucou mes amis du blog de RockboxFR!    
Avant de me décider de mettre en route l'installation de ce firmware Rockbox dans sa dernière version 4.0 sur mon lecteur    
![sansa clip plus rockbox](https://blindhelp.github.io/rockboxfr/sansa_clip_plus_rockbox.jpg "Sansa Clip Plus Rockbox")    
un produit de la firme [Sandisk](https://www.sandisk.com/)    
bien que je n'étais pas aussi emballé Comme je l'avais commenté à la fin de mon post précédent, ici, je mets quelques informations d'intérêt sur cette nouvelle version:    
Cette nouvelle mise à jour du Firmware Rockbox maintenant en version 4.0 avec un intervalle de publication de 5 ans entre L'ancienne version a été publié le mardi 1er avril 2025.    
Cependant, dans l'un de mes premiers articles dans le blog de RockboxFR :    
[Tuto pour l'installation de rockbox et utilisation du Sandisk Sansa Clip Plus](https://blindhelp.github.io/rockboxfr/Tuto-pour-l'installation-de-rockbox-et-utilisation-du-Sandisk-Sansa-Clip-Plus/)    
j'avais utilisé la dernière  version en date de l'utilitaire Rockbox qui était la 1.4.1 sortie le 15.11.2019 pour la plate-forme Windows (7 / 8 / 10    
Mais le firmware Rockbox comporté comme numéro de version: 3.15    

Pendant ce temps, des améliorations approfondies ont été apportées à chaque partie de la base de code de Rockbox, avec plus de 660 000 lignes de code modifiées par plus de 80 auteurs. Les changements les plus significatifs depuis la version antérieure comprennent:    

## Les appareils supprimés

* Archos Player/Studio
* Archos Recorder / v2
* Archos FM Recorder
* Archos Ondio FM / SP

Rockbox a été écrit à l'origine pour le lecteur Archos, cela représente la fin d'une époque. L'élimination de la prise en charge à ces appareils anciens a considérablement réduit la complexité interne du cœur de Rockbox et a aidé à stimuler une renaissance du développement. Les versions antérieures resteront disponibles indéfiniment, et le site de thème continuera d'héberger des thèmes pour les appareils Archos tant qu'il reste l'intérêt des utilisateurs.    
Cependant, à partir de cette nouvelle version de Rockbox, les nouveaux appareils ont été pris en charge par le firmware Rockbox:    

## Prise en charge des nouveaux appareils

* AIGO EROS Q et EROS K (des clones tels que AGPTek H3, HifiWlaker H2, et Surfans F20)
* FiiO M3K
* Shanling Q1
* xDuoo X3ii et X20

Mais comme il y a plus de changements et ce serait très étendu de les mentionnées ici, Vous pouvez lire la suite des changements depuis la page en anglais ci-dessous:    
<https://www.rockbox.org/wiki/ReleaseNotes400#What_39s_new_63>

Les critères de couverture de chaîne de traduction sont considérablement plus stricts que dans les versions antérieures. Les traductions complémentaires (ou mises à jour) sont toujours les bienvenues. (Voir la page en anglais <https://translate.rockbox.org> et [LangFiles](https://www.rockbox.org/wiki/LangFiles.html) pour plus d'informations sur la façon de contribuer) Remarque: De nombreux plugins ne sont pas actuellement traduits (ou parlés), surtout s'ils sont adaptés des bases de code tiers. Les correctifs sont les bienvenus!

## Couverture vocale

La couverture vocale des fonctionnalités hors concours de Rockbox est une interface utilisateur entièrement parlée. Dans le cadre de cette version, nous fournissons des fichiers vocaux pré-générés pour les langues suivantes:    
Brésilien Portugais, Bulgare, chinois (simplifié), tchèque, néerlandais, latvian (UK), anglais (États (Péninsulaire), slovaque, turc    
note: des voix bulgares, coréennes et slovaques ont été générées à l'aide de [eSpeak NG](https://github.com/espeak-ng/espeak-ng), mais le reste a été généré à l'aide de [Piper](https://github.com/rhasspy/piper).    
Les utilisateurs peut créer leurs propres fichiers vocaux pour n'importe quel langue pris en charge avec une variété de moteurs TTS à l'aide de [l'utilitaire Rockbox](https://www.rockbox.org/wiki/RockboxUtility.html) ou des outils en ligne de commande.    

## Plugins

Pour les nouveau Plugins ajoutés dans cette nouvelle version de Rockbox voir la section ci-dessous sur la page des changements (en anglais):    

<https://www.rockbox.org/wiki/ReleaseNotes400#What_39s_new_63>

## Changements complémentaires

La liste détaillée de toutes les modifications depuis la version précédente est disponible dans le Changelog officiel ci-dessous (toujours en anglais).    

<https://www.rockbox.org/wiki/MajorChanges>

## Ports stables

Pour ces lecteurs, Rockbox fonctionne bien et a une documentation appropriée, y compris les instructions d'installation:

* Aigo: Eros Q, Eros K (et des clones tels que AGPTek H3, HifiWlaker H2, et Surfans F20)
* Apple: iPod 1g à 6g (Classic), iPod Mini 1g et 2g, iPod Nano 1g et 2g
* AGPTek Rocker
* Archos: Jukebox 5000, 6000, Studio, Recorder, FM Recorder, Recorder V2 et Ondio
* Cowon: iAudio M3 series, iAudio M5 series, iAudio X5 series
• Creative: Zen Mozaic, Zen X-Fi, Zen X-Fi Style, Zen X-Fi3
* FiiO: M3K
* iriver:x H10 series, H100 series, H300 series
* MPIO: HD300
• Olympus: M-Robe 100
* Packard Bell: Vibe 500
* Philips: GoGear HDD1630, GoGear HDD6330, GoGear SA9200
• Samsung: YH-820, YH-920, YH-925
* Sandisk: Sansa c200, e200, Clip, Clip Zip, Clip+, Fuze, Fuze+
* Shanling: Q1
• Sony: NWZ-E360 series, NWZ-E370 series, NWZ-E380 series
* Toshiba: Gigabeat F/X series
* xDuoo X3, X3ii, et X20

POUR VOTRE INFORMATION    
Voici plus bas un commentaire de mon ami Stephane 🇫🇷 (Voyant) à propos du statut officiel du lecteur: Cowon D2 :    

> malgré son statut officiel, le Cowon D2 est selon moi tout à fait stable (j'en ai 2 depuis ~20 ans). le seul truc qui ne fonctionne pas du tout est la navigation par tag. Avec ses boutons et son écran tactile il est facile à utiliser les yeux fermés. Il est rare d'en trouver mais reste intéressant car    
> 1- solidement construit    
> 2- neuf il a une une grosse autonomie donc il en reste assez après des années    
> 3- on trouve des batteries de rechange et un bricoleur avisé peut facilement les remplacer.    

> Tshaw !!    

> Steph    

Rockbox fonctionne sur de nombreux autres lecteurs qui sont considérés comme instables ou sont confrontés à des problèmes importants empêchant une version formelle et favorable. Pour une liste complète, voir la page [TargetStatus (en anglais)](https://www.rockbox.org/wiki/TargetStatus.html).

Vous trouverez plus d'informations sur le firmware Rockbox sur le [site officiel (page en anglais)](https://www.rockbox.org/)    

Voilà pour la mise au point du firmware Rockbox jusqu'à la version 4.0 publié le 01.04.2025    

Avant d'entrer au vif du sujet je voulais dire mille merci à nouveau à mes amis Sof, Desertix et Stephane pour leurs précieux conseils!    

Je vous souhaite une bonne lecture!    

## Rockbox version 4.0 - Téléchargement et installation pour le lecteur SANDISK Sansa Clip Plus

Attention : Comme d’habitude, vous êtes seuls responsables de vos actes, le mode opératoire que je donne ici a fonctionné pour moi mais je ne saurais être tenu pour responsable en cas de pépins, vous êtes prévenus !    

Sommaire <a id="Sommaire"></a>
-------------
[1.- Introduction.](#mark1)    
[2.- Découverte du Sansa Clip Plus et premier pas.](#mark2)    
[3.- Préréglages de notre lecteur Sansa Clip Plus](#mark3)    
[4.- Téléchargement des fichiers avant l'installation du firmware Rockbox](#mark4)    
[5.- Préparation avant l'installation du firmware Rockbox [astuce].](#mark5)    
[6.- Branchement de notre lecteur Sansa Clip Plus au PC.](#mark6)    
[7.- Installation du firmware Rockbox sur notre Sansa Clip Plus.](#mark7)    
[8.- Installation de la voix en français pour un Sansa Clip Plus.](#mark8)    
[8.1.- Créer les fichiers d'annonce  en français pour un Sansa Clip Plus.](#mark8-1)    
[9.- Les fichiers de configuration .cfg](#mark9)    
[9.1.- Spécifications pour les fichiers .cfg](#mark9-1)    
[9.2.- Exemple d'un fichier de configuration](#mark9-2)    
[9.3.- Exemple d'un fichier de configuration incluant l'ajout d'une radio de ma région](#mark9-3)    
[9.4.- Fichier config.cfg en utilisant Rockbox 4.0 avec la configuration minimale requise configurée pour la langue en français suivi d'autres réglages additionnels incluant l'ajout d'une radio de ma région  pour notre lecteur Sansa Clip Plus](#mark9-4)    
[10.- Description physique du Sansa Clip Plus.](#mark10)    
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
[26.1.- Installation manuelle des polices pour notre lecteur Sansa Clip Plus.](#mark26-1)    
[26.2.- Installation manuelle des thèmes pour notre lecteur Sansa Clip Plus.](#mark26-2)    
[26.3.- Installation manuelle de la documentation en anglais pour notre lecteur Sansa Clip Plus.](#mark26-3)    
[27.- Désinstallation du firmware Rockbox sur notre Sansa Clip Plus.](#mark27)    
[28.- Documentation annexe pour le lecteur Sansa Clip Plus](#mark28)    
[29.- Mots final ](#mark29)    

---

# 1.- Introduction.<a id="mark1"></a>

Dans ce tutoriel, je ne traiterai pas de la description du produit, cependant, certaines descriptions ou manipulations pour le lecteur SANDISK Sansa Clip Plus sont mentionnées tout au long de ce post comme un rappel pour les utilisateurs de ce lecteur avec le firmware Rockbox.    

Pour plus de détails sur la description du produit vous pouvez lire l'intégralité sur l'un de mes premiers billets en cliquant sur le lien ci-dessous:    
[Tuto pour l'installation de rockbox et utilisation du Sandisk Sansa Clip Plus](https://blindhelp.github.io/rockboxfr/Tuto-pour-l'installation-de-rockbox-et-utilisation-du-Sandisk-Sansa-Clip-Plus/)    

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
Lors de l'écriture de cet article la dernière  version en date de l'utilitaire Rockbox était la 1.5.1 sortie le 01.04.2015 pour la plate-forme Windows (7 / 8 / 10)    
Mais le firmware Rockbox comporte comme numéro de version: 4.0    
Ci-dessous Je vous donne le dernier lien de téléchargement de RockboxUtility trouvé sur cette page,  disponible sous Windows:    
[https://download.rockbox.org/rbutil/win32/RockboxUtility-v1.5.1.zip](http://download.rockbox.org/rbutil/win32/RockboxUtility-v1.5.1.zip)    
Il est disponible aussi sous Linux et Mac, voir sur [cette page en anglais)](https://www.rockbox.org/wiki/RockboxUtility)    
Mais il est mis à jour de temps en temps donc à vous de vérifier occasionnellement si une nouvelle version corrigeant des bugs, apportant de nouvelles fonctionnalités ou prenant en charge de nouveaux modèles, n'est pas sortie.    
Une fois décompresser vous devez trouver le fichier nommé :    
`RockboxUtility.exe`    
2. Firmware original du Sansa Clip+    
La dernière version du Micrologiciel Clip+ (toutes régions) au moment où j'écris cet article est la 01.02.18.    
Téléchargez le Micrologiciel Clip+ (toutes régions via l'espace RockboxFR:    
[clipplus01.02.18.zip](https://blindhelp.github.io/rockboxfr/clipplus01.02.18.zip)    
Ou via le lien directe du constructeur SanDisk ci-dessous:    
Micrologiciel Clip+ (toutes régions) - Télécharger le micrologiciel    
[https://downloads.sandisk.com/firmware/clipplus/clipplus01.02.18.zip](https://downloads.sandisk.com/firmware/clipplus/clipplus01.02.18.zip)    
Une fois ddécompresser vous devez trouver le fichier nommé :    
`clppa.bin`    

# [Étapes pour mettre à jour le micrologiciel des lecteurs MP3 Sansa Clip Sport, Clip Zip, Clip et Clip+ | SanDisk](https://support-fr.sandisk.com/app/answers/detailweb/a_id/38643]

1. Retirez toute carte mémoire externe du Clip+ avant d'effectuer la mise à jour du micrologiciel.
2. Assurez-vous que la batterie est chargée à plus de 50 %.
3. Branchez votre Sansa Clip+ à votre ordinateur.
4. Extrayez le fichier clppa.bin du fichier .zip que vous venez de télécharger dans un dossier de votre ordinateur.
5. Une fois extrait, faites glisser le fichier vers le répertoire racine de votre Sansa Clip+.
6. Déconnectez le Sansa Clip+ et laissez la mise à jour du micrologiciel commencer.
7. Le lecteur affichera « Mise à jour du micrologiciel en cours » et s'éteindra une fois l'opération terminée.
8. Allumez le Clip+, sélectionnez votre langue et votre région.
9. Accédez aux Paramètres > Paramètres système > Informations, et vérifiez que la « Version » est désormais 01.02.18"x".

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
Une fois décompresser vous devez trouver le fichier nommé :    
`clppa.bin`    
et collez le à la racine du lecteur. Déconnectez le lecteur et patientez : la mise à jour se fait automatiquement, il s'affiche "Mise à jour du firmware" sur le lecteur pendant environ 10 secondes, puis il s'éteint tout seul.    

[Retour au sommaire](#Sommaire)

# 7.- Installation du firmware Rockbox sur notre Sansa Clip Plus<a id="mark7"></a>

# Installation du firmware Rockbox pour un Sansa Clip Plus en utilisant RockboxUtility.

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

# Avertissement

Le fichier RockboxUtility-v1.5.1.zip ou plus, une fois extrait, contiendra son exécutable appelé RockboxUtility.exe, qui sera déclaré faux positif par votre antivirus lors de son exécution pour la première fois !    

Cela se produit avec l'antivirus Windows Defender par exemple.    

Comment autoriser l’antivirus Windows Defender à exécuter le programme quand même ?    

Pour permettre au programme de s'exécuter quand même avec Windows Defender, il faut cliquer sur "Informations complémentaires". Un bouton "Exécuter quand même" apparaît alors, il suffit de cliquer dessus pour lancer l'exécution du programme sur Windows.    

Cela doit être fait chaque fois que le nouveau fichier exécutable RockboxUtility.exe est placé dans le dossier RockboxInstall comme indiqué ci-dessus.    

Notez que ce fichier rockboxutility-v1.5.1.zip contiendra également deux fichiers exécutables appelés    ::
`ipodpatcher.exe`    
Valable pour les lecteurs de marque Apple:    
iPod 1g/2g, iPod 3g, iPod 4g, iPod Color, iPod Mini 1g, iPod Mini 2g, iPod Nano 1g, iPod Video, iPod Nano 2g    
`sansapatcher.exe`    
Valable pour les lecteurs de marque Sandisk:    
Sansa C200 et E200    
Sans oublier que ce même fichier contiendra le firmware Rockbox pour les baladeurs compatibles appelé:    
`RockboxUtility.exe`    
Donc une fois valider sur celui-ci, se déplacer avec des commandes clavier normales, comme "Tabulation" et "Majuscule+Tabulation" pour se déplacer entre les contrôles:    
Au  premier lancement vous aurez une fenêtre avec un texte en anglais en lecture seule: "Historique des modifications", ", utilisez les Flèches Haut ou Bas pour lire le texte.    

``
Historique des modifications dialogue
Rockbox Utility 1.4
Rework player detection functionality to provide better results.
Limit mountpoints ("Select your device in the filesystem") in configuration dialog to usable ones.
Change encoder volume configuration to allow more sensible values.
Save proxy password differently in configuration file (better solution for FS#12166).
Add support for building Rockbox Utility with Qt5.
Add support for extracting Original Firmware files compressed with CAB (G#418).
Add support for Creative Zen X-Fi3 (G#419).
Add Changelog window.
Rework System Trace functionality.
Add support for Iriver H300 v1.31K firmware.
Add support for Sandisk Sansa Clip Zip v01.01.21 firmware.
Fix manual link for Archos Recorder V2.
Rockbox Utility 1.4.1
Fix crash on detecting player in MTP mode (FS#12989).
Extend hint when uninstallation requires reinstalling the Original Firmware.
Improve update check information dialog.
Correct USB IDs for Sandisk Sansa c200v2.
Add support for iPod Classic 6G bootloader.
Rockbox Utility 1.5.0
Add support for xDuoo X3, X3ii, X20.
Add support for AGPTek Rocker.
Add support for AIGO Eros Q and various clones (AIGO Eros K, AGPTek H3, HIFI Walker H2, Surfans F20)
Add support for showing "retired" target status.
Update Iriver H100 / H300 series bootloader.
Rename Game Files installation to Plugin Data; now installs files for further games (Duke3D, Wolfenstein3D, etc.) as well as other plugins (MIDI patchset)
Support installing daily builds.
Move Manual / prerendered voice file installation to main dialog.
Support installing voice files in other languages than english (available languages depends on build).
Improved HiDPI support.
Drop support for Qt4, now requires Qt5.
Update various external libraries.
Server Downloads changed to https.
Rockbox Utility 1.5.1
Fix bootloader installation for Ipods.
Fix bootloader installation for Sandisk players.
Improve responsiveness on install / uninstall.
Enable Themes installation if themes are selected.
``

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
`Rockbox à installer liste déroulante Version stable (Version 4.0)`    
Note:    
Choisissez la version de Rockbox à installer entre Version stable (release) et Version de développement (build). Normalement je devrais conseiller la Version stable pour le grand public car comme son nom l'indique, elle garantit une stabilité contrairement aux versions de développement. Cela dit, en réalité mon expérience montre que les versions de développement sont tout aussi stables le plus souvent, elles corrigent même parfois des bugs présents dans la version stable. Et bien entendu, elles améliorent ou ajoutent également des fonctionnalités. Je serais presque donc tenté de conseiller les versions de développement pour tout le monde, mais le choix final vous revient bien évidemment. ;-)    
`Composants de Rockbox à installer groupe`    
`Bootloader case à cocher coché`    
Le bootloader est nécessaire pour démarrer Rockbox. Son installation n'est nécessaire que lors de la première installation.    
`Rockbox case à cocher coché`    
`Polices case à cocher coché`    
`Thèmes case à cocher non coché`    
Les thèmes permettent de modifier l'interface utilisateur de Rockbox. Utilisez "Personnaliser" pour sélectionner les thèmes.    
Utile sauf si vous avez un residue visuel.    
Si vous souhaitez avoir des thèmes particuliers, choisissez les en cliquant sur le bouton Personnaliser afin d'installer.    
Personnaliser bouton`    
Vous pouvez télécharger via Rockbox.org (page en anglais) deux thèmes qu'on m'a dit qu'ils sont très sympas, [Classic](http://themes.rockbox.org/index.php?themeid=1035&target=sansaclipplus) et [Equilibrium.](http://themes.rockbox.org/index.php?themeid=1534&target=sansaclipplus) Après c'est une question de goût!    
Reportez-vous à la section :    
[26.2.- Installation manuelle des thèmes pour notre lecteur Sansa Clip Plus.](#mark26-2)    
Attention, le pack de polices est indispensable au bon fonctionnement de certains thèmes donc il est préférable de l'installer d'emblée dans tous les cas, même si vous n'installez pas tout de suite de thèmes, pour être tranquille par la suite.    
`Plugin Data case à cocher coché`    
PS: Renommer l'élément précédent appelé: `Game Files installation` (Installation Fichiers de jeux) en `Plugin Data`    
Si vous êtes intéressés par Doom (oui, oui!), laissez la case coché    
Je ne l'ai pas essayé, mais on parle en bien.    
`Manuel case à cocher non coché Alt+ M`    
C'est une case à cocher qui, une fois cochée, affiche une liste déroulante qui vous permet de sélectionner quel type de manuel vous devez utiliser pour votre lecteur.    
Vous pouvez choisir Parmi l'un des éléments suivants :    
PDF
HTML (zip
HTML
Une fois que vous avez fini de faire votre choix, appuyez sur Tab.    
`Voice File case à cocher non coché Alt+ V`    
C'est une case à cocher qui, une fois cochée, affiche une liste déroulante qui vous permet de sélectionner le fichier de voix pour le firmware Rockbox.    
Dans notre cas, nous choisirons l'élément "Francais"sur cette liste.    
Une fois que vous avez fini de faire votre choix, appuyez sur Tab.    
PS: Pendant l'installation, téléchargera et installera Le contenu du fichier appelé:    
`voice-sansaclipplus-4.0-francais.zip`    
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
Note: Le bootloader est nécessaire pour démarrer Rockbox. Son installation n'est nécessaire que lors de la première installation.    
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
`Téléchargement du fichier rockbox-sansaclipplus-4.0.zip`    
`Téléchargement terminé.`    
`Extraction du fichier.`    
`Création du journal d'installation`    
`Le paquet a été installé avec succès.`    
Au bout de quelques instants, RockboxUtility arrive à l'étape "installation de polices".    
`Téléchargement du fichier rockbox-fonts-4.0.zip`    
`Téléchargement terminé.`    
`Extraction du fichier.`    
`Création du journal d'installation`    
`Le paquet a été installé avec succès.`    
`Téléchargement du fichier rockdoom.zip`    
`Téléchargement terminé.`    
`Extraction du fichier.`    
`Création du journal d'installation`    
`Téléchargement du fichier patchset.zip`    
`Téléchargement terminé.`    
`Extraction du fichier.`    
`Création du journal d'installation`    
`Le paquet a été installé avec succès.`    
`Téléchargement du fichier voice-sansaclipplus-4.0-francais.zip`    
`Téléchargement terminé.`    
`Extraction du fichier.`    
`Création du journal d'installation`    
`Le paquet a été installé avec succès.`    
`Téléchargement du fichier rockbox-sansaclipplus-4.0-html.zip`    
`Téléchargement terminé.`    
`Extraction du fichier.`    
`Création du journal d'installation`    
`Le paquet a été installé avec succès.`    
Au bout de quelques instants, RockboxUtility arrive à l'étape "installation de thèmes". Ces thèmes n'étant utiles que pour ceux qui ont un restant visuel.    
PS:    
Vérifiez que Rockbox Utility a bien ajouté le fichier `*.bin` à la racine de votre baladeur.    
si vous ne voyez pas certains dossiers ou fichiers sur votre baladeur, c'est probablement parce que vous n'avez pas activé l'affichage des dossiers et fichiers cachés dans l'explorateur Windows.    
Par exemple, ".rockbox" est un répertoire caché.    
Pour cela cliquez sur "Affichage", puis "Afficher les fichier cachés".    
Et fermer à ce moment l'assistant de Rockbox utility, via le menu Fichier Alt+F, et chercher puis appuyer sur l'élément: Quitter Ctrl+Q.    

Notez que tous les paramètres que nous avons cochés ou décochés dans l'onglet `Installation Bienvenue Alt+ I` ils restent sauvegardés jusqu'au prochain démarrage de  l'Utilitaire Rockbox jusqu'à ce que vous les modifiez à nouveau.    

Lorsque le curseur est situé sur le nom de l'un de ces onglets, appuyez sur contrôle+tab pour vous déplacer entre les onglets de l'Utilitaire Rockbox. Les onglets sont :    

`Installation Bienvenue Alt+ I`    
`Accessibilité Installer des add-ons pour l'accessibilité Alt+ A`    
`Sauvegarde & Désinstallation Désinstaller Rockbox Alt+ D`    
`Info Alt+ o`    

Dans chacun de ces onglets, nous trouverons le bouton appelé:    
`Ejecter bouton Alt+ E`    
L'appui sur ce bouton éjectera votre lecteur `SanDisk Sansa Clip+` de votre Système d'exploitation (Windows 11 pro, par exemple)    

Le dialogue `Périphérique éjecté` apparaît accompagné d'un message vous indiquant que cela a réussi:    
`Périphérique éjecté avec succès. Vous pouvez maintenant déconnecter le lecteur du PC.`    
`OK bouton`
Appuyez sur OK pour fermer ce dialogue.    

Vous pouvez aussi installer le firmware Rockbox depuis l'élément `Installation` depuis le menu:    
`Actions réduit Alt+ s`    
Si nous cliquons ici, L'élément sera annoncé comme :    
`Actions développé Alt+ s`    
`Installation Alt+ I`    	
Appuyez sur cet élément pour ouvrir le dialogue d'installation de l'Utilitaire Rockbox, le processus d'installation commencera comme je l'ai expliqué ci-dessus.    

# Menu de l'interface de l'Utilitaire Rockbox.

Lorsque le menu apparaît, vous pouvez utiliser les touches fléchées pour naviguer dans le menu et la touche entrée pour activer un élément.

Le premier menu:    
`Fichier réduit Alt+ F`    
Si nous cliquons sur ce raccourci, il sera annoncé comme suit avec les éléments suivants:    
`Fichier développé`    
`Configuration Alt+ C`    
`Quitter Ctrl+ Q`    
Le deuxième menu:    
`Actions réduit Alt+ s`    
Si nous cliquons sur ce raccourci, il sera annoncé comme suit avec les éléments suivants:    
`Actions développé Alt+ s`    
`Installation Alt+ I`    	
`Accessibilité réduit Alt+ A`    
Créer les fichiers d'annonce Alt+ a
Ceux-ci sont nécessaires pour que Rockbox énonce les noms des fichiers et des dossiers    
Créer le fichier de voix Alt+ C
Celui-ci est requis pour que Rockbox parle. La synthèse vocale est activée par défaut, donc si vous installez le fichier de voix , Rockbox parlera    
`Désinstallation réduit Alt+ D`    
`Désinstaller Rockbox Alt+ R`    
Le troisième menu:    
`Aide réduit Alt+ A`    
Si nous cliquons sur ce raccourci, il sera annoncé comme suit avec les éléments suivants:    
`Aide développé Alt+ A`    
`A propos Alt+ A`    
`A propos de Qt Alt+ Q`    
`Montrer l'historique des modifications Alt+ h`    
`Informations système Alt+ s`    
`Trace système Alt+ T`    
`Aide Alt+ A`    

# Installation manuelle du firmware Rockbox pour le lecteur SANDISK Sansa Clip Plus.

L'utilisation de [RockboxUtility](https://www.rockbox.org/wiki/RockboxUtility.html) est le moyen le plus simple d'installer Rockbox. Cependant, vous pouvez également le télécharger et l'installer manuellement sur le lecteur SANDISK Sansa Clip Plus.    

Je présume ici que vous avez déjà fait les    
[Étapes pour mettre à jour le micrologiciel des lecteurs MP3 Sansa Clip Sport, Clip Zip, Clip et Clip+ | SanDisk](https://support-fr.sandisk.com/app/answers/detailweb/a_id/38643)    
comme déjà évoqué  presque au début de ce post à l'aide de l'Utilitaire Rockbox pour le lecteur SANDISK Sansa Clip Plus.    

La méthode d'installation manuelle est toujours à votre disposition, si vous avez besoin ou le désirez en suivant les instructions ci-dessous.    

Remarque: Le lien suivant est pour télécharger la dernière version de Rockbox 4.0 puis ensuite  extraire les fichiers manuellement dans ce lecteur sans utiliser le[RockboxUtility](https://www.rockbox.org/wiki/RockboxUtility.html)    

Vous pouvez télécharger le firmware Rockbox 4.0 en cliquant sur le lien suivant:    
[Firmware](https://download.rockbox.org/release/4.0/rockbox-sansaclipplus-4.0.zip)    
Nom de fichier:    
`rockbox-sansaclipplus-4.0.zip`    
Une fois ce fichier extrait à la racine du lecteur celui-ci contiendra le dossier:    
`.rockbox`    
Ce dossier contiendra les éléments liés à notre firmware Rockbox 4.0 pour notre lecteur SanDisk Sansa Clip+.    

[Retour au sommaire](#Sommaire)

# 8.- Installation de la voix en français pour un Sansa Clip Plus.<a id="mark8"></a>

Si vous souhaitez utiliser le support de voix, vous aurez également besoin d'un fichier de voix. Les fichiers de voix (.voice) permettent à Rockbox de verbaliser l'interface utilisateur pour vous. RockboxUtility peut installer un fichier de voix pour votre langue pour Rockbox version 4.0 compatible avec le lecteur Sansa Clip Plus.    

Ce fichier de voix est utile non seulement pour les personnes aveugles ou malvoyantes, mais pour n'importe qui lorsque l'écran ne peut pas être vu (en conduisant, lorsque le lecteur est à l'intérieur de votre poche, etc.    

# Installation de la voix en français pour un Sansa Clip Plus en utilisant RockboxUtility.

Lorsque vous êtes sur l'onglet `Installation Bienvenue Alt+ I`    
Si vous exécutez à partir de RockboxUtility, la première fois vous verrez cet élément appelé :    
`Voice File case à cocher non coché Alt+ V`    
C'est une case à cocher qui, une fois cochée, affiche une liste déroulante qui vous permet de sélectionner le fichier de voix pour le firmware Rockbox.    
Dans notre cas, nous choisirons l'élément "Francais"sur cette liste.    
Une fois que vous avez fini de faire votre choix, appuyez sur Tab, puis appuyez sur :    
`Installer bouton Alt+ I`    
PS: Pendant l'installation, téléchargera et installera Le contenu du fichier appelé:    
`voice-sansaclipplus-4.0-francais.zip`    

Note:    
Répétez cette même opération mentionnée ci-dessus si vous souhaitez installer d'autres langues, en choisissant sur la liste, par exemple:    
``
Composants de Rockbox à installer English (UK)
Composants de Rockbox à installer English (US)
Composants de Rockbox à installer Espanol
Composants de Rockbox à installer Francais
``

# Installation manuelle de la voix en français pour un Sansa Clip Plus.

Ci-dessous, nous trouverons un ensemble de liens pour télécharger les voix pour ce lecteur:    
Je ne mettrai ici que les voix qui peuvent être utiles pour nous:    

[Voice (en-gb)](https://download.rockbox.org/release/4.0/voice-sansaclipplus-4.0-english.zip)    
Nom de fichier:    
`voice-sansaclipplus-4.0-english.zip`    
Une fois ce fichier extrait contiendra le dossier:    
`.rockbox`    
puis le sous-dossier:    
`langs`    
Qui contient les fichiers suivants:    
`english.lng.talk`    
`english.voice`    
`InvalidVoice_english.talk`    

[Voice (en-us)](https://download.rockbox.org/release/4.0/voice-sansaclipplus-4.0-english-us.zip)    
Nom de fichier:    
`voice-sansaclipplus-4.0-english-us.zip`    
Une fois ce fichier extrait contiendra le dossier:    
`.rockbox`    
puis le sous-dossier:    
`langs`    
Qui contient les fichiers suivants:    
`english-us.lng.talk`    
`english-us.voice`    
`InvalidVoice_english-us.talk`    

[Voice (es-es)](https://download.rockbox.org/release/4.0/voice-sansaclipplus-4.0-espanol.zip)    
Nom de fichier:    
`voice-sansaclipplus-4.0-espanol.zip`    
Une fois ce fichier extrait contiendra le dossier:    
`.rockbox`    
puis le sous-dossier:    
`langs`    
Qui contient les fichiers suivants:    
`espanol.lng.talk`    
`espanol.voice`    
`InvalidVoice_espanol.talk`    

[Voice (es-mx)](https://download.rockbox.org/release/4.0/voice-sansaclipplus-4.0-espanol-mx.zip)    
Nom de fichier:    
`voice-sansaclipplus-4.0-espanol-mx.zip`    
Une fois ce fichier extrait contiendra le dossier:    
`.rockbox`    
puis le sous-dossier:    
`langs`    
Qui contient les fichiers suivants:    
`espanol.lng.talk`    
`espanol.voice`    
`InvalidVoice_espanol.talk`    

Dans ce cas, vous devrez choisir si vous voulez avoir l'espagnol avec l'accent traditionnel ou avec l'accent mexicain.    
Nous ne pouvons pas avoir les deux voix car c'est le même nom de fichier pour les deux langues.    

[Voice (fr)](https://download.rockbox.org/release/4.0/voice-sansaclipplus-4.0-francais.zip)    
Nom de fichier:    
`voice-sansaclipplus-4.0-francais.zip`    
Une fois ce fichier extrait contiendra le dossier:    
`.rockbox`    
puis le sous-dossier:    
`langs`    
Qui contient les fichiers suivants:    
`francais.lng.talk`    
`francais.voice`    
`InvalidVoice_francais.talk`    

1.- Pour faire la vocalisation, il faudra aller donc dans poste de travail et entrer dans votre lecteur Sansa Clip Plus    
Dans mon cas celui-ci est nommé par :    
SANSA CLIPP suivi d'une lettre.    
2.- Recherchez le fichier contenant la langue en français que vous veniez de téléchargé nommé :    
`voice-sansaclipplus-4.0-francais.zip`    
3.- Une fois décompresser vous devez trouver le fichier nommé :    
`francais.voice`    
4.- Faire un copier du fichier pour la langue en français nommé :    
`francais.voice`    
5.- Une fois validez sur notre lecteur Sansa Clip Plus, il faut aller dans le dossier nommé:    
.rockbox, faire entrée puis choisissez le dossier langs, et faire entrée    
ici on colle le fichier nommé:    
`francais.voice`    

Note :    
Répétez cette même procédure pour toutes Les autres langues que vous souhaitez installer manuellement dans votre lecteur Sansa Clip Plus.

[Retour au sommaire](#Sommaire)

# 8.1.- Créer les fichiers d'annonce  en français pour un Sansa Clip Plus.<a id="mark8-1"></a>

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

Ensuite la configuration de la voix SAPI 5se fait en utilisant RockboxUtility allant à l'onglet appelé:    
`Accessibilité Installer des add-ons pour l'accessibilité Alt+ A`    
puis en appuyant sur l'élément:    
`Créer des fichiers de voix bouton`    

ou en allant sur le menu :    
`Accessibilité réduit Alt+ A`    
Créer les fichiers d'annonce Alt+ a
Ceux-ci sont nécessaires pour que Rockbox énonce les noms des fichiers et des dossiers    

Dans les deux cas de figure, vous devez appuyer sur l'élément :    
`Modifier bouton Enter`    

Une boîte de dialogue apparaît.    

Vous devez choisir un moteur TTS dans la liste déroulante.    
Sélectionnez avec la flèche bas:    
`Moteur TTS SAPI5`    

Vous devez appuyer sur l'élément :    
`Configurer le moteur TTS  bouton Enter`    

Une boîte de dialogue apparaît.    
`Moteur TTS SAPI5 dialogue`    
Ici, vous devrez choisir la configuration appropriée, par exemple:    
`Langue: liste déroulante francais`    
`Voix: liste déroulante Down`    
`Rafraîchir bouton Enter`    
Appuyez sur Ce bouton pour rafraîchir la liste des voix SAPI5 installées sur votre système, nom de la voix SAPI5 à titre d'exemple:    
Voix: liste déroulante Microsoft Antoine Online Down
`Vitesse: bouton rotatif 0`    
J'ai laissé cette valeur par défaut.    
`Options: édition vide`    
Laissez-les par défaut.    
Je n'ai rien écrit dans ce champ d'édition, j'ignore Que puis-je mettre ici !    
`Ok bouton Enter`    
Appuyez sur ce bouton pour valider vos modifications.    
`Annuler bouton Enter`    
Appuyez sur Ce bouton pour annuler les modifications de cette configuration.    

En appuyant sur le bouton Ok/Annuler, vous serez dans l'élément précédent appelé:    
`TTS & Encodeur onglet`    
Si vous souhaitez tester la voix de ce moteurTTS SAPI5, vous devez appuyer sur l'élément :    
`Tester le moteur bouton Enter`    
Un texte sera entendu avec cette voix.    
Si cette voix SAPI5 vous convient, temps mieux, sinon, vous devrez la reconfigurer à nouveau comme expliqué ci-dessus.    
Lorsque vous êtes sur cet élément:    
`TTS & Encodeur onglet Alt+ T`    

Ici, vous trouverez la case à cocher:     
`Utiliser la correction des phrases pour TTS case à cocher coché Alt+ U`    
(valeur par défaut).    
`Moteur d'encodage groupe`    
Ci-dessous, vous trouverez l'élément appelé:    
`Configurer l'encodage bouton Enter`    
Je n'ai rien modifié ici, je l'ai laissé tel quel.    
PS:    
Si vous appuyez sur ce bouton une boîte de dialogue apparaît:    
`Rockbox Speex Encoder dialogue`    
`Utilitaire Rockbox`    
Ensuite, viennent les options suivantes (affiché sur ce dialogue par défaut):    
``
Volume: bouton rotatif 1,00
Qualité: bouton rotatif 8,00
Complexité: bouton rotatif 10
Utiliser le bas débit: case à cocher non coché
Ok bouton Enter
Annuler bouton Enter
``

Pour ma part, je n'ai rien modifié dans cette boîte de dialogue, je l'ai laissé tel quel.    
En appuyant sur le bouton Ok/Annuler, vous serez dans la fenêtre précédente appelé:    
`TTS & Encodeur onglet Alt+ T`    

Lorsque vous êtes sur l'élément précédent appelé:    
`TTS & Encodeur onglet Alt+ T`    
vous trouverez les deux derniers éléments appelés:    
`OK bouton Enter`    
`Annuler bouton Enter`    
En appuyant sur le bouton Ok/Annuler, vous serez dans la fenêtre précédente appelé:    
`Utilitaire Rockbox fenêtre`    

Note:    
Auparavant, si la voix SAPI5 a été bien configurée, un message apparaîtra dans cette boîte de dialogue:    
`Configuration dialogue`    
`Configuration de l'utilitaire Rockbox`    
`Configurer le moteur TTS`    
`La configuration est correcte`    
`Moteur d'encodageRockbox`    
`Speex`    
`Encoder`    

Si quelque chose a été mal configuré, un avertissement comme quoi la configuration n'est pas valide sera affichée.    

Lorsque vous êtes de retour sur l'élément appelé:    
`Utilitaire Rockbox fenêtre`    
`Options de génération groupe`    
`Modifier bouton Enter`    
Si vous vous souvenez bien, c'était le premier bouton que nous avons trouvé dans cette fenêtre pour choisir un moteur TTS dans la liste déroulante une fois cet élément ouvert.    
Ensuite, vous trouverez plusieurs cases à cocher:    
Appuyez sur barre d'espace pour modifier l'une de ces options, ou laissez-les par défaut.    
Mon choix est le suivant:    
`Générer pour les fichiers case à cocher coché`    
`Générer pour les dossiers case à cocher coché`    
`Explorer l'arborescence case à cocher coché`    
`Ignorer les existants case à cocher non coché`    
`Suppression des extensions case à cocher coché`    
`Ignorer les fichiers case à cocher non coché`    
`Options de génération édition vide`    
Laissez-les par défaut.    
Je n'ai rien écrit dans ce champ d'édition, j'ignore Que puis-je mettre ici !    
`Installer bouton Enter`    
Appuyez sur cet élément une fois que vous avez choisi vos options et vous en êtes sûr.    
Si vous n'êtes pas sûr de faire un bon choix avant d'appuyer sur le bouton `Installer` ; appuyez sur l'élément:    
`Annuler bouton Enter`    
pour annuler les modifications.    

Dans le cas que vous avez appuyé sur l'élément:    
`Installer bouton Enter`    

Une boîte de dialogue s'ouvre:    
`Utilitaire Rockbox fenêtre`    
`Installation des fichiers de voix dialogue`    
`Moteur TTS SAPI5`    
`Sélectionnez les dossiers pour la génération des fichiers de voix (Ctrl pour en sélectionner plusieurs)`    
Pour le moment, j'ai choisi le dossier:    
`.rockbox`    

Une fois le dossier ou les dossiers sélectionnés, l'Utilitaire Rockbox continuera avec l'installation.    
`Avancement dialogue`    
`Système réduit Espace`    
`Avancement`    
`Progression liste `    
`Progression`    
`Début de la génération des fichiers de voix pour le dossier .rockbox`    
`Lecture de la liste des fichiers...`    
`Démarrage du moteur TTS`    
`Démarrage du moteur d'encodage`    
`Synthèse des entrées...`    
`Encodage des fichiers...`    
`Copie des fichiers d'annonce...`    
`Nettoyage...`    
`Terminé`    
`Création des fichiers d'annonce terminée`    
`barre de progression 100%`    
`OK bouton Alt+ O`    
Appuyez sur OK pour fermer ce dialogue.    

`Ejecter bouton Alt+ E`    
L'appui sur ce bouton éjectera votre lecteur `SanDisk Sansa Clip+` de votre Système d'exploitation (Windows 11 pro, par exemple)    

Le dialogue `Périphérique éjecté` apparaît accompagné d'un message vous indiquant que cela a réussi:    
`Périphérique éjecté avec succès. Vous pouvez maintenant déconnecter le lecteur du PC.`    
`OK bouton`
Appuyez sur OK pour fermer ce dialogue.    

[Retour au sommaire](#Sommaire)

# 9.- Les fichiers de configuration .cfg<a id="mark9"></a>

Rockbox permet aux utilisateurs de stocker et de charger plusieurs paramètres via l'utilisation des fichiers de configuration. Un fichier de configuration est simplement un fichier texte avec l'extension .cfg.    

[Retour au sommaire](#Sommaire)

# 9.1.- Spécifications pour les fichiers .cfg<a id="mark9-1"></a>

Le fichier de configuration Rockbox est un fichier texte brut, donc une fois que vous avez utilisé l'option `Sauvegarder configuration actuel` pour créer le fichier, vous pouvez modifier le fichier sur votre ordinateur à l'aide d'un programme d'éditeur de texte.

[Retour au sommaire](#Sommaire)

# 9.2.- Exemple d'un fichier de configuration<a id="mark9-2"></a>

Dans notre premier exemple, ce fichier config.cfg configuré pour le firmware Rockbox 4.0 une fois que vous avez installé/mis manuellement le fichier english.voice suivi d'autres réglages additionnels,  est le suivant:    

<br>
`# .cfg file created by rockbox 4.0 - http://www.rockbox.org`    
<br>
`volume: -10`    
`talk dir: spell`    
`talk file: spell`    
`talk filetype: on`    
`Announce Battery Level: on`    
`lang: /.rockbox/langs/english.lng`    
<br>

Dans notre deuxième exemple, ce fichier config.cfg configuré pour le firmware Rockbox 4.0 une fois que vous avez installé/mis manuellement le fichier francais.voice suivi d'autres réglages additionnels,  est le suivant:    

<br>
`# .cfg file created by rockbox 4.0 - http://www.rockbox.org`    
<br>
`volume: -10`    
`talk dir: spell`    
`talk file: spell`    
`talk filetype: on`    
`Announce Battery Level: on`    
`lang: /.rockbox/langs/francais.lng`    
<br>

[Retour au sommaire](#Sommaire)

# 9.3.- Exemple d'un fichier de configuration incluant l'ajout d'une radio de ma région<a id="mark9-3"></a>

Si je reprends le premier exemple  de notre fichier config.cfg configuré pour le firmware Rockbox 4.0 une fois que vous avez installé/mis manuellement le fichier english.voice suivi d'autres réglages additionnels incluant l'ajout d'une radio de ma région,  est le suivant:    

<br>
`# .cfg file created by rockbox 4.0 - http://www.rockbox.org`    
<br>
`volume: -10`    
`talk dir: spell`    
`talk file: spell`    
`talk filetype: on`    
`Announce Battery Level: on`    
`fmr: /.rockbox/fmpresets/Grenoble.fmr`    
`lang: /.rockbox/langs/english.lng`    
<br>

Si je reprends le deuxième exemple  de notre fichier config.cfg configuré pour le firmware Rockbox 4.0 une fois que vous avez installé/mis manuellement le fichier francais.voice suivi d'autres réglages additionnels incluant l'ajout d'une radio de ma région,  est le suivant:    

<br>
`# .cfg file created by rockbox 4.0 - http://www.rockbox.org`    
<br>
`volume: -10`    
`talk dir: spell`    
`talk file: spell`    
`talk filetype: on`    
`Announce Battery Level: on`    
`fmr: /.rockbox/fmpresets/Grenoble.fmr`    
`lang: /.rockbox/langs/francais.lng`    
<br>

Les exemples ci-dessus dans les deux langues sont à titre purement informatif car le réglage du volume et le nom du fichier .fmr utilisé pour la radio peut être changer (y compris le nom du fichier de la langue et d'autres paramètres du lecteur) via l'interface de Rockbox par l'utilisateur.    

[Retour au sommaire](#Sommaire)

# 9.4.- Fichier config.cfg en utilisant Rockbox 4.0 avec la configuration minimale requise configurée pour la langue en français suivi d'autres réglages additionnels incluant l'ajout d'une radio de ma région  pour notre lecteur Sansa Clip Plus](#mark9-4)

Je suppose que vous avez installé / mis le fichier de voix appelé:    
`francais.voice`    
Dans le dossier:    
`.rockbox`    
Sous-dossier:    
`langs`    

Remarque :    
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

Mais ne vous inquiétez pas pour le moment, j' expliquerai le tout dans les sections ci-dessous liées à la RADIO FM. :)    
[15.- COMMENT ÉCOUTER DE LA RADIO FM ?](#mark15)    
[16.- Comment enregistrer une emission de Radio](#mark16)    
[17.- Programmation des présélections des vos Radio FM.](#mark17)    
[18.- Sélectionner une présélection.](#mark18)    

Voici le contenu du fichier config.cfg en utilisant Rockbox 4.0 avec la configuration minimale requise configurée pour la langue en français suivi d'autres réglages additionnels incluant l'ajout d'une radio de ma région  pour notre lecteur Sansa Clip Plus:    

<br>
`# .cfg file created by rockbox 4.0 - http://www.rockbox.org`   
<br>
`volume: -10`   
`talk dir: spell`   
`talk file: spell`   
`fmr: /.rockbox/fmpresets/Grenoble.fmr`   
`lang: /.rockbox/langs/francais.lng`   
<br>

Le contenu du fichier config.cfg créé ci-dessus est à titre purement informatif car le réglage du volume et le nom du fichier .fmr utilisé pour la radio peut être changer (y compris le nom du fichier de la langue et d'autres paramètres du lecteur) via l'interface de Rockbox par l'utilisateur.    

Ce fichier `config.cfg` est disponible en téléchargement à partir du lien ci-dessous.

# Téléchargement et mise en route du fichier de configuration en français:

1.- Pour obtenir le fichier de configuration en français, vous devez télécharger le fichier nommé:    
[FichierConfigRockbox4.0FRSansaClipPlus.zip](https://blindhelp.github.io/rockboxfr/FichierConfigRockbox4.0FRSansaClipPlus.zip)    
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

# 10.- Description physique du Sansa Clip Plus.<a id="mark10"></a>

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

# 11.- Recommandations utils!<a id="mark11"></a>

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
[pdf 1490 kB](https://download.rockbox.org/daily/manual/rockbox-sansaclipplus.pdf)    
[html-zip 642 kB](https://download.rockbox.org/daily/manual/rockbox-sansaclipplus-html.zip)    
Et voici ci-dessous ce même manuel en anglais consultable en ligne via Rockbox.org:    
[online](https://download.rockbox.org/daily/manual/rockbox-sansaclipplus/rockbox-build.html)    
Puis finalement voici ci-dessous les sources de la page en anglais où j'ai fait les trouvailles, toujours via Rockbox.org:    
[Rockbox - Daily Built Manuals](https://www.rockbox.org/manual.shtml)    
ou:    
[Index of /daily/manual](https://download.rockbox.org/daily/manual/)    
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

Pour les régions de l'Amérique (Nord et Amérique du Sud) vous pouvez consulter [cette page (en anglais)](https://www.rockbox.org/wiki/FmPresetsAmerica.html) et trouver puis télécharger les fichiers fmr correspondant à la région désirée, toujours via le site Rockbox.org.    
Pour les régions Asiatiques vous pouvez consulter [cette page (en anglais)](https://www.rockbox.org/wiki/FmPresetsAsia.html) et trouver puis télécharger les fichiers fmr correspondant à la région désirée, toujours via le site Rockbox.org.    
Pour les régions Européennes vous pouvez consulter [cette page (en anglais)](https://www.rockbox.org/wiki/FmPresetsEurope.html) et trouver puis télécharger les fichiers fmr correspondant à la région désirée, toujours via le site Rockbox.org.    
Pour les régions Océaniennes vous pouvez consulter [cette page (en anglais)](https://www.rockbox.org/wiki/FmPresetsOceania.html) et trouver puis télécharger les fichiers fmr correspondant à la région désirée, toujours via le site Rockbox.org.    
Pour les régions des Caraïbes vous pouvez consulter [cette page (en anglais)](https://www.rockbox.org/wiki/FmPresetsCaribbean.html) et trouver puis télécharger les fichiers fmr correspondant à la région désirée, toujours via le site Rockbox.org.    

## Télécharger les fichiers avec extension *.fmr

Vous pouvez télécharger les fichiers preset avec extension  *.fmr à partir des liens situés ci-dessous pour une utilisation directe sur votre lecteur.    
Placez le (s) fichier où vous voulez en fonction de vos préférences: à l'intérieur du chemin permanent:    
`"/.rockbox/fmpresets/"`    
(jusqu'à ce qu'un autre fichier soit sélectionné), ou dans chaque dossier que vous aimez (la liste prédéfinie sera chargée jusqu'à ce que vous arrêtiez l'unité, c'est-à-dire le lecteur).    

## Régions de l'Amérique (Nord et Amérique du Sud)

[fmr-america.zip](https://www.rockbox.org/realwiki/pub/Main/FmPresetsAmerica/fmr-america.zip)    
Fichiers soumis le 2 mars 2008    

## Régions Asiatiques

[fmr-asia_071111.zip](https://www.rockbox.org/realwiki/pub/Main/FmPresetsAsia/fmr-asia_071111.zip)    
Fichiers mis à jour le 11 novembre 2007    

## Régions Européennes

[fmr-europe.zip](https://www.rockbox.org/realwiki/pub/Main/FmPresetsEurope/fmr-europe.zip)    
Fichiers soumis avant le 17 juin 2006    

Remarque :    
Pour les régions Océaniennes et les régions des Caraïbes je n'ai pas trouvé de lien  de téléchargement valide pour les  fichiers avec extension *.fmr    

# Paquet Presets FM

Presets FM - syntoniseur radio FM pour diverses régions, le tout en un seul paquet.    

Pour plus d'informations, veuillez consulter la page Wiki de Rockbox ci-après (en anglais):    

[FmPresets - FM radio tuner Presets for various régions](https://www.rockbox.org/wiki/FmPresets.html)

# Paquet Presets FM à télécharger:

[fmr-complete.zip](https://www.rockbox.org/realwiki/pub/Main/FmPresets/fmr-complete.zip)    
ou:    
[fmr-complete_071111.zip](https://www.rockbox.org/realwiki/pub/Main/FmPresets/fmr-complete_071111.zip)    

Ceux-ci est le paquet global contenant des fichiers fmr (Dernière mise à jour le 11 novembre 2007).    

Remarque : Le paquet global contenant des fichiers fmr qui est dans l'archive:    
[fmr-complete_071111.zip](https://www.rockbox.org/realwiki/pub/Main/FmPresets/fmr-complete_071111.zip)    
Après avoir décompressé ledit archive, dans le dossier appelé:    
`fmr-complete_060717`    
dans le sous-dossier:    
`fmr-europe_060508`    
dans le sous-dossier:    
`fmr-france_060508`    
comporte  le même contenu et la même date de l'archive [fmr-france.zip](https://www.rockbox.org/realwiki/pub/Main/FmPresetsEurope/fmr-france.zip)    
(Dernière mise à jour le 8 mai 2006).    

# Convertisseurs prédéfinis

Ce sont des scripts de conversion pour convertir les fichiers FM prédéfinies entre les formats pour les différents programmes, les lecteurs et les firmwares.

Note: Ne me demandez pas comment cela fonctionne, je donne seulement l'information pour les programmeurs qui veulent connaître plus à propos de ça.    
Faire `"Enregistrer la cible du lien sous..."` sur chaque lien car ils sont des fichiers texte (*.txt).    

[meizu2rockbox.txt - Meizu-To-Rockbox script by pabouk](https://www.rockbox.org/realwiki/pub/Main/FmPresets/meizu2rockbox.txt)    

[rockbox2meizu.txt - Rockbox-To-Meizu script by pabouk](https://www.rockbox.org/realwiki/pub/Main/FmPresets/rockbox2meizu.txt)    

Voici la page (en anglais): [FM Presets](https://www.rockbox.org/wiki/FmPresets) via Rockbox.org où j'ai fait la trouvaille:    

Dans le cas présent, si vous avez téléchargé l'archive nommé:    
[fmr-france.zip](https://www.rockbox.org/realwiki/pub/Main/FmPresetsEurope/fmr-france.zip)    
(Dernière mise à jour le 8 mai 2006).    
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
Une fois désiper l'archive nommé:
[fmr-france.zip](https://www.rockbox.org/realwiki/pub/Main/FmPresetsEurope/fmr-france.zip)    
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
[pdf 1490 kB](https://download.rockbox.org/daily/manual/rockbox-sansaclipplus.pdf)    
[html-zip 642 kB](https://download.rockbox.org/daily/manual/rockbox-sansaclipplus-html.zip)    
Et voici ci-dessous ce même manuel en anglais consultable en ligne via Rockbox.org:    
[online](https://download.rockbox.org/daily/manual/rockbox-sansaclipplus/rockbox-build.html)    
Puis finalement voici ci-dessous les sources de la page en anglais où j'ai fait les trouvailles, toujours via Rockbox.org:    
[Rockbox - Daily Built Manuals](https://www.rockbox.org/manual.shtml)    
ou:    
[Index of /daily/manual](https://download.rockbox.org/daily/manual/)    
Si vous avez mis le fichier francais.voice comme indiqué plus haut suivez ces instructions:    
Débranchez votre Lecteur Sansa Clip Plus du PC (Retirer le périphérique en toute sécurité et éjecter le média).

Note:    
Si vous êtes dans l'interface de l'Utilitaire Rockbox, vous aurez l'élément appelé:    
`Ejecter bouton Alt+ E`    
L'appui sur ce bouton éjectera votre lecteur `SanDisk Sansa Clip+` de votre Système d'exploitation (Windows 11 pro, par exemple)    

Le dialogue `Périphérique éjecté` apparaît accompagné d'un message vous indiquant que cela a réussi:    
`Périphérique éjecté avec succès. Vous pouvez maintenant déconnecter le lecteur du PC.`    
`OK bouton`
Appuyez sur OK pour fermer ce dialogue.    

puis allumez le lecteur, à ce stade  celui-ci Démarre  sur Rockbox ; Vous devriez maintenant avoir les menus parlants.    
Sinon, pour configurer la voix qui va nous guider dans différents répertoires et fichiers, ainsi que dans les menus, il faut aller sur Réglages, puis a l'aide de la touche de navigation il faut chercher puis valider avec la touche de sélection l'option Réglages généraux, puis à nouveau avec la touche de navigation chercher puis valider avec la touche de sélection l'option Interface vocal.    
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

Note:    
Les fichiers avec l'extention .talk que la voix nous va lire il doive être créer soit via Rockboxutility ou en allant sur le  menu :    
`Accessibilité réduit Alt+ A`    
Créer les fichiers d'annonce Alt+ a
Ceux-ci sont nécessaires pour que Rockbox énonce les noms des fichiers et des dossiers    
Créer le fichier de voix Alt+ C
Celui-ci est requis pour que Rockbox parle. La synthèse vocale est activée par défaut, donc si vous installez le fichier de voix , Rockbox parlera    

Reportez-vous à la section [8.1.- Créer les fichiers d'annonce  en français pour un Sansa Clip Plus.](#mark8-1)

[Retour au sommaire](#Sommaire)

# 26.- Mise à jour du firmware Rockbox sur notre Sansa Clip Plus.<a id="mark26"></a>

Pour mettre à jour le firmware Rockbox, il suffit d'utiliser Rockbox Utility comme pour la première installation mais en cochant la case Rockbox seulement cette fois. En effet, l'installation du bootloader n'est nécessaire que pour la première installation, pas pour les mises à jour du firmware Rockbox.    

L'utilisation de [RockboxUtility](https://www.rockbox.org/wiki/RockboxUtility.html) est le moyen le plus simple d'installer Rockbox. Exécutez simplement l'installateur et suivez les instructions à l'écran. Assurez-vous d'arrêter / éjecter / démontrer le disque USB avant de le débrancher.    

Si vous souhaitez mettre à jour manuellement le firmware Rockbox 4.0 pour le lecteur SANDISK Sansa Clip Plus une fois que vous l'avez branchée vous trouverez le lecteur dans le poste de travail comme nom:    
`SANSA CLIPP (Lettre de votre lecteur:) (Voir Ce PC sous Windows 11)`    

# Pour commencer le processus d'installation.    

1. Téléchargez la version de Rockbox 4.0 manuellement pour le lecteur SanDisk Sansa Clip+  à partir du Lien suivant:    
[Firmware](https://download.rockbox.org/release/4.0/rockbox-sansaclipplus-4.0.zip)    
Nom de fichier:    
`rockbox-sansaclipplus-4.0.zip`    
2. Connectez votre lecteur à l'ordinateur via USB en mode MSC comme décrit dans le manuel qui est venu avec votre lecteur ou suivez les instructions données au début de ce post. L'installation du bootloader n'est nécessaire que pour la première installation, pas pour les mises à jour du firmware Rockbox.    
3. Prenez le fichier rockbox-sansaclipplus-4.0.zip que vous avez téléchargé et utilisez la commande "Extraire tout..." à l'aide du menu contextuel en appuyant sur la touche applications située à côté de la touche de contrôle droite sur la plupart des claviers. Sur un clavier sans touche applications, appuyez sur maj+f10 à la place depuis l'Explorateur de fichiers ou depuis l'interface de votre programme afin d'extraire les fichiers sur votre lecteur.    
Remarque: L'ensemble du contenu du fichier rockbox-sansaclipplus-4.0.zip doit être extrait directement à la racine du lecteur . N'essayez pas de créer un répertoire séparé sur votre lecteur pour les fichiers Rockbox! Le fichier rockbox-sansaclipplus-4.0.zip  contient déjà la structure interne dont Rockbox a besoin. Si le contenu du fichier rockbox-sansaclipplus-4.0.zip  est extrait correctement, vous aurez un répertoire appelé: `.rockbox`, qui contient tous les fichiers nécessaires à Rockbox au même niveau que les répertoires principaux du lecteur.    

[Retour au sommaire](#Sommaire)

# 26.1.- Installation manuelle des polices pour notre lecteur Sansa Clip Plus.<a id="mark26-1"></a>

Pour l'installation manuelle des polices pour notre lecteur Sansa Clip Plus vous devrez télécharger l'archive .zip contenant les polices en cliquant sur le lien suivant:    
[Fonts](https://download.rockbox.org/release/4.0/rockbox-fonts-4.0.zip)    
Nom de fichier:    
`rockbox-fonts-4.0.zip`    
Une fois ce fichier extrait contiendra le dossier:    
`.rockbox`    
puis le sous-dossier:    
`fonts`    
Ce sous-dossier contiendra les 81 fichiers relatifs à les polices pour le firmware Rockbox 4.0.

[Retour au sommaire](#Sommaire)

# 26.2.- Installation manuelle des thèmes pour notre lecteur Sansa Clip Plus.<a id="mark26-2"></a>

Utile sauf si vous avez un residue visuel.    
Vous pouvez télécharger via Rockbox.org (page en anglais) deux thèmes qu'on m'a dit qu'ils sont très sympas, [Classic](https://themes.rockbox.org/index.php?themeid=1035&target=sansaclipplus) et [Equilibrium.](https://themes.rockbox.org/index.php?themeid=1534&target=sansaclipplus) Après c'est une question de goût!    
Vous pouvez également obtenir ces deux thèmes via les liens suivants:    
Télécharger Classic Theme pour notre lecteur Sansa Clip Plus en cliquant [ici](https://themes.rockbox.org/download.php?themeid=1035)    
Nom du fichier:    
`Classic.zip`    
Télécharger Equilibrium Theme pour notre lecteur Sansa Clip Plus en cliquant [ici](https://themes.rockbox.org/download.php?themeid=1534)    
Nom du fichier:    
`equilibrium-sansa-theme.zip`    
Attention, le pack de polices est indispensable au bon fonctionnement de certains thèmes donc il est préférable de l'installer d'emblée dans tous les cas, même si vous n'installez pas tout de suite de thèmes, pour être tranquille par la suite.    

Une fois le fichier Classic.zip ou equilibrium-sansa-theme.zip extrait contiendra le dossier:    
`.rockbox`    
puis les sous-dossiers:    
`themes`    
`wps`    

[Retour au sommaire](#Sommaire)

# 26.3.- Installation manuelle de la documentation en anglais pour notre lecteur Sansa Clip Plus.<a id="mark26-3"></a>

Remarque sur la documentation en pdf et en html en anglais:    
Le fichier de documentation en anglais pour notre lecteur SANDISK Sansa Clip Plus appelé:    
`rockbox-sansaclipplus-4.0.pdf`    
et l'archive appelé:    
`rockbox-sansaclipplus-4.0-html.zip`    
Une fois ce fichier extrait contiendra le dossier:    
`html`    
Ce dossier contiendra les éléments liés audit dossier.    

Notez que ce fichier `rockbox-sansaclipplus-4.0.pdf` et le dossier HTML doivent être placés au même niveau que les répertoires principaux du lecteur.     

Note:    
À mon avis, il est préférable de consulter le fichier PDF qui me semble plus accessible pour nous les miro.    

[Retour au sommaire](#Sommaire)

# 27.- Désinstallation du firmware Rockbox sur notre Sansa Clip Plus<a id="mark27"></a>

Je doute que quelqu'un souhaite le faire, :-(    
mais si vraiment vous y tenez, il suffit alors de réinstaller le firmware Sansa Clip Plus d'origine que vous avez téléchargé en mettant le fichier *.bin à la racine de votre Sansa Clip Plus puis en le laissant mettre à jour le firmware lors de la déconnexion de l'appareil. Ce fichier *.bin n'ayant pas été patché par Rockbox Utility, il ne contient donc plus le bootloader Rockbox. Ensuite et enfin, supprimez tout simplement le dossier .rockbox à la racine de votre baladeur Sansa Clip Plus.    

Vous pouvez utiliser aussi l'Utilitaire Rockbox.    
Une fois lancé, allez à l'élément appelé:    
`Sauvegarde & Désinstallation onglet Alt+ D`    
Sauvegarde bouton
En appuyant sur ce bouton, il fera une sauvegarde de notre installation du firmware Rockbox.    
Il ne sera pas nécessaire de le faire je pense que si vous le souhaitez le désinstaller de votre lecteur.    
`Périphérique groupe`    
`Modifier bouton Alt+ M`    
Ce bouton ne sert qu'à modifier l'emplacement de notre lecteur.    
`Désinstaller Rockbox bouton`    
Si vous êtes complètement sûr de votre décision, vous pouvez le faire, mais ce serait dommage! :(
`Ejecter bouton Alt+ E`    
L'appui sur ce bouton éjectera votre lecteur `SanDisk Sansa Clip+` de votre Système d'exploitation (Windows 11 pro, par exemple)    

Le dialogue `Périphérique éjecté` apparaît accompagné d'un message vous indiquant que cela a réussi:    
`Périphérique éjecté avec succès. Vous pouvez maintenant déconnecter le lecteur du PC.`    
`OK bouton`
Appuyez sur OK pour fermer ce dialogue.    

Vous pouvez également le faire en allant au menu:    
`Actions réduit Alt+ s`    
`Désinstallation réduit Alt+ D`    
`Désinstaller Rockbox Alt+ R`    
Lorsque cette option est sélectionnée,la fenêtre de l'Utilitaire Rockbox s'ouvre...    
Suivez les instructions à l'écran.    

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

# Composants de Rockbox à télécharger et installer manuellement:
Vous pouvez les télécharger à partir de [cette page (en anglais)](https://www.rockbox.org/daily.shtml)    

Une fois ouvert cette page, chercher le mot:    
`sansaclipplus`    
Vous trouverez ici des liens pour télécharger la dernière version de Rockbox, les différents fichiers de voix des principales langues supportées par Rockbox et le manuel en anglais, tous ceux-ci sont des  "Daily builds", c'est-à-dire des constructions quotidienne pour le lecteur Sansa Clip Plus.    

[Retour au sommaire](#Sommaire)

# 29.- Mots final<a id="mark29"></a>

Chers amis du blog de RockboxFR en espérant que ces explications pour le téléchargement et installation du firmware Rockbox 4.0 pour le lecteur SANDISK Sansa Clip Plus soit en utilisant l'Utilitaire Rockbox ou la procédure manuelle ils vous servent à quelque chose. 👍    
Y compris le résumé de tous les fonctions de base du Sansa Clip Plus!    
En tout cas pour la lecture des fichiers audio puis la radio FM déjà se n'est pas trop mal! lol de lol!    

Amusez-vous bien avec votre lecteur Sansa Clip Plus!    

Merci beaucoup à    <span lang="en">Solomon Peachy!</span> pour avoir partagé ces informations de cette nouvelle mise à jour du firmware Rockbox dans sa dernière version 4.0 pour le lecteur SanDisk Sansa Clip+. :)    
Profitez de Rockbox - un microprogramme pour les lecteurs de musique numérique gratuit!    
@+    
BlindHelp!    

[Retour au sommaire](#Sommaire)

---

Nous espérons vous revoir bientôt sur le nouvel espace de BlindHelp dédié au Firmware Rockbox pour les lecteur de musique gratuit via [GitHub](https://blindhelp.github.io/rockboxfr)                    
En outre, si vous êtes intéressé sur mes autres blogs, vous devriez jeter un oeil à quelques pages Web supplémentaires, en cliquant sur les liens suivants.    
[BlindHelp via GitHub.io](https://blindhelp.github.io)                    
[Blog de BlindHelp via Blogspot.com](http://blindhelp.blogspot.fr/)                    

---

