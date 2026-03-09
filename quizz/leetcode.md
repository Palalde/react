Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

Return the array in the form [x1,y1,x2,y2,...,xn,yn].

Example 1:

Input: nums = [2,5,1,3,4,7], n = 3
Output: [2,3,5,4,1,7]
Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].
Example 2:

Input: nums = [1,2,3,4,4,3,2,1], n = 4
Output: [1,4,2,3,3,2,4,1]
Example 3:

Input: nums = [1,1,2,2], n = 2
Output: [1,2,1,2]

Constraints:

1 <= n <= 500
nums.length == 2n
1 <= nums[i] <= 10^3

```javaScript
//solution 1:
/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
    //const
    let result = Array(nums.length).fill(0);
    // second cursor to change the right index
    let k = 0;


    for (let i = 0; i < nums.length; i++) {
        // if first num
        if (i === 0) {
            result[0] = nums[0];
            k += 2;
        // if nums of first part
        } else if (i < nums.length / 2) {
            result[k] = nums[i];
            k += 2;
        // if first num of second part
        } else if (i === nums.length / 2) {
            // reset k
            k = 1;
            result[k] = nums[i];
            k += 2;
        // if num of second part
        } else {
            result[k] = nums[i];
            k += 2;
        }
    }

    return result;
}

// solution 2

/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
    //const
    let result = Array(nums.length);
    // second cursor to change the right index
    let k = 0;


    for (let i = 0; i < nums.length; i++) {

        if (i === n) {
            // reset k
            k = 1;
        }

        result[k] = nums[i];
        k += 2;
    }

    return result;
}

// solution 3

/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
    //const
    let result = []
    // first cursor
    let i = 0
    // second cursor start at the middle
    let j = n;

    while ( result.length < nums.length ) {
        // push first the first part
        result.push(nums[i]);
        i++;
        // push in second the second part
        result.push(nums[j]);
        j++;
    }

    return result;
}

// solution 4 :

for (let i = 0; i < n; i++) {
    result.push(nums[i], nums[i + n]);
}

// solution 5 :

var shuffle = function(nums, n) {
    const result = new Array(2 * n);

    for (let i = 0; i < n; i++) {
        result[2 * i] = nums[i];
        result[2 * i + 1] = nums[i + n];
    }

    return result;
};

```

**Contexte :**
Je travaille sur le problème LeetCode **Shuffle the Array** :
Étant donné un tableau `nums` de taille `2n` avec la forme `[x1,x2,...,xn,y1,y2,...,yn]`, il faut retourner `[x1,y1,x2,y2,...,xn,yn]`.

---

**Étapes de réflexion et solutions explorées :**

1. **Première approche avec `Map`**
   - J’ai essayé de séparer le tableau en deux parties dans une `Map`.
   - Problèmes rencontrés :
     - Mauvaise logique dans la boucle : les éléments étaient ajoutés dans les deux tableaux.
     - Mauvaise utilisation de `push()` dans le `return` (car `push` retourne la longueur et non le tableau).

   - Conclusion : solution inutilement complexe pour ce problème.

---

2. **Deuxième approche avec pointeur d’écriture (`k`)**
   - Création d’un tableau `result`.

   - Utilisation d’un curseur `k` pour écrire dans les index pairs puis impairs.

   - Problèmes rencontrés :
     - J’avais écrit `k + 2` au lieu de `k += 2`, donc `k` ne changeait jamais.
     - Trop de conditions `if / else` qui rendaient le code compliqué.

   - Amélioration : simplification des conditions pour n’avoir qu’un seul `if` pour réinitialiser `k`.

---

3. **Troisième approche avec deux pointeurs de lecture**
   - Utilisation de deux curseurs :
     - `i` pour la première moitié
     - `j = n` pour la seconde moitié

   - Ajout des éléments dans `result` avec `push`.

   Exemple :

   ```javascript
   while (i < n) {
     result.push(nums[i]);
     result.push(nums[j]);
     i++;
     j++;
   }
   ```

   Amélioration :
   - utiliser `while (i < n)` plutôt que `result.length < nums.length`.

---

4. **Découvertes JavaScript importantes**

- `push()` peut accepter **plusieurs arguments** :

```javascript
result.push(nums[i], nums[i + n]);
```

- `.fill()` n’est **pas nécessaire** si toutes les cases du tableau sont écrites ensuite.

- Un tableau peut être créé de plusieurs façons :
  - `new Array(size)`
  - `Array(size)`
  - `[]` (JavaScript agrandit le tableau automatiquement si on écrit à un index plus loin)

---

5. **Solution algorithmique la plus propre**

Utiliser la relation mathématique entre les index :

```
x → 2*i
y → 2*i + 1
```

```javascript
for (let i = 0; i < n; i++) {
  result[2 * i] = nums[i];
  result[2 * i + 1] = nums[i + n];
}
```

---

**Principaux apprentissages :**

- Éviter les `if` quand le pattern est régulier.
- Identifier les relations entre les index peut simplifier énormément un algorithme.
- `push()` peut ajouter plusieurs éléments en une fois.
- Attention aux expressions sans affectation (`k + 2` vs `k += 2`).
- Réduire les duplications de code dans les branches `if`.
- Choisir une condition de boucle qui reflète la vraie logique (`i < n`).

---

**Conclusion personnelle :**

J’ai réussi à résoudre le problème avec plusieurs approches et j’ai compris que :

- les solutions les plus simples viennent souvent d’un **pattern mathématique clair**
- JavaScript offre des **raccourcis syntaxiques utiles (`push(a,b)`)**
- mon code initial fonctionnait mais pouvait être **simplifié pour plus de lisibilité**.
