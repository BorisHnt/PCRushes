window.PC_RUSH_REVIEWS = [
  {
    id: "rush-00",
    number: "00",
    shortTitle: "Rush 00",
    title: "Rush 00 - Square",
    focus: "Boucles, conditions, cas limites",
    duration: "Review courte",
    goal: "Compréhension collective",
    summary:
      "Une review de Rush 00 doit vérifier le rectangle, mais surtout la capacité de chaque membre à expliquer les conditions, les cas limites et sa contribution.",
    checklist: [
      "Demander comment va le groupe et comment le rush s’est passé.",
      "Vérifier le bon dépôt, le dossier ex00 et les trois fichiers attendus.",
      "Demander le prénom utilisé pour déterminer la variante du rush.",
      "Faire un tour rapide du code avant de lancer les tests.",
      "Demander qui a fait quoi et interroger plusieurs membres.",
      "Compiler avec les flags obligatoires et vérifier la Norme.",
      "Tester les dimensions normales, minimales et invalides.",
      "Garder du temps pour les questions et un feedback clair.",
    ],
    blocks: [
      {
        title: "Accueil et ressenti",
        kind: "Posture",
        tags: ["groupe", "ressenti", "cadre"],
        body: [
          "Commence par rassurer : la review sert à observer le travail, comprendre le raisonnement et transmettre des pistes de progression.",
          "Demande comment le week-end s’est déroulé, où chacun en est dans la Piscine et ce qui a été difficile.",
          "Le ressenti donne du contexte, mais ne remplace jamais les vérifications techniques.",
        ],
        questions: [
          "Comment ça va aujourd’hui ?",
          "Comment s’est passé le rush pour vous ?",
          "Qu’est-ce qui vous a pris le plus de temps ?",
          "Est-ce que vous avez une question avant de commencer ?",
        ],
        alert:
          "Si un problème humain important apparaît, écoute les faits sans mener toi-même une enquête pendant la review.",
        tutorNote:
          "Dédramatiser ne signifie pas minimiser : annonce un cadre calme, puis garde une review rigoureuse.",
      },
      {
        title: "Dossier, variante et compilation",
        kind: "Préflight",
        tags: ["ex00", "fichiers", "compilation", "Norme"],
        body: [
          "Vérifie que le terminal est placé dans le dépôt évalué et que le groupe présente bien son propre rendu.",
          "Le rendu attendu contient le main, la fonction d’affichage et le fichier de la variante assignée.",
          "La variante dépend du prénom choisi par le groupe : demande le prénom et refais rapidement le calcul.",
        ],
        commands:
          "pwd\nfind ex00 -maxdepth 1 -type f -printf '%f\\n' | sort\ncc -Wall -Wextra -Werror ex00/*.c\nnorminette ex00",
        questions: [
          "Quel prénom avez-vous choisi et quelle variante cela donne-t-il ?",
          "Pourquoi ces fichiers sont-ils séparés ?",
          "Quelle fonction est autorisée pour produire la sortie ?",
        ],
        tests: [
          "Compilation sans warning avec -Wall -Wextra -Werror.",
          "Absence de fichiers parasites utilisés pour contourner les contraintes.",
          "Nom de la fonction et prototype cohérents entre les fichiers.",
        ],
        alert:
          "Une compilation qui échoue est un problème bloquant. Ne corrige pas le code à leur place pendant l’évaluation.",
        tutorNote:
          "Vérifier le dépôt en premier évite de passer vingt minutes sur le mauvais dossier.",
      },
      {
        title: "Tour du code et répartition",
        kind: "Compréhension",
        tags: ["lead", "équipe", "explication"],
        body: [
          "Demande un tour du code en quelques minutes : point d’entrée, boucles, choix du caractère et sortie.",
          "Puis change de personne. Le lead ne doit pas être le seul capable d’expliquer.",
          "Comprendre vaguement en relisant n’est pas suffisant : chaque membre doit pouvoir reconstruire la logique essentielle.",
        ],
        questions: [
          "Qui a travaillé sur quelle partie ?",
          "Peux-tu refaire de mémoire la condition qui choisit un coin ?",
          "Que se passe-t-il avant le premier caractère et après le dernier ?",
          "Pourquoi votre boucle s’arrête-t-elle exactement ici ?",
        ],
        alert:
          "Si le lead a tout produit sans faire monter le groupe, nomme le problème de gestion de projet sans humilier la personne.",
        tutorNote:
          "Un meilleur leadership aurait parfois consisté à rendre moins de fonctionnalités, mais comprises et reproductibles par tout le groupe.",
      },
      {
        title: "Matrice de tests",
        kind: "Tests",
        tags: ["dimensions", "cas limites", "crash"],
        body: [
          "Les dimensions classiques ne suffisent pas. Les cas à une ligne ou une colonne révèlent les conditions mal ordonnées.",
          "Les dimensions nulles et négatives ne doivent ni afficher une forme incohérente, ni planter, ni boucler indéfiniment.",
          "Un grand rectangle permet de repérer les erreurs de compteur et les performances absurdes.",
        ],
        commands:
          "rush(5, 3)\nrush(5, 1)\nrush(1, 5)\nrush(1, 1)\nrush(2, 2)\nrush(0, 5)\nrush(5, 0)\nrush(-1, 4)\nrush(123, 42)",
        questions: [
          "Quelle condition traite le cas 1x1 ?",
          "Pourquoi le coin de droite n’est-il pas affiché deux fois ?",
          "Que choisissez-vous de faire pour une dimension invalide ?",
        ],
        tests: [
          "Largeur et hauteur standard.",
          "Une seule ligne.",
          "Une seule colonne.",
          "Une seule case.",
          "Valeurs nulles, négatives et grandes.",
        ],
        alert:
          "Ne te limite pas à comparer visuellement un seul exemple. Vérifie les retours à la ligne et les espaces avec un affichage explicite.",
        tutorNote:
          "Modifie le main pour tester, mais garde le rendu original intact.",
      },
      {
        title: "Questions C utiles",
        kind: "Transmission",
        tags: ["boucles", "conditions", "argc", "argv"],
        body: [
          "Les questions doivent partir du code présenté, pas réciter les Days de la Piscine.",
          "Profite des conditions de bord pour expliquer l’ordre des tests, les invariants de boucle et la séparation des responsabilités.",
          "Après Rush 00, argc et argv sont une bonne ouverture : ils permettront bientôt de fournir les dimensions depuis le terminal.",
        ],
        questions: [
          "Quelle différence entre une condition de coin, de bord et d’intérieur ?",
          "Qu’est-ce qui reste vrai à chaque tour de boucle ?",
          "Comment éviter de dupliquer la logique des cinq variantes ?",
          "À quoi servent argc et argv dans main ?",
        ],
        tests: [],
        alert:
          "Ne transforme pas la review en cours magistral déconnecté. Explique un concept, puis fais-le reformuler.",
        tutorNote:
          "Une optimisation pertinente améliore la lisibilité ou réduit la duplication ; raccourcir le code n’est pas automatiquement mieux.",
      },
      {
        title: "Commandes de contrôle Rush 00",
        kind: "Terminal",
        tags: ["cc", "cat -e", "diff", "tests"],
        body: [
          "Compile explicitement avec les flags du sujet, puis lance plusieurs dimensions en modifiant uniquement le main de test.",
          "cat -e rend les fins de ligne visibles et aide à repérer un espace ou un saut de ligne incorrect.",
          "diff permet de comparer la sortie obtenue à une sortie attendue sans se fier uniquement à l’œil.",
          "Les piscineux doivent savoir naviguer dans le dépôt, afficher leurs fichiers et relancer une compilation proprement.",
        ],
        commands:
          "pwd\nls -la\nfind ex00 -maxdepth 1 -type f -printf '%f\\n' | sort\ncc -Wall -Wextra -Werror ex00/main.c ex00/ft_putchar.c ex00/rush0X.c -o rush00\n./rush00 | cat -e\n./rush00 > actual.txt\ndiff -u expected.txt actual.txt\nnorminette ex00",
        questions: [
          "Que font -Wall, -Wextra et -Werror ?",
          "Pourquoi donner un nom à l’exécutable avec -o ?",
          "Que montre le symbole $ produit par cat -e ?",
          "Comment lire une différence affichée par diff -u ?",
        ],
        tests: [
          "Changer le main pour 5x3, 1x1, 1x5, 5x1, 0x5 et une valeur négative.",
          "Comparer une sortie exacte avec diff.",
          "Recompiler après chaque modification du main.",
        ],
        alert:
          "Ne conserve pas dans le rendu un main de test qui remplace accidentellement celui présenté par le groupe.",
        tutorNote:
          "Commandes à faire apprendre : pwd, ls, cd, find, cc, ./programme, cat -e et diff.",
      },
      {
        title: "Feedback de fin",
        kind: "Conclusion",
        tags: ["feedback", "progression", "forme"],
        body: [
          "Termine par les faits observés : ce qui fonctionne, ce qui est compris, ce qui doit être retravaillé.",
          "Distingue le résultat technique de la dynamique de groupe.",
          "Formule une prochaine action concrète pour chaque faiblesse importante.",
        ],
        questions: [
          "Qu’est-ce que vous referiez différemment sur le prochain rush ?",
          "Quel concept est maintenant plus clair ?",
          "Avez-vous une dernière question pour moi ?",
        ],
        alert:
          "Évaluer n’est pas corriger le projet. Tu peux expliquer un concept ou montrer une méthode de test, pas livrer la solution finale.",
        tutorNote:
          "Exemple : « Les cas simples fonctionnent et les boucles sont comprises. Revoyez ensemble les dimensions nulles et faites réécrire la condition de bord par chaque membre. »",
      },
    ],
  },
  {
    id: "rush-01",
    number: "01",
    shortTitle: "Rush 01",
    title: "Rush 01 - Sky Scraper",
    focus: "Parsing, backtracking, mémoire",
    duration: "Review approfondie",
    goal: "Raisonnement du solveur",
    summary:
      "Commence par le parsing et l’architecture. Le résultat 4x4 compte, mais la review doit établir comment les contraintes sont validées, comment le solveur explore et comment les erreurs remontent.",
    checklist: [
      "Demander le ressenti et la répartition du travail.",
      "Vérifier le dépôt, les fichiers, la compilation et la Norme.",
      "Tester le parsing avant toute grille valide.",
      "Faire résumer l’algorithme en deux phrases.",
      "Identifier la structure de données et les invariants.",
      "Faire expliquer récursivité, cas de base et valeurs de retour.",
      "Tester avec plusieurs grilles, dont une impossible.",
      "Vérifier malloc, NULL, free, crashs et fuites.",
    ],
    blocks: [
      {
        title: "Parsing en premier",
        kind: "Entrée",
        tags: ["argc", "argv", "format", "Error"],
        body: [
          "Le programme reçoit un seul argument utilisateur : argc doit donc valoir 2.",
          "Cet argument contient exactement 16 chiffres de 1 à 4, séparés par un espace simple.",
          "Le format canonique fait 31 caractères : chiffre aux indices pairs, espace aux indices impairs.",
          "Toute autre forme doit produire Error suivi d’un saut de ligne.",
        ],
        commands:
          "./rush-01\n./rush-01 \"4 3 2 1\"\n./rush-01 \"4 3 2 1 1 2 2 2 4 3 2 1 1 2 2 2\"\n./rush-01 \"4  3 2 1 1 2 2 2 4 3 2 1 1 2 2 2\"\n./rush-01 \"4 3 2 1 1 2 2 2 4 3 2 1 1 2 2 5\"\n./rush-01 \"4 3 2 1 1 2 2 2 4 3 2 1 1 2 2 2 \"",
        questions: [
          "Pourquoi argc doit-il valoir 2 et non 17 ?",
          "Comment prouvez-vous qu’il y a exactement 16 valeurs ?",
          "Où transformez-vous les caractères en entiers ?",
          "Quel code décide d’afficher Error ?",
        ],
        tests: [
          "Aucun argument, trop d’arguments.",
          "Trop peu ou trop de valeurs.",
          "Double espace, espace initial ou final.",
          "Caractère non numérique, 0 ou 5.",
        ],
        alert:
          "« 16 arguments » est une formulation trompeuse : il s’agit de 16 valeurs dans argv[1].",
        tutorNote:
          "Tester le parsing d’abord révèle vite l’architecture du programme et la qualité de la gestion d’erreur.",
      },
      {
        title: "Algorithme en deux phrases",
        kind: "Architecture",
        tags: ["solveur", "backtracking", "résumé"],
        body: [
          "Demande une explication courte avant d’entrer dans les fonctions.",
          "Une réponse solide décrit le placement d’une valeur candidate, la validation partielle, puis le retour arrière si la branche échoue.",
          "Si l’explication nécessite dix minutes de lecture du code, la compréhension globale est probablement fragile.",
        ],
        questions: [
          "Expliquez votre algorithme en deux phrases.",
          "Dans quel ordre remplissez-vous la grille ?",
          "Quand éliminez-vous une branche ?",
          "Comment savez-vous qu’une solution complète est valide ?",
        ],
        alert:
          "Ne confonds pas programme qui trouve une grille et solveur qui respecte toutes les contraintes de visibilité.",
        tutorNote:
          "La bonne explication doit relier parsing, représentation, recherche et affichage.",
      },
      {
        title: "Règles de la grille",
        kind: "Logique",
        tags: ["4x4", "unicité", "visibilité"],
        body: [
          "Chaque ligne et chaque colonne contient une fois chaque hauteur de 1 à 4.",
          "La visibilité compte une boîte lorsqu’elle dépasse toutes celles déjà vues depuis le bord concerné.",
          "Les contraintes haut, bas, gauche et droite doivent être lues dans le bon ordre.",
          "Une grille latine valide peut encore être fausse si les vues ne correspondent pas.",
        ],
        questions: [
          "Comment vérifiez-vous les doublons sur une ligne et une colonne ?",
          "Comment calculez-vous une visibilité de gauche à droite ?",
          "Quand une vue peut-elle être contrôlée avant que la ligne soit complète ?",
          "Que signifie une contrainte égale à 1 ? Et égale à 4 ?",
        ],
        tests: [
          "Grille avec lignes valides mais colonne en doublon.",
          "Grille latine dont une visibilité est fausse.",
          "Contraintes extrêmes 1 et 4.",
        ],
        alert:
          "Une validation seulement à la fin fonctionne parfois, mais explore beaucoup de branches inutiles.",
        tutorNote:
          "Challenge utile : demander une règle de pruning simple sans exiger une réécriture.",
      },
      {
        title: "Récursivité et valeurs de retour",
        kind: "Algorithme",
        tags: ["récursivité", "base case", "return"],
        body: [
          "La récursivité doit avoir un cas de base, une progression et un retour exploité.",
          "Dans un backtracking classique, le retour indique si la branche courante mène à une solution.",
          "Lorsqu’un candidat échoue, la case doit être remise dans son état vide avant d’essayer le suivant.",
          "Si aucune valeur ne convient, l’échec remonte à l’appel précédent.",
        ],
        questions: [
          "Quel est votre cas de base ?",
          "Pourquoi la récursion finit-elle toujours ?",
          "Que signifie 0 ou 1 dans le retour de cette fonction ?",
          "À quel endroit annulez-vous un choix ?",
          "Que se passe-t-il si aucune grille n’est faisable ?",
        ],
        alert:
          "Une fonction récursive sans progression visible ou dont le retour est ignoré mérite un test de terminaison immédiat.",
        tutorNote:
          "Fais dessiner trois niveaux d’appels plutôt que d’exiger une définition scolaire de la récursivité.",
      },
      {
        title: "Structure de données et pointeurs",
        kind: "C",
        tags: ["tableau", "pointeurs", "index"],
        body: [
          "La grille peut être un tableau fixe, un tableau aplati ou une allocation dynamique.",
          "Le choix doit être cohérent avec une taille connue de 4x4.",
          "Les pointeurs doivent être expliqués par ce qu’ils référencent, leur durée de vie et qui possède la mémoire.",
          "Un tableau aplati utilise souvent index = ligne * 4 + colonne.",
        ],
        questions: [
          "Quelle structure représente votre grille ?",
          "Pourquoi ce choix plutôt qu’un tableau local 4x4 ?",
          "Que contient ce pointeur exactement ?",
          "Qui alloue cette zone et qui doit la libérer ?",
          "Comment calculez-vous l’adresse d’une case ?",
        ],
        alert:
          "Ne challenge les pointeurs que jusqu’au niveau réellement utilisé par le projet.",
        tutorNote:
          "L’objectif est de vérifier qu’ils savent suivre une donnée, pas de tendre un piège de syntaxe.",
      },
      {
        title: "Stack, heap et malloc",
        kind: "Mémoire",
        tags: ["stack", "heap", "malloc", "free"],
        body: [
          "La stack contient notamment les variables locales et les contextes d’appel. Elle est automatique, rapide et limitée.",
          "La heap fournit une allocation dynamique contrôlée par le programme, mais elle n’est pas infinie.",
          "malloc retourne un pointeur ou NULL en cas d’échec, jamais -1.",
          "Toute allocation réussie doit avoir un propriétaire clair et être libérée sur chaque chemin de sortie.",
        ],
        questions: [
          "Avez-vous utilisé la stack ou la heap pour la grille ? Pourquoi ?",
          "Que faites-vous si malloc retourne NULL ?",
          "Quels retours anticipés peuvent oublier un free ?",
          "La récursivité consomme-t-elle de la stack ?",
        ],
        tests: [
          "Inspection de chaque malloc et de son test NULL.",
          "Recherche des free sur les chemins de succès et d’erreur.",
          "Exécution sous un outil de détection de fuites disponible sur le campus.",
        ],
        alert:
          "Une fuite n’est pas un crash, mais elle reste un défaut. Un accès invalide ou un double free est plus grave car il rend le comportement indéfini.",
        tutorNote:
          "Ne présente pas la heap comme infinie. Explique plutôt qu’elle permet une taille et une durée de vie dynamiques.",
      },
      {
        title: "Jeu de tests et générateur",
        kind: "Validation",
        tags: ["generator.py", "grilles", "impossible"],
        body: [
          "Demande si le groupe dispose du générateur de tests utilisé pendant la réunion de rush.",
          "Un générateur est utile pour multiplier les cas, mais ne remplace pas les tests ciblés de parsing.",
          "Le programme doit afficher la première solution trouvée pour une entrée valide et Error si aucune solution n’existe.",
        ],
        commands:
          "python3 generator.py\n./rush-01 \"4 3 2 1 1 2 2 2 4 3 2 1 1 2 2 2\"\n./rush-01 \"1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1\"",
        questions: [
          "Comment avez-vous vérifié que la grille imprimée respecte les 16 vues ?",
          "Votre solveur peut-il produire deux fois une hauteur dans une colonne ?",
          "Comment distinguez-vous entrée invalide et puzzle sans solution ?",
        ],
        tests: [
          "Cas valide connu.",
          "Plusieurs cas générés.",
          "Cas syntaxiquement valide mais impossible.",
          "Sortie avec espaces et sauts de ligne exacts.",
        ],
        alert:
          "Un générateur non compris peut donner une fausse confiance. Demande comment ses sorties ont été vérifiées.",
        tutorNote:
          "La review cherche la robustesse du solveur, pas le nombre de grilles lancées.",
      },
      {
        title: "Commandes de contrôle Rush 01",
        kind: "Terminal",
        tags: ["compilation", "timeout", "valgrind", "generator.py"],
        body: [
          "Compile exactement comme prévu par le sujet et garde les erreurs de parsing séparées des tests du solveur.",
          "timeout permet d’éviter qu’une récursion défaillante bloque indéfiniment la séance.",
          "Un outil mémoire peut révéler les accès invalides et les fuites, mais son nom dépend de la machine disponible.",
          "Les piscineux doivent savoir rediriger une sortie, lire un code de retour et répéter un test sans modifier le programme.",
        ],
        commands:
          "cc -Wall -Wextra -Werror -o rush-01 *.c\n./rush-01 2>&1 | cat -e\n./rush-01 \"4 3 2 1 1 2 2 2 4 3 2 1 1 2 2 2\" | cat -e\ntimeout 5s ./rush-01 \"1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1\"\necho $?\npython3 generator.py\nvalgrind --leak-check=full --track-origins=yes ./rush-01 \"4 3 2 1 1 2 2 2 4 3 2 1 1 2 2 2\"\nnorminette",
        questions: [
          "Que signifie 2>&1 dans cette commande ?",
          "À quoi sert echo $? juste après l’exécution ?",
          "Pourquoi ajouter une limite de temps à un solveur récursif ?",
          "Quelle différence entre une fuite et un accès mémoire invalide ?",
        ],
        tests: [
          "Parser seul avec entrées mal formées.",
          "Cas valide connu sous cat -e.",
          "Cas impossible avec timeout.",
          "Cas générés, puis contrôle mémoire sur un cas valide et un cas d’erreur.",
        ],
        alert:
          "valgrind peut ne pas être installé. Sur macOS, utilise l’outil mémoire fourni par l’environnement au lieu de prétendre que la commande est universelle.",
        tutorNote:
          "Commandes à faire apprendre : redirections, echo $?, timeout, python3, et lecture d’un rapport mémoire.",
      },
    ],
  },
  {
    id: "rush-02",
    number: "02",
    shortTitle: "Rush 02",
    title: "Rush 02 - Rosetta Stone",
    focus: "Fichiers, dictionnaire, grands nombres",
    duration: "Review approfondie",
    goal: "Parsing et décomposition",
    summary:
      "Rush 02 combine parsing d’arguments, lecture de fichier, dictionnaire modifiable, conversion de nombres arbitrairement grands et gestion stricte de la mémoire.",
    checklist: [
      "Demander le ressenti, la répartition et l’architecture globale.",
      "Vérifier le Makefile, l’exécutable rush-02 et les fonctions autorisées.",
      "Tester argc avec un nombre seul puis un dictionnaire personnalisé.",
      "Tester les nombres invalides, zéro et une valeur supérieure à unsigned int.",
      "Inspecter le parsing du dictionnaire et les erreurs de fichier.",
      "Faire expliquer la décomposition d’un grand nombre.",
      "Modifier les valeurs du dictionnaire et changer l’ordre des lignes.",
      "Vérifier malloc, NULL, fichiers fermés et mémoire libérée.",
    ],
    blocks: [
      {
        title: "Makefile et préflight",
        kind: "Construction",
        tags: ["Makefile", "rush-02", "règles"],
        body: [
          "Le dépôt doit contenir un Makefile et tous les fichiers nécessaires.",
          "La séquence make fclean puis make doit produire l’exécutable rush-02.",
          "Vérifie les règles principales, clean et fclean, ainsi que l’absence de relink inutile.",
          "Les appels système doivent rester dans la liste autorisée.",
        ],
        commands:
          "make fclean\nmake\nmake\nls -l rush-02\nnorminette\nfind . -maxdepth 2 -type f -printf '%P\\n' | sort",
        questions: [
          "Quelle est la cible par défaut de votre Makefile ?",
          "Que suppriment clean et fclean ?",
          "Où se trouve le dictionnaire utilisé par défaut ?",
          "Quels fichiers constituent votre architecture ?",
        ],
        tests: [
          "Compilation depuis un dépôt propre.",
          "Second make sans recompilation inutile.",
          "Suppression correcte des objets et de l’exécutable.",
        ],
        alert:
          "Un programme fonctionnel compilé à la main ne compense pas un Makefile inutilisable.",
        tutorNote:
          "Le préflight donne souvent une première lecture de la séparation parsing, dictionnaire et conversion.",
      },
      {
        title: "Arguments et validation du nombre",
        kind: "Entrée",
        tags: ["argc", "nombre", "Error"],
        body: [
          "Le programme accepte un nombre seul ou un chemin de dictionnaire suivi du nombre.",
          "Cela correspond à argc égal à 2 ou 3.",
          "Le zéro est explicitement attendu, malgré la formulation parfois ambiguë de nombre positif.",
          "La valeur à convertir doit être une chaîne de chiffres décimaux sans signe, point, lettre ni espace parasite.",
        ],
        commands:
          "./rush-02\n./rush-02 42\n./rush-02 numbers.dict 42\n./rush-02 0\n./rush-02 -1\n./rush-02 +42\n./rush-02 10.4\n./rush-02 \" 42\"\n./rush-02 42 extra extra",
        questions: [
          "Comment choisissez-vous l’argument qui contient le nombre ?",
          "Pourquoi ne suffit-il pas d’utiliser atoi sur toute la valeur ?",
          "Comment traitez-vous une chaîne vide ou un signe plus ?",
        ],
        tests: [
          "Aucun argument et trop d’arguments.",
          "Zéro.",
          "Signe, décimal, lettre, espace initial ou final.",
          "Nombre avec beaucoup de zéros initiaux.",
        ],
        alert:
          "Error concerne l’entrée numérique ou l’usage du programme. Dict Error concerne le dictionnaire ou l’impossibilité de résoudre.",
        tutorNote:
          "Demande au groupe de montrer l’endroit unique où la décision Error ou Dict Error est prise.",
      },
      {
        title: "Au-delà de unsigned int",
        kind: "Grand nombre",
        tags: ["string", "overflow", "décomposition"],
        body: [
          "Le sujet exige des valeurs plus grandes qu’un unsigned int.",
          "Le programme ne peut donc pas stocker toute l’entrée dans un type entier standard.",
          "La stratégie robuste conserve le nombre sous forme de chaîne et le découpe en groupes ou en positions.",
          "Chaque groupe peut ensuite être converti sans perdre les chiffres les plus significatifs.",
        ],
        questions: [
          "Quelle est la plus grande valeur que votre représentation accepte ?",
          "Où pourriez-vous provoquer un overflow ?",
          "Comment retirez-vous les zéros initiaux sans transformer zéro en chaîne vide ?",
          "Que se passe-t-il avec plusieurs centaines de chiffres ?",
        ],
        tests: [
          "4294967295 et 4294967296.",
          "Un nombre de plusieurs dizaines de chiffres.",
          "Une très longue chaîne de chiffres pour révéler une taille fixe.",
          "000000 et 000042.",
        ],
        alert:
          "Un long long repousse seulement la limite ; il ne satisfait pas une exigence de taille arbitraire.",
        tutorNote:
          "La question centrale : le comportement dépend-il du nombre de chiffres ou de la capacité d’un type C ?",
      },
      {
        title: "Lecture et parsing du dictionnaire",
        kind: "Fichier",
        tags: ["open", "read", "close", "format"],
        body: [
          "Le dictionnaire contient une clé numérique, des espaces optionnels autour du séparateur, puis une valeur imprimable.",
          "Les lignes peuvent être vides et les entrées peuvent apparaître dans n’importe quel ordre.",
          "Les espaces autour de la valeur doivent être retirés, sans détruire son contenu utile.",
          "Toute erreur d’ouverture, de lecture, de format ou de contenu nécessaire doit mener à Dict Error.",
        ],
        commands:
          "42: forty two\n42   :   forty two\n\n1000: thousand\n20: hey everybody !",
        questions: [
          "Comment détectez-vous le séparateur deux-points ?",
          "Que signifie traiter la clé comme atoi ?",
          "Que faites-vous d’une ligne vide ?",
          "Comment gérez-vous un read partiel ou une erreur de read ?",
          "Le descripteur est-il fermé sur tous les chemins ?",
        ],
        tests: [
          "Dictionnaire absent ou non lisible.",
          "Ligne sans deux-points, clé vide ou non numérique.",
          "Valeur vide après nettoyage.",
          "Espaces multiples et lignes vides.",
          "Entrées dans un ordre totalement différent.",
        ],
        alert:
          "Lire le fichier en une fois sans vérifier le retour de read peut masquer les erreurs et les fichiers plus grands que le buffer.",
        tutorNote:
          "Fais suivre une ligne depuis le buffer jusqu’à la structure finale.",
      },
      {
        title: "Clés obligatoires et valeurs personnalisées",
        kind: "Contrat",
        tags: ["dictionnaire", "clés", "valeurs"],
        body: [
          "Les clés de référence nécessaires doivent être présentes, mais leurs textes peuvent être modifiés.",
          "Le programme doit réellement utiliser les valeurs lues, pas des mots anglais codés en dur.",
          "Une entrée composite ajoutée, comme 54, ne doit pas court-circuiter la décomposition prévue avec les clés de référence.",
          "Si les clés disponibles ne permettent pas la conversion demandée, le résultat est Dict Error.",
        ],
        questions: [
          "Comment vérifiez-vous la présence des clés nécessaires ?",
          "Que se passe-t-il si la valeur associée à 20 change ?",
          "Utilisez-vous une entrée ajoutée 54 ou décomposez-vous en 50 et 4 ?",
          "Comment trouvez-vous la bonne puissance de mille ?",
        ],
        tests: [
          "Modifier la valeur de 20 et convertir 20 puis 21.",
          "Ajouter une entrée 54 et vérifier la décomposition attendue.",
          "Supprimer une clé requise.",
          "Dupliquer une clé pour observer la politique choisie.",
        ],
        alert:
          "Une table de mots codée dans le C échoue dès que le dictionnaire est personnalisé.",
        tutorNote:
          "Le sujet garantit certaines propriétés du dictionnaire, mais la review peut tester les erreurs que le programme prétend gérer.",
      },
      {
        title: "Décomposer le nombre",
        kind: "Algorithme",
        tags: ["groupes de trois", "centaines", "échelles"],
        body: [
          "Une méthode courante découpe le nombre en groupes de trois chiffres depuis la droite.",
          "Chaque groupe se traite en centaines, dizaines et unités, puis reçoit son échelle : mille, million et suivantes.",
          "Les groupes égaux à zéro ne doivent pas produire de mot inutile.",
          "Le cas zéro est spécial car aucune décomposition non vide ne le produira naturellement.",
        ],
        commands:
          "1 234 567\n-> [1] million [234] thousand [567]\n\n234\n-> 2 hundred + 30 + 4",
        questions: [
          "Pourquoi découper depuis la droite ?",
          "Comment associez-vous un groupe à son échelle ?",
          "Que faites-vous avec 100000, 100001 et 100100 ?",
          "Comment évitez-vous d’afficher une échelle pour un groupe nul ?",
        ],
        tests: [
          "0, 7, 10, 11, 20, 21, 99.",
          "100, 101, 110, 115, 999.",
          "1000, 1001, 1010, 1100.",
          "100000, 100001, 1000000.",
        ],
        alert:
          "Les zéros internes révèlent les algorithmes qui concatènent mécaniquement toutes les positions.",
        tutorNote:
          "Demande une trace manuelle sur 1 005 010 : elle expose rapidement la logique des groupes nuls.",
      },
      {
        title: "Espaces et sortie exacte",
        kind: "Affichage",
        tags: ["write", "espaces", "newline"],
        body: [
          "La sortie doit contenir les mots utiles, séparés proprement et terminés par un saut de ligne.",
          "Les espaces en début ou en fin de valeur du dictionnaire sont retirés.",
          "L’assemblage final ne doit pas produire de double espace ni d’espace terminal.",
          "Les valeurs personnalisées doivent rester reconnaissables dans la sortie.",
        ],
        commands:
          "./rush-02 42 | cat -e\n./rush-02 100000 | cat -e\n./rush-02 custom.dict 20 | cat -e",
        questions: [
          "Qui décide d’ajouter un espace ?",
          "Comment évitez-vous l’espace final ?",
          "Écrivez-vous au fil du calcul ou construisez-vous une sortie ?",
        ],
        tests: [
          "Sorties courtes et longues avec cat -e.",
          "Valeur de dictionnaire entourée de nombreux espaces.",
          "Valeur contenant plusieurs mots.",
        ],
        alert:
          "Une conversion correcte avec une sortie mal espacée reste un résultat incorrect.",
        tutorNote:
          "Une fonction d’émission qui connaît l’état « premier mot » simplifie souvent l’espacement.",
      },
      {
        title: "Commandes de contrôle Rush 02",
        kind: "Terminal",
        tags: ["make", "grep", "sed", "fichiers", "mémoire"],
        body: [
          "Travaille sur une copie du dictionnaire lorsque tu modifies ses valeurs pour les tests.",
          "grep aide à retrouver une clé, sed ou un éditeur permet de préparer une variation contrôlée, et cmp ou diff vérifie les fichiers.",
          "Teste séparément la construction, l’ouverture du fichier, le parsing, la conversion et le nettoyage mémoire.",
          "Les piscineux doivent comprendre les permissions, les descripteurs de fichier et les codes de retour de make et du programme.",
        ],
        commands:
          "make fclean && make\nmake\n./rush-02 42 | cat -e\ncp numbers.dict /tmp/review-numbers.dict\ngrep -n '^20[[:space:]]*:' /tmp/review-numbers.dict\nsed -i 's/^20[[:space:]]*:.*$/20 : hey everybody !/' /tmp/review-numbers.dict\n./rush-02 /tmp/review-numbers.dict 20 | cat -e\n./rush-02 missing.dict 42 | cat -e\nchmod a-r /tmp/review-numbers.dict\n./rush-02 /tmp/review-numbers.dict 42 | cat -e\nchmod a+r /tmp/review-numbers.dict\nvalgrind --leak-check=full --track-fds=yes ./rush-02 100000\necho $?",
        questions: [
          "Pourquoi tester sur une copie du dictionnaire ?",
          "Que cherche l’expression régulière donnée à grep ?",
          "Quelle différence entre une erreur open et une erreur de format ?",
          "Pourquoi vérifier aussi les descripteurs de fichier ouverts ?",
        ],
        tests: [
          "make deux fois pour repérer un relink.",
          "Dictionnaire personnalisé sans modifier l’original.",
          "Fichier absent, illisible puis de nouveau lisible.",
          "Succès, Error et Dict Error sous l’outil mémoire.",
        ],
        alert:
          "La syntaxe de sed -i varie selon les systèmes. Prépare le fichier manuellement si nécessaire et restaure toujours ses permissions.",
        tutorNote:
          "Commandes à faire apprendre : make, cp, grep, chmod, cat -e, redirections et inspection mémoire.",
      },
      {
        title: "Mémoire et chemins d’erreur",
        kind: "Robustesse",
        tags: ["malloc", "free", "NULL", "cleanup"],
        body: [
          "Le parsing de fichier crée souvent plusieurs allocations : buffer, lignes, clés, valeurs et structure de dictionnaire.",
          "Chaque malloc doit être vérifié contre NULL.",
          "Une erreur au milieu du parsing doit libérer tout ce qui a déjà été construit et fermer le fichier.",
          "La conversion répétée ne doit ni modifier irrémédiablement le dictionnaire, ni libérer une valeur encore référencée.",
        ],
        questions: [
          "Qui possède chaque chaîne du dictionnaire ?",
          "Quelle fonction nettoie une structure partiellement construite ?",
          "Que se passe-t-il si le troisième malloc échoue ?",
          "Fermez-vous le fichier avant chaque retour d’erreur ?",
        ],
        tests: [
          "Outil de détection de fuites sur succès, Error et Dict Error.",
          "Recherche des retours anticipés après open ou malloc.",
          "Dictionnaire volumineux pour révéler les buffers fixes.",
        ],
        alert:
          "Tester seulement le chemin nominal laisse souvent les fuites dans les branches d’erreur.",
        tutorNote:
          "Une fonction cleanup centralisée est souvent plus fiable qu’une série de free dispersés.",
      },
    ],
  },
  {
    id: "toolbox",
    number: "TB",
    shortTitle: "Toolbox",
    title: "Toolbox du tuteur",
    focus: "Posture, feedback, escalade",
    duration: "À consulter au besoin",
    goal: "Review utile et sûre",
    summary:
      "Des repères communs pour conduire la séance, jauger sans piéger, transmettre sans corriger le projet et remonter les situations qui dépassent le cadre de la review.",
    checklist: [
      "Installer un cadre calme et expliquer le déroulé.",
      "Faire parler plusieurs membres, pas uniquement le lead.",
      "Séparer faits observés, interprétation et conseil.",
      "Tester avant d’enseigner ou d’optimiser.",
      "Ne pas humilier, diagnostiquer ni arbitrer seul un conflit.",
      "Ne pas fournir une solution complète pendant l’évaluation.",
      "Faire remonter immédiatement les situations sensibles au bon interlocuteur.",
      "Terminer par un feedback actionnable et laisser des questions.",
    ],
    blocks: [
      {
        title: "Déroulé universel d’une review",
        kind: "Trame",
        tags: ["accueil", "tests", "conclusion"],
        body: [
          "Commence par l’humain, puis le dépôt, puis l’explication, puis les tests.",
          "Cette séquence évite de juger la dynamique du groupe uniquement à partir du code.",
          "Les questions techniques viennent après une première compréhension de l’architecture.",
          "La conclusion reprend les réussites, les risques et la prochaine étape.",
        ],
        commands:
          "1. Comment ça va ?\n2. Ressenti sur le rush\n3. Bon dépôt et bons fichiers\n4. Tour du code et répartition\n5. Compilation, Norme, tests\n6. Questions techniques\n7. Questions du groupe\n8. Feedback",
        questions: [
          "Est-ce que vous avez des questions pour moi ?",
          "Quel choix vous semble aujourd’hui le plus fragile ?",
          "Qu’avez-vous réellement appris ensemble ?",
        ],
        alert:
          "Ne saute pas directement aux tests : tu perdrais des informations importantes sur la compréhension et la coopération.",
        tutorNote:
          "Une trame stable libère de l’attention pour observer les personnes et les détails techniques.",
      },
      {
        title: "Jauger sans piéger",
        kind: "Pédagogie",
        tags: ["questions", "niveau", "progression"],
        body: [
          "Pose d’abord une question ouverte, puis demande un exemple dans leur code.",
          "Ajuste la profondeur à ce qu’ils ont réellement utilisé.",
          "Une bonne question permet de montrer une compréhension ; une devinette cherche surtout à faire échouer.",
          "Si une personne bloque, reformule une fois avant de conclure qu’elle ne maîtrise pas.",
        ],
        questions: [
          "Peux-tu me montrer où cette décision est prise ?",
          "Que contient cette variable à ce moment précis ?",
          "Que se passerait-il avec cette entrée différente ?",
          "Peux-tu le redire avec tes mots ?",
        ],
        alert:
          "Ne fais pas descendre le groupe à ton niveau de vocabulaire. Fais monter sa compréhension à partir de son code.",
        tutorNote:
          "Cherche une preuve de raisonnement, pas une formulation parfaite.",
      },
      {
        title: "Quand le lead a tout fait",
        kind: "Équipe",
        tags: ["leadership", "gap technique", "répartition"],
        body: [
          "Le problème n’est pas seulement que le travail a été mal réparti : le groupe a perdu une occasion d’apprentissage.",
          "Interroge plusieurs membres sur une partie centrale et demande une reconstruction simple.",
          "Explique qu’un lead doit organiser la montée en compétence, pas seulement produire puis faire relire.",
          "Un périmètre plus petit mais maîtrisé par tous aurait parfois été préférable.",
        ],
        questions: [
          "Quelle partie pourrais-tu réécrire sans regarder ?",
          "Comment le groupe a-t-il partagé les explications ?",
          "Qu’auriez-vous pu simplifier pour que tout le monde participe ?",
        ],
        alert:
          "Critique le fonctionnement observé, pas la valeur personnelle du lead ou des membres moins avancés.",
        tutorNote:
          "Formulation utile : « Le rendu avance, mais la compréhension n’a pas circulé. Au prochain rush, prévoyez des points de transmission et une partie réécrite par chacun. »",
      },
      {
        title: "Évaluer sans corriger",
        kind: "Limite",
        tags: ["solution", "concept", "optimisation"],
        body: [
          "La review vérifie le rendu tel qu’il existe.",
          "Tu peux expliquer un concept, montrer une méthode de diagnostic et proposer une direction d’amélioration.",
          "Tu ne dois pas transformer la séance en pair-programming qui répare le projet évalué.",
          "Les optimisations viennent après les tests et la compréhension, jamais pour sauver un rendu.",
        ],
        questions: [
          "Quel test permettrait d’isoler ce problème ?",
          "Quelle responsabilité pourrait être séparée ici ?",
          "Quel invariant rendrait cette boucle plus facile à vérifier ?",
        ],
        alert:
          "Donner le patch exact empêche d’observer ce que le groupe sait réellement faire.",
        tutorNote:
          "Explique le principe sur un mini-exemple différent si le concept mérite une démonstration.",
      },
      {
        title: "Triche ou travail non attribuable",
        kind: "Escalade",
        tags: ["triche", "preuve", "pédagogie"],
        body: [
          "Si tu observes des indices sérieux de triche ou un travail que personne ne peut expliquer, reste factuel.",
          "Note les éléments observables : incohérences, réponses, fichiers ou circonstances.",
          "Ne mène pas un interrogatoire, ne menace pas et ne prononce pas seul une sanction.",
          "Transmets la situation à l’équipe pédagogique selon le canal prévu.",
        ],
        questions: [
          "Pouvez-vous expliquer comment cette partie a été construite ?",
          "Qui peut modifier cette logique devant moi et expliquer le résultat ?",
          "Quelles ressources avez-vous utilisées ?",
        ],
        alert:
          "Un niveau faible ou une mauvaise explication ne prouvent pas automatiquement une triche.",
        tutorNote:
          "Mail ou signalement pédagogique : faits datés, formulations neutres, aucune conclusion spéculative.",
      },
      {
        title: "Conflit d’équipe ou problème avec un tuteur",
        kind: "Escalade",
        tags: ["conflit", "staff", "sécurité"],
        body: [
          "Écoute brièvement chaque personne sans promettre une résolution immédiate.",
          "Distingue un désaccord de méthode, un conflit persistant et un comportement inacceptable.",
          "Si la situation a mal tourné avec l’équipe ou un tuteur, préviens le staff.",
          "En cas de menace, harcèlement, discrimination ou risque immédiat, interromps la séance et cherche de l’aide sans attendre.",
        ],
        questions: [
          "Quels faits précis se sont produits ?",
          "Est-ce que la situation continue maintenant ?",
          "Avez-vous déjà prévenu un membre du staff ?",
        ],
        alert:
          "Ne demande pas à une personne de raconter publiquement des détails sensibles devant tout le groupe.",
        tutorNote:
          "Le rôle du tuteur est de sécuriser et transmettre, pas de devenir médiateur officiel ou enquêteur.",
      },
      {
        title: "Feedback clair et exhaustif",
        kind: "Communication",
        tags: ["faits", "impact", "action"],
        body: [
          "Un feedback utile suit une structure simple : observation, impact, prochaine action.",
          "Commence par ce qui est réellement acquis, sans compliment générique.",
          "Nomme ensuite les risques techniques ou collectifs avec des exemples.",
          "Termine par une action réalisable avant le prochain rush.",
        ],
        commands:
          "Observation : « Les cas standards passent et deux membres expliquent les boucles. »\nImpact : « Les dimensions nulles bouclent, donc la fonction n’est pas robuste. »\nAction : « Ajoutez une garde d’entrée et faites-la réécrire par chaque membre. »",
        questions: [
          "Le groupe sait-il exactement ce qu’il doit retravailler ?",
          "Ai-je distingué le code, la compréhension et l’organisation ?",
          "Mon feedback contient-il une action concrète ?",
        ],
        alert:
          "Évite les jugements vagues comme « mauvais niveau », « pas sérieux » ou « code sale » sans fait précis.",
        tutorNote:
          "Mettre les formes ne signifie pas diluer le message. Sois direct sur le comportement observé et respectueux envers les personnes.",
      },
      {
        title: "Mémo commandes Unix et C",
        kind: "Référence",
        tags: ["shell", "git", "compilation", "debug"],
        body: [
          "Ces commandes forment une boîte à outils minimale pour comprendre où l’on se trouve, ce qui sera évalué et comment reproduire un problème.",
          "Le piscineux doit pouvoir expliquer la commande avant de la lancer, surtout lorsqu’elle modifie ou supprime des fichiers.",
          "Les redirections permettent de conserver une sortie, de comparer deux exécutions et de séparer sortie standard et erreurs.",
          "git status et git diff servent à vérifier ce qui appartient réellement au rendu.",
        ],
        commands:
          "pwd\nls -la\ncd ex00\nfind . -maxdepth 2 -type f -print\nfile ./rush-01\nwc -l *.c\ngrep -RIn \"malloc\\|free\\|return\" .\ncc -Wall -Wextra -Werror *.c -o programme\n./programme > output.txt 2> errors.txt\n./programme 2>&1 | cat -e\necho $?\ndiff -u expected.txt output.txt\ngit status --short\ngit diff --check\ngit diff\nnorminette",
        questions: [
          "Quelle différence entre >, >>, 2> et 2>&1 ?",
          "Pourquoi git diff --check est-il utile avant un rendu ?",
          "Que montre file sur un exécutable ?",
          "Pourquoi grep n’est-il qu’une aide et pas une preuve de correction ?",
        ],
        tests: [
          "Faire retrouver le dossier courant et les fichiers évalués.",
          "Faire compiler sans copier-coller la commande.",
          "Faire capturer puis comparer une sortie.",
          "Faire identifier les modifications non commitées.",
        ],
        alert:
          "Évite les commandes destructrices pendant une review. N’utilise pas rm, git reset ou git checkout pour nettoyer le dépôt d’un groupe.",
        tutorNote:
          "Le but n’est pas de mémoriser toutes les options, mais de savoir construire une démarche reproductible.",
      },
      {
        title: "Corrections techniques à garder en tête",
        kind: "Référence",
        tags: ["malloc", "argc", "stack", "heap"],
        body: [
          "Rush 01 reçoit un argument contenant 16 valeurs : argc vaut 2.",
          "malloc renvoie NULL en cas d’échec, pas -1.",
          "La stack est automatique et limitée ; la heap est dynamique, contrôlée et également limitée.",
          "Une fuite mémoire, un accès invalide et un crash sont trois défauts différents.",
          "Les règles précises de notation viennent du barème actif ; ne les invente pas à partir d’une habitude.",
        ],
        questions: [],
        tests: [],
        alert:
          "Quand une note de réunion et le sujet semblent se contredire, reviens au sujet et au barème disponibles le jour de la review.",
        tutorNote:
          "Cette toolbox aide à préparer la review ; elle ne remplace pas les consignes officielles qui peuvent évoluer.",
      },
      {
        title: "Tu as le droit d’être en train d’apprendre",
        kind: "Pour toi",
        tags: ["syndrome de l’imposteur", "confiance", "progression"],
        body: [
          "Si tu as parfois l’impression d’être une fraude, de ne pas avancer assez vite ou de ne pas être à la hauteur, cette impression n’est pas une preuve.",
          "Tu es dans un environnement conçu pour te confronter à des choses que tu ne sais pas encore faire. Bloquer, demander de l’aide, recommencer et découvrir qu’une autre personne a compris plus vite font partie du parcours.",
          "Tu n’as pas besoin de tout savoir pour avoir ta place ici. Ta valeur ne se mesure ni à la vitesse de ton voisin, ni à une review difficile, ni à un programme qui refuse de compiler à deux heures du matin.",
          "Regarde les faits : ce que tu comprends aujourd’hui et que tu ne comprenais pas hier, les erreurs que tu sais maintenant diagnostiquer, les questions que tu oses poser et les personnes que tu aides à ton tour.",
          "Être compétent ne signifie pas ne jamais douter. Cela signifie continuer à apprendre, vérifier ce que l’on croit savoir et accepter de ne pas encore avoir toutes les réponses."
        ],
        questions: [
          "Qu’est-ce que je sais faire aujourd’hui que je ne savais pas faire en arrivant ?",
          "Quel petit progrès concret ai-je fait cette semaine ?",
          "À qui puis-je demander de l’aide sans rester seul avec ce doute ?"
        ],
        tests: [],
        alert:
          "Si ce sentiment devient envahissant, t’isole ou te fait souffrir durablement, parle-en à une personne de confiance, au staff ou à un professionnel. Tu n’as pas à porter ça seul.",
        tutorNote:
          "Tu n’es pas ici parce que tu sais déjà tout faire. Tu es ici pour apprendre à faire des choses qui te semblaient impossibles. Avance une étape après l’autre : tu as ta place."
      },
    ],
  },
];
