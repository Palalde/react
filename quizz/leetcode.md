```javaScript
// solution 1 :

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {

    // map pour garder l'historique
    let previousString = "";
    let bestMatch = "";

    // Boucle dans chaque lettre du premer mot
    for (i = 0; i < strs[0].length; i++) {

        // garder une portion du mot
        let strsCheck = strs.map((w) => previousString + w[i] );

        // si toute les lettres sont les même
        if (strsCheck.every((w) => w === strsCheck[0])) {
            bestMatch = strsCheck[0];
        }

        previousString = strsCheck[i];
    }

    return bestMatch;
};

// solution 2

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {

    // map pour garder l'historique
    let previousString = "";
    let bestMatch = "";

    // Boucle dans chaque lettre du premer mot
    for (i = 0; i < strs[0].length; i++) {

        // garder une portion du mot
        let strsCheck = strs.map((w) => previousString + w[i] );

        // si toute les lettres sont les même
        if (strsCheck.every((w) => w === strsCheck[0])) {
            bestMatch = strsCheck[0];
        } else if ( i > 0 && bestMatch !== "") {
            return bestMatch;
        }

        previousString = strsCheck[0];
    }

    return bestMatch;
};

// solution 3

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {

    // map pour garder l'historique
    let previousString = "";
    let bestMatch = "";

    // Boucle dans chaque lettre du premer mot
    for (i = 0; i < strs[0].length; i++) {

        // garder une portion du mot
        let strsCheck = strs.map((w) => previousString + w[i]);

        // si toute les lettres sont les même
        if (strsCheck.every((w) => w === strsCheck[0])) {
            // mettre a jour le bestMatch
            bestMatch = strsCheck[0];
            // mettre a jour le precedent string
            previousString = strsCheck[0];
        } else {
            return bestMatch;
        }
    }

    return bestMatch;
};

// solution 4

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (!strs.length) return "";
    // on declare i en dehors
    let i;
    // on boucle dans les lettres du premier Mots
     for (i = 0; i < strs[0].length; i++) {
        //faire un tableau avec les lettres actuelle de l'index
        const chars = strs.map((w) => w[i]);
        // ajouter les chars au hashSet
        const uniqueChars = new Set(chars);
        if (uniqueChars.size > 1) break; // dès qu'une différence → arrêter
    }

    // retourner le préfixe commun en utilisant simplement le slice du premier mot
    return strs[0].slice(0, i);
};

// solution 5

var longestCommonPrefix = function (strs) {
    if (!strs.length) return "";

    // trouver le mot le plus court
    let shortest = strs.reduce((a, b) => a.length <= b.length ? a : b);

    // boucler dans le mot
    for (let i = 0; i < shortest.length; i++) {
        // lettre actuelle de shortest
        const char = shortest[i];

        for (let j = 0; j < strs.length; j++) {
            if (strs[j][i] !== char) {
                return shortest.slice(0, i);
            }
        }
    }

    return shortest;
};
```
