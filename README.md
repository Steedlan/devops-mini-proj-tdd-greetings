# DevOps Mini-Projet 2
Travail de recherche , mettre en place de l'integration continue avec les GitHub Actions

## Informations
- N° de groupe : 37 <br>
- lien du repo : https://github.com/Steedlan/devops-mini-proj-tdd-greetings <br>
- Membres du groupe : <br>
 Axel Lefranc <br>
 Sacha Lefranc <br>
 Arnaud Schellekens (aka Steedlan sur github) 


## Énoncé

### Pré-requis :
- Sur base de votre mini-projet 1 (TDD)
- Usage de [JEST](https://jestjs.io/docs/getting-started) obligatoire
- Utilisation pulls requests


### Ajouter ce fichier MD à votre mini-projet-1
Compléter les informations concernant votre numéro de groupe et membres du groupe

### Mettre en place une intégration continue
L'intégration continue doit se composer des étapes obligatoires suivantes (non-exhaustif):

    - Les dépendances doivent être installées
    - Une première étape indiquant l'heure de commencement de la pipeline doit être affichée
    - Le code doit être "formatté" correctement (Prettier)
    - Le code doit être "linté" correctement (Lint)
    - Le code doit être "testé" correctement ET le coverage doit être au-dessus de 80% (Jest)
    - Le code doit être "buildé" correctement
    - Une étape indiquant l'heure de fin de la pipeline doit être affichée
    - Une étape indiquant le string suivant "PIPELINE SUCCESS WITHOUT ERRORS" doit être affichée

### Enclencher l'intégration continue lors d'une Pull Request / Merge Request
Ouvrez une Pull Request / Merge Request 
Lors de l'ouverture et/ou de la modification de votre PR/MR vers la branche principale, l'intégration continue doit s'enclencher et les étapes doivent être respectées.
Merci de laisser une PR / MR ouverte afin que l'on puisse évaluer.


Liens utiles:
[GitHub Actions](https://docs.github.com/fr/actions)
[Jest coverage](https://www.valentinog.com/blog/jest-coverage/)

## Questions

- Décrivez brièvement ce que fait votre fichier YML.  
```bash
Le fichier YML configure une suite d'étapes d'intégration continue avec github action. Il se déclenche automatiquement sur toutes les pull requests ouvertes et modifiées sur la main.
```
- En particulier : à quoi sert le “on” ? dans votre fichier YML ?  Quelle est la différence entre “on push” et “on pull request”. Que conseilleriez-vous comme option parmi ces 2 options à un groupe de développeurs junior ? Pourquoi ? 
```bash
Il permet de spécifier sur quel type de changement exécuter la pipeline. "On push" démare à chaque fois qu'il y a une modification. "On pull request" démare le script à chaque fois qu'on fait une pull request. Nous conseillerons plutôt la pull request car elle permet de vérifier le code avant de le push.
```
- Quelle est la différence entre run et run_on ?  Expliquez par rapport à votre pipeline.  
```bash
"run_on" spécifie le système d'exploitation dans lequel sera exécuté l'intégration continue (dans notre cas ubuntu), alors que "run" décrit une suite d'actions à exécuter à chaque étapes
```
- Quelle est la différence entre “use” et “run”. Expliquez par rapport à votre pipeline. 
```bash
"uses" utilise des outils préconfigurés par github action (comme installer node JS) et "run" exécute des commandes plus précises. (Comme lancer jest)
```
- Peut-on intervertir différentes étapes dans votre pipeline ? Que votre réponse soit oui ou non, expliquez par rapport à votre pipeline. 
```bash
Oui à condition que les dépendances soient installées avant exécution des scripts.
```
- Je veux ajouter un test de sécurité sur mon pipeline en exécutant le programme secure_app. Que devrais-je faire ?  Quelles questions devriez-vous vous poser ? 
```bash
Il suffit d'ajouter le script dans le package.json et de créer une étape dans le workflow qui lance le script avec npm. 
```
