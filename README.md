# Snake Game in TypeScript

## Description

Bienvenue dans ce projet de jeu Snake développé en TypeScript ! Ce jeu classique consiste à contrôler un serpent qui se déplace sur une grille, mange des pommes pour grandir, et évite les collisions avec les murs et son propre corps. Le projet utilise les technologies HTML, CSS, et TypeScript pour créer un environnement de jeu interactif.

## Fonctionnalités du Jeu

- **Déplacement du Serpent** : Le joueur contrôle le serpent à l'aide des touches fléchées du clavier (Haut, Bas, Gauche, Droite).
- **Croissance** : À chaque fois que le serpent mange une pomme, il grandit d'un segment.
- **Conditions de Fin de Partie** : Le jeu se termine lorsque le serpent entre en collision avec une bordure de la grille ou avec son propre corps.
- **Affichage du Score** : Le score est mis à jour chaque fois que le serpent mange une pomme.

## Installation et Lancement

Pour générer le build, vous pouvez utiliser le raccourci **Ctrl+Shift+B** dans votre éditeur de code si vous avez configuré TypeScript pour une tâche de construction automatique.

Pour exécuter ce projet en local, suivez les étapes suivantes :

1. **Cloner le Dépôt** : Clonez le dépôt dans votre environnement local.

   ```bash
   git clone <repository-url>
   ```

2. **Installer TypeScript** : Assurez-vous d'avoir TypeScript installé globalement ou dans votre projet.

   ```bash
   npm install -g typescript
   ```

3. **Compiler le Code TypeScript** : Compilez le code TypeScript en JavaScript à l'aide de la commande suivante :

   ```bash
   tsc -p tsconfig.json
   ```

4. **Ouvrir le Fichier HTML** : Pour démarrer le jeu, ouvrez le fichier `index.html` dans votre navigateur.

## Comment Jouer

1. **Lancer le Jeu** : Ouvrez `index.html` dans votre navigateur. Le jeu commencera automatiquement.
2. **Contrôles** : Utilisez les touches fléchées de votre clavier pour déplacer le serpent dans la direction souhaitée.
3. **Objectif** : Mangez les pommes pour augmenter votre score et la longueur du serpent.
4. **Fin de Partie** : La partie se termine si le serpent touche les bordures ou entre en collision avec son propre corps.

## Structure du Code

- **`Point.ts`** : Définit la classe `Point`, qui représente une position sur la grille, avec des coordonnées `x` et `y`.
- **`Apple.ts`** : Définit la classe `Apple`, qui hérite de `Point`. Elle représente la pomme que le serpent doit manger. Elle peut générer une nouvelle position aléatoire sur la grille.
- **`Snake.ts`** : Définit la classe `Snake`, qui hérite de `Point`. Elle gère le déplacement, la croissance, et les collisions internes du serpent.
- **`Display.ts`** : Gère l'affichage graphique sur le canvas HTML, dessine le serpent et la pomme, et gère le score.
- **`Game.ts`** : La classe `Game` gère la logique principale, y compris le contrôle des collisions, le mouvement du serpent, la gestion des pommes, et le score.
- **`App.ts`** : Point d'entrée du jeu. Initialise les instances de `Game` et `Display` et lie les événements du clavier pour contrôler le serpent.

## Explications du Code

- **Logique du Jeu (`Game.ts`)** : Le fichier `Game.ts` contient toute la logique de gestion du jeu, y compris la détection des collisions, la mise à jour de l'état du jeu, et l'interaction avec `Display` pour le rendu graphique.
- **Affichage (`Display.ts`)** : `Display.ts` est responsable de dessiner le serpent et la pomme à chaque mise à jour. Il gère également l'affichage du score.
- **Contrôles du Serpent** : Le fichier `App.ts` écoute les événements du clavier et permet au joueur de changer la direction du serpent grâce à la méthode `changeDirection()`.
- **Vitesse et Mise à Jour** : La classe `Game` utilise une méthode basée sur le temps (`performance.now()`) pour contrôler la vitesse de mise à jour du serpent et s'assurer que le déplacement est fluide.

## Dépendances et Technologies Utilisées

- **HTML & Canvas** : Utilisé pour créer l'interface graphique du jeu.
- **TypeScript** : Utilisé pour organiser la logique du jeu de manière orientée objet.
- **CSS** : Utilisé pour styliser le jeu.

## Améliorations Futures

- **Ajout de Niveaux de Difficulté** : Implémenter différents niveaux de vitesse pour rendre le jeu plus difficile au fur et à mesure de la progression.
- **Enregistrement des Scores** : Ajouter un classement des meilleurs scores pour encourager la compétition.
- **Mode Sans Fin** : Ajouter un mode où le serpent continue à se déplacer même après avoir touché un mur, créant un effet "téléportation".

## Crédits

Développé par Dimitri Georgiadis, dans le cadre de la formation de Concepteur de Solutions Digitales.
