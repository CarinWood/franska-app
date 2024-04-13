 export const eithArray = [
    { id: 1, fr: "la forme", sv: "form" },
    { id: 2, fr: "l'émotion", sv: "känsla" },
  /*   { id: 3, fr: "la santé", sv: "hälsa, sundhet" },
    { id: 4, fr: "le sport", sv: "idrott, sport" },
    { id: 5, fr: "exprimer", sv: "uttrycka" },
    { id: 6, fr: "le désaccord", sv: "oenighet, osämja" },
    { id: 7, fr: "le conseil", sv: "råd" },
    { id: 8, fr: "malade", sv: "sjuk" },
    { id: 9, fr: "mal", sv: "ont" },
    { id: 10, fr: "avoir mal à", sv: "ha ont i" },
    { id: 11, fr: "le médecin", sv: "läkare (m)" },
    { id: 11, fr: "la médecin", sv: "läkare (f)" },
    { id: 12, fr: "la recherche", sv: "forskning" },
    { id: 13, fr: "la soluton", sv: "lösning" },
    { id: 14, fr: "comprendre", sv: "förstå" },
    { id: 15, fr: "sans", sv: "utan" },
    { id: 16, fr: "inquiet", sv: "orolig (m)" },
    { id: 16, fr: "inquiète", sv: "orolig (f)" },
    { id: 17, fr: "l'exercice", sv: "övning" },
    { id: 18, fr: "muscler", sv: "bygga upp muskler" },
    { id: 19, fr: "le ventre", sv: "mage" },
    { id: 20, fr: "le bras", sv: "arm" },
    { id: 21, fr: "le dos", sv: "rygg" },
    { id: 22, fr: "la jambe", sv: "ben" },
    { id: 23, fr: "se sentir", sv: "känna sig" },
    { id: 24, fr: "heureux", sv: "lycklig (m)" },
    { id: 24, fr: "heureuse", sv: "lycklig (f)" },
    { id: 25, fr: "malheureux", sv: "olycklig (m)" },
    { id: 25, fr: "malheureuse", sv: "olycklig (f)" },
    { id: 26, fr: "le rendez-vous", sv: "möte, träff" },
    { id: 27, fr: "le spécialiste", sv: "specialist" },
    { id: 28, fr: "positif", sv: "positiv (m)" },
    { id: 28, fr: "positive", sv: "positiv (f)" },
    { id: 29, fr: "le sommeil", sv: "sömn" },
    { id: 30, fr: "le médicament", sv: "medicin, läkemedel" },
    { id: 31, fr: "la relaxation", sv: "avslappning" },
    { id: 32, fr: "La respiration", sv: "andning" },
    { id: 33, fr: "respirer", sv: "andas" },
    { id: 34, fr: "la bouche", sv: "mun" },
    { id: 35, fr: "la main", sv: "hand" },
    { id: 36, fr: "par", sv: "genom" },
    { id: 37, fr: "content", sv: "nöjd, glad (m)" },
    { id: 37, fr: "contente", sv: "nöjd, glad (f)" },
    { id: 38, fr: "tester", sv: "testa, pröva" },
    { id: 39, fr: "le rêve", sv: "dröm" },
    { id: 40, fr: "triste", sv: "ledsen" },
    { id: 41, fr: "fatigué", sv: "trött (m)" },
    { id: 41, fr: "fatiguée", sv: "trött (f)" },
    { id: 42, fr: "stressé", sv: "stressad (m)" },
    { id: 42, fr: "stressée", sv: "stressad (f)" },
    { id: 43, fr: "le docteur", sv: "doktor (m)" },
    { id: 43, fr: "la docteure", sv: "doktor (f)" },
    { id: 44, fr: "à distance", sv: "på distans" },
    { id: 45, fr: "la gorge", sv: "strupe, hals, svalg" },
    { id: 46, fr: "la tête", sv: "huvud" },
    { id: 47, fr: "l'oreille", sv: "öra" },
    { id: 48, fr: "le genou", sv: "knä" },
    { id: 49, fr: "la radio", sv: "röntgen" },
    { id: 50, fr: "boire", sv: "dricka" },
    { id: 51, fr: "la toux", sv: "hosta" },
    { id: 52, fr: "la fièvre", sv: "feber" },
    { id: 53, fr: "le sirop", sv: "sirap" },
    { id: 54, fr: "la grippe", sv: "influensa" },
    { id: 55, fr: "le poids", sv: "vikt, tyngd" },
    { id: 56, fr: "la taille", sv: "längd, storlek" },
    { id: 57, fr: "mesurer", sv: "mäta" },
    { id: 58, fr: "le rhume", sv: "förkylning" },
    { id: 59, fr: "encore", sv: "ännu, fortfarande, ytterligare" },
    { id: 60, fr: "décrire", sv: "beskriva" },
    { id: 61, fr: "le moral", sv: "kampvilja" },
    { id: 62, fr: "nager", sv: "simma" },
    { id: 63, fr: "le travail", sv: "arbete" },
    { id: 64, fr: "travailler", sv: "arbeta" },
    { id: 65, fr: "l'hôpital", sv: "sjukhus" },
    { id: 66, fr: "le pharmacien", sv: "apotekare (m)" },
    { id: 66, fr: "la pharmacienne", sv: "apotekare (f)" },
    { id: 67, fr: "la pharmacie", sv: "apotek" },
    { id: 68, fr: "la dent", sv: "tand" },
    { id: 69, fr: "le dentiste", sv: "tandläkare" },
    { id: 70, fr: "remplacer", sv: "ersätta" },
    { id: 71, fr: "l'œil, les yeux", sv: "öga" },
    { id: 71, fr: "les yeux", sv: "ögon" },
    { id: 72, fr: "le mètre", sv: "meter" },
    { id: 73, fr: "le kilo", sv: "kilo" },
    { id: 74, fr: "tousser", sv: "hosta" },
    { id: 75, fr: "le paracétamol", sv: "paracetamol" },
    { id: 76, fr: "la vitamine", sv: "vitamin" },
    { id: 77, fr: "la visite à domicile", sv: "hembesök" },
    { id: 78, fr: "le domicile", sv: "hemvist, bostad, hemort" },
    { id: 79, fr: "l'infirmie", sv: "sjuksköterska (m)" },
    { id: 79, fr: "l'infirmière", sv: "sjuksköterska (f)" },
    { id: 80, fr: "communiquer", sv: "kommunicera" },
    { id: 81, fr: "la comédie", sv: "komedi" },
    { id: 82, fr: "la pièce de théâtre", sv: "teaterpjäs" },
    { id: 83, fr: "drôle", sv: "rolig, lustig" },
    { id: 84, fr: "amusant", sv: "rolig, underhållande" },
    { id: 85, fr: "le réalisateur", sv: "regissör (m)" },
    { id: 85, fr: "la réalisatrice", sv: "regissör (f)" },
    { id: 86, fr: "le visionnage", sv: "granskning, visning (av film)" },
    { id: 87, fr: "au total", sv: "sammanlagt, totalt" },
    { id: 88, fr: "le bien-être", sv: "välbefinnande" },
    { id: 89, fr: "l'espace", sv: "yta, mellanrum" },
    { id: 90, fr: "l'appareil", sv: "apparat" },
    { id: 91, fr: "l'utilisation", sv: "användning" },
    { id: 92, fr: "laisser", sv: "låta, lämna, överge" },
    { id: 93, fr: "la valeur", sv: "värde" },
    { id: 94, fr: "le bijou", sv: "smycke" },
    { id: 94, fr: "les bijoux", sv: "smycken" },
    { id: 95, fr: "le vestiaire", sv: "omklädningsrum" },
    { id: 96, fr: "la serviette", sv: "handduk" },
    { id: 97, fr: "le sauna", sv: "bastu" },
    { id: 98, fr: "le maillot de bain", sv: "baddräkt" },
    { id: 99, fr: "la tranquillité", sv: "lugn, stillhet" },
    { id: 100, fr: "netoyer", sv: "rengöra" },
    { id: 101, fr: "pour", sv: "för" },
    { id: 102, fr: "contre", sv: "mot" },
    { id: 103, fr: "le certificat médical", sv: "läkarintyg" },
    { id: 104, fr: "sain", sv: "sund, frisk, hälsosam" },
    { id: 105, fr: "servir à quelque chose", sv: "vara till nytta för" },
    { id: 106, fr: "la barre de céréales", sv: "müslibar" },
    { id: 107, fr: "alimentaire", sv: "närings-, livsmedels-, mat-" },
    { id: 108, fr: "partager", sv: "dela" },
    { id: 109, fr: "le besoin", sv: "behov" },
    { id: 110, fr: "l'aliment", sv: "födoämne" },
    { id: 111, fr: "avoir raison", sv: "ha rätt" },
    { id: 112, fr: "avoir tort", sv: "ha fel" },
    { id: 113, fr: "éteindre", sv: "släcka, slå av" },
    { id: 114, fr: "devoir", sv: "vara tvungen" },
    { id: 115, fr: "gras", sv: "fet (m)" },
    { id: 115, fr: "grasse", sv: "fet (f)" },
    { id: 116, fr: "sucré", sv: "söt (m)" },
    { id: 116, fr: "sucrée", sv: "söt (f)" },
    { id: 117, fr: "l'adulte", sv: "vuxen" },
    { id: 118, fr: "durer", sv: "vara, räcka" },
    { id: 119, fr: "le footing", sv: "jogging" },
    { id: 120, fr: "adapter", sv: "anpassa" },
    { id: 121, fr: "la manière", sv: "sätt" },
    { id: 122, fr: "salé", sv: "salt" },
    { id: 123, fr: "la course à pied", sv: "löpning, jogging" },
    { id: 124, fr: "la mamie", sv: "mormor, farmor" },
    { id: 125, fr: "le papi", sv: "morfar, farfar" },
    { id: 126, fr: "le contrôle", sv: "kontroll" },
    { id: 127, fr: "au fait", sv: "för övrigt, apropå" },
    { id: 128, fr: "l'examen", sv: "examen, prov, gransning" },
    { id: 129, fr: "le paquet", sv: "paket" },
    { id: 130, fr: "laver", sv: "tvätta, rengöra" } */
  ];
  

  export const EithMatchArray = [
    { id: 1, fr: "la forme", sv: "form" },
    { id: 2, fr: "l'émotion", sv: "känsla" },
    { id: 3, fr: "la santé", sv: "hälsa" },
    { id: 4, fr: "le sport", sv: "sport" },
    { id: 5, fr: "exprimer", sv: "uttrycka" },
    // { id: 6, fr: "le désaccord", sv: "oenighet" },
    // { id: 7, fr: "le conseil", sv: "råd" },
    // { id: 8, fr: "malade", sv: "sjuk" },
    // { id: 9, fr: "mal", sv: "ont" },
    // { id: 10, fr: "avoir mal à", sv: "ha ont i" },
    // { id: 11, fr: "le médecin", sv: "läkare" },
    // { id: 12, fr: "la recherche", sv: "forskning" },
    // { id: 13, fr: "la soluton", sv: "lösning" },
    // { id: 14, fr: "comprendre", sv: "förstå" },
    // { id: 15, fr: "sans", sv: "utan" },
    // { id: 16, fr: "inquiet", sv: "orolig" },
    // { id: 17, fr: "l'exercice", sv: "övning" },
    // { id: 19, fr: "le ventre", sv: "mage" },
    // { id: 20, fr: "le bras", sv: "arm" },
    // { id: 21, fr: "le dos", sv: "rygg" },
    // { id: 22, fr: "la jambe", sv: "ben" },
    // { id: 23, fr: "se sentir", sv: "känna sig" },
    // { id: 24, fr: "heureux", sv: "lycklig" },
    // { id: 25, fr: "malheureux", sv: "olycklig" },
    // { id: 26, fr: "le rendez-vous", sv: "möte" },
    // { id: 27, fr: "le spécialiste", sv: "specialist" },
    // { id: 28, fr: "positif", sv: "positiv" },
    // { id: 29, fr: "le sommeil", sv: "sömn" },
    // { id: 30, fr: "le médicament", sv: "medicin" },
    // { id: 31, fr: "la relaxation", sv: "avslappning" },
    // { id: 32, fr: "La respiration", sv: "andning" },
    // { id: 33, fr: "respirer", sv: "andas" },
    // { id: 34, fr: "la bouche", sv: "mun" },
    // { id: 35, fr: "la main", sv: "hand" },
    // { id: 36, fr: "par", sv: "genom" },
    // { id: 37, fr: "content", sv: "nöjd, glad" },
    // { id: 38, fr: "tester", sv: "testa" },
    // { id: 39, fr: "le rêve", sv: "dröm" },
    // { id: 40, fr: "triste", sv: "ledsen" },
    // { id: 41, fr: "fatigué", sv: "trött" },
    // { id: 42, fr: "stressé", sv: "stressad" },
    // { id: 43, fr: "le docteur", sv: "doktor" },
    // { id: 44, fr: "à distance", sv: "på distans" },
    // { id: 45, fr: "la gorge", sv: "strupe, hals" },
    // { id: 46, fr: "la tête", sv: "huvud" },
    // { id: 47, fr: "l'oreille", sv: "öra" },
    // { id: 48, fr: "le genou", sv: "knä" },
    // { id: 49, fr: "la radio", sv: "röntgen" },
    // { id: 50, fr: "boire", sv: "dricka" },
    // { id: 51, fr: "la toux", sv: "hosta" },
    // { id: 52, fr: "la fièvre", sv: "feber" },
    // { id: 53, fr: "le sirop", sv: "sirap" },
    // { id: 54, fr: "la grippe", sv: "influensa" },
    // { id: 55, fr: "le poids", sv: "vikt" },
    // { id: 56, fr: "la taille", sv: "längd" },
    // { id: 57, fr: "mesurer", sv: "mäta" },
    // { id: 58, fr: "le rhume", sv: "förkylning" },
    // { id: 59, fr: "encore", sv: "ännu" },
    // { id: 60, fr: "décrire", sv: "beskriva" },
    // { id: 61, fr: "le moral", sv: "kampvilja" },
    // { id: 62, fr: "nager", sv: "simma" },
    // { id: 63, fr: "le travail", sv: "arbete" },
    // { id: 64, fr: "travailler", sv: "arbeta" },
    // { id: 65, fr: "l'hôpital", sv: "sjukhus" },
    // { id: 66, fr: "le pharmacien", sv: "apotekare" },
    // { id: 67, fr: "la pharmacie", sv: "apotek" },
    // { id: 68, fr: "la dent", sv: "tand" },
    // { id: 69, fr: "le dentiste", sv: "tandläkare" },
    // { id: 70, fr: "remplacer", sv: "ersätta" },
    // { id: 71, fr: "l'œil", sv: "öga" },
    // { id: 72, fr: "le mètre", sv: "meter" },
    // { id: 73, fr: "le kilo", sv: "kilo" },
    // { id: 74, fr: "tousser", sv: "hosta" },
    // { id: 76, fr: "la vitamine", sv: "vitamin" },
    // { id: 78, fr: "le domicile", sv: "hemvist" },
    // { id: 80, fr: "communiquer", sv: "kommunicera" },
    // { id: 81, fr: "la comédie", sv: "komedi" },
    // { id: 83, fr: "drôle", sv: "rolig, lustig" },
    // { id: 84, fr: "amusant", sv: "rolig, underhållande" },
    // { id: 85, fr: "le réalisateur", sv: "regissör" },
    // { id: 87, fr: "au total", sv: "sammanlagt" },
    // { id: 89, fr: "l'espace", sv: "mellanrum" },
    // { id: 90, fr: "l'appareil", sv: "apparat" },
    // { id: 91, fr: "l'utilisation", sv: "användning" },
    // { id: 92, fr: "laisser", sv: "låta" },
    // { id: 93, fr: "la valeur", sv: "värde" },
    // { id: 94, fr: "le bijou", sv: "smycke" },
    // { id: 95, fr: "le vestiaire", sv: "omklädningsrum" },
    // { id: 96, fr: "la serviette", sv: "handduk" },
    // { id: 97, fr: "le sauna", sv: "bastu" },
    // { id: 100, fr: "netoyer", sv: "rengöra" },
    // { id: 101, fr: "pour", sv: "för" },
    // { id: 102, fr: "contre", sv: "mot" },
    // { id: 104, fr: "sain", sv: "sund" },
    // { id: 108, fr: "partager", sv: "dela" },
    // { id: 109, fr: "le besoin", sv: "behov" },
    // { id: 110, fr: "l'aliment", sv: "födoämne" },
    // { id: 111, fr: "avoir raison", sv: "ha rätt" },
    // { id: 112, fr: "avoir tort", sv: "ha fel" },
    // { id: 113, fr: "éteindre", sv: "släcka" },
    // { id: 114, fr: "devoir", sv: "vara tvungen" },
    // { id: 115, fr: "gras", sv: "fet" },
    // { id: 116, fr: "sucré", sv: "söt" },
    // { id: 117, fr: "l'adulte", sv: "vuxen" },
    // { id: 118, fr: "durer", sv: "vara, räcka" },
    // { id: 119, fr: "le footing", sv: "jogging" },
    // { id: 120, fr: "adapter", sv: "anpassa" },
    // { id: 121, fr: "la manière", sv: "sätt" },
    // { id: 122, fr: "salé", sv: "salt" },
    // { id: 124, fr: "la mamie", sv: "mormor" },
    // { id: 125, fr: "le papi", sv: "morfar" },
    // { id: 126, fr: "le contrôle", sv: "kontroll" },
    // { id: 127, fr: "au fait", sv: "för övrigt" },
    // { id: 129, fr: "le paquet", sv: "paket" },
    // { id: 130, fr: "laver", sv: "tvätta" }
  ];
  