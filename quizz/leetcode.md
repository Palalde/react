Design a HashSet without using any built-in hash table libraries.

Implement MyHashSet class:

void add(key) Inserts the value key into the HashSet.
bool contains(key) Returns whether the value key exists in the HashSet or not.
void remove(key) Removes the value key in the HashSet. If key does not exist in the HashSet, do nothing.

Example 1:

Input
["MyHashSet", "add", "add", "contains", "contains", "add", "contains", "remove", "contains"]
[[], [1], [2], [1], [3], [2], [2], [2], [2]]
Output
[null, null, null, true, false, null, true, null, false]

Explanation
MyHashSet myHashSet = new MyHashSet();
myHashSet.add(1); // set = [1]
myHashSet.add(2); // set = [1, 2]
myHashSet.contains(1); // return True
myHashSet.contains(3); // return False, (not found)
myHashSet.add(2); // set = [1, 2]
myHashSet.contains(2); // return True
myHashSet.remove(2); // set = [1]
myHashSet.contains(2); // return False, (already removed)

Constraints:

0 <= key <= 106
At most 104 calls will be made to add, remove, and contains.

```javaScript
// solution 1:

var MyHashSet = function () {
    this.array = []
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
    if (!this.array.includes(key)) {
        this.array.push(key);
    }
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
    this.array = this.array.filter((k) => k !== key);
};

/**
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
   return this.array.includes(key);
};

// solution 2 :
class MyHashSet {
    constructor() {
        this.data = new Array(1000001).fill(false);
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        this.data[key] = true;
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        this.data[key] = false;
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        return this.data[key];
    }
}
// solution 3:

//var
let l = 1000;

var MyHashSet = function () {
    this.set = Array.from({ length: l }, () => []);
};

let hash = (key) => key % l;

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
    let i = hash(key);
    let bucket = this.set[i];

    if (!bucket.includes(key)) {
        bucket.push(key);
    }
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
    let i = hash(key);
    let bucket = this.set[i];
    let bucketId = bucket.indexOf(key);

    if (bucketId !== -1) {
        bucket.splice(bucketId, 1);
    }
};

/**
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
    let i = hash(key);
    let bucket = this.set[i];

    return bucket.includes(key);
};

// solution 4:
class Node {
    constructor(key) {
        this.key = key;
        this.next = null;
    }
}

class MyHashSet {
    // private
    #set;

    constructor() {
        // set
        this.#set = Array.from({ length: 1000 }, () => new Node(null));
    }

    #hash(key) {
        return key % this.#set.length;
    }

    add(key) {
        // current node
        let cur = this.#set[this.#hash(key)];

        // if first number
        if (cur.key === null) {
            cur.key = key;
            return;
        }
        // if first node is the key
        if (cur.key === key) {
            return;
        }

        //if there is others nodes
        while (cur.next) {
            // switch to the next one
            cur = cur.next;
            // check
            if (cur.key === key) {
                return;
            }
        }

        // if no key exist create new node
        cur.next = new Node(key);
    }

    remove(key) {
        //current node
        let cur = this.#set[this.#hash(key)];

        while (cur) {
            if (cur.key === key) {

                if (cur.next === null) {
                    cur.key = null;
                } else {
                    cur.key = cur.next.key;
                    cur.next = cur.next.next;
                }

                return;
            }

            cur = cur.next;
        }

    }

    contains(key) {
        //current node
        let cur = this.#set[this.#hash(key)];

        // check first node
        if (cur.key === key) {
            return true;
        }

        //check other nodes
        while (cur.next) {
            cur = cur.next;
            if (cur.key === key) {
                return true;
            }
        }

        return false;
    }
}

//solution 5:

class Node {
    constructor(key) {
        this.key = key;
        this.next = null;
    }
}

class MyHashSet {
    // private
    #set;

    constructor() {
        // set
        this.#set = Array.from({ length: 1000 }, () => new Node(null));
    }

    #hash(key) {
        return key % this.#set.length;
    }

    add(key) {
        // current node
        let cur = this.#set[this.#hash(key)];

        //if there is others nodes
        while (cur.next) {
            // check
            if (cur.next.key === key) {
                return;
            }

            // switch to the next one
            cur = cur.next;
        }

        // if no key exist create new node
        cur.next = new Node(key);
    }

    remove(key) {
        //current node
        let cur = this.#set[this.#hash(key)];

        while (cur.next) {
            if (cur.next.key === key) {
                cur.next = cur.next.next;
                return;
            }
            cur = cur.next;
        }

    }

    contains(key) {
        //current node
        let cur = this.#set[this.#hash(key)];

        //check other nodes
        while (cur.next) {
            if (cur.next.key === key) {
                return true;
            }
            cur = cur.next;
        }


        return false;
    }
}

```

---

# Difficulté principale rencontrée

L’utilisateur **savait utiliser `Set` en JavaScript**, mais **n’avait jamais réfléchi à comment implémenter un HashSet lui-même**.

Les difficultés initiales étaient :

1. Comprendre **comment stocker les données**
2. Comprendre **le rôle de la fonction de hash**
3. Comprendre **la gestion des collisions**
4. Comprendre **les différentes implémentations possibles**

---

# Première approche explorée

Nous avons commencé avec l’idée classique des **buckets** :

```
array de buckets
bucket = array de clés
```

Structure :

```
hash(key) -> index
set[index] = bucket
```

Exemple :

```
bucket[7] = [27, 37]
```

L’utilisateur a implémenté :

- un tableau de buckets
- `key % size` comme fonction de hash
- `includes`, `indexOf`, `splice` pour manipuler les buckets

Cette version fonctionnait correctement.

---

# Discussion importante sur la complexité

L’utilisateur a soulevé un point correct :

> Si toutes les clés tombent dans le même bucket, `includes` devient O(n).

Conclusion :

- **complexité moyenne : O(1)**
- **pire cas : O(n)**

Nous avons expliqué que c’est le comportement normal des **hash tables avec collisions**.

---

# Amélioration explorée : buckets avec linked list

L’utilisateur a voulu aller plus loin et implémenter une structure plus proche d’une vraie hash table :

```
bucket -> linked list
```

Il a créé :

```
class Node {
  key
  next
}
```

Et chaque bucket devenait :

```
Node -> Node -> Node
```

Cela a introduit plusieurs défis :

### difficultés rencontrées

1. syntaxe des objets JS
2. mauvaise initialisation des buckets
3. gestion de `cur` avec `const` au lieu de `let`
4. suppression incorrecte des nodes
5. nodes "vides" avec `key = null`

---

# Problème majeur rencontré : remove()

La première version de `remove` :

```
cur.key = null
```

Problème :

Si la liste est :

```
1 -> 1001 -> 2001
```

et on supprime `1` :

```
null -> 1001 -> 2001
```

Ensuite `add(1001)` pouvait créer **des doublons**.

Donc cette logique cassait l’invariant du HashSet.

---

# Solution introduite

On a introduit le concept de **suppression dans une linked list** :

```
prev.next = cur.next
```

Puis une technique plus propre :

### Dummy head node

Chaque bucket commence par :

```
null -> key1 -> key2 -> key3
```

Ce node `null` sert juste d’ancrage.

Avantages :

- pas de cas spécial pour le premier élément
- `remove` plus simple
- `add` plus simple

---

# Implémentation finale propre (linked list)

Structure :

```
#hash(key) -> index
bucket = dummy node
```

algorithmes :

```
add :
parcourir la liste
si clé existe -> return
sinon ajouter node à la fin
```

```
remove :
parcourir
si cur.next.key === key
    cur.next = cur.next.next
```

```
contains :
parcourir la liste
```

Cette version était **algorithmiquement correcte et propre**.

---

# Autre difficulté rencontrée

Bug classique dans `remove` :

boucle infinie car `cur` n’était pas avancé.

```
while(cur.next) {
   ...
}
```

manquait :

```
cur = cur.next
```

---

# Comparaison avec une solution plus simple

À la fin, nous avons expliqué qu’à cause de la contrainte :

```
0 <= key <= 10^6
```

on peut faire une solution **beaucoup plus simple** :

```
boolean array
```

```
set[key] = true
```

implémentation :

```
add -> set[key] = true
remove -> set[key] = false
contains -> return set[key]
```

Complexité :

```
O(1) strict
```

---

# Ce que l’utilisateur a appris

### Concepts appris

- structure interne d’un **HashSet**
- **hash function**
- **buckets**
- **collision handling**
- **separate chaining**
- **linked list dans une hash table**
- **dummy head node**
- différence entre :

```
complexité moyenne
complexité pire cas
```

- différence entre :

```
modifier un array existant
vs créer un nouvel array (filter)
```

---

# Concepts que l’utilisateur maîtrisait déjà

- syntaxe JS générale
- manipulation d’array
- `includes`, `splice`, etc.

---

# Concepts encore un peu fragiles

- suppression correcte dans une linked list
- gestion du node précédent (`prev`)
- pièges des références JS (réassignation locale vs modification réelle)
- conception de structures de données bas niveau

---

# Points positifs de l’utilisateur

L’utilisateur a montré :

- une bonne **capacité de raisonnement algorithmique**
- des **questions pertinentes sur la complexité**
- une volonté d’aller **au-delà de la solution simple**
- une progression logique :

```
array buckets
→ linked list buckets
→ suppression correcte
→ dummy head node
```

---

# Type d’aide apportée

L’aide fournie consistait à :

- donner **des indices progressifs**
- expliquer **les erreurs logiques**
- corriger **les erreurs syntaxiques JS**
- expliquer **les concepts de data structures**
- montrer **plusieurs implémentations possibles**

sans donner immédiatement la solution complète au début.

---

# Résultat final

L’utilisateur comprend maintenant :

- comment implémenter un **HashSet from scratch**
- comment gérer les collisions
- comment implémenter une linked list dans un bucket
- pourquoi certaines solutions sont **plus simples grâce aux contraintes du problème**

---
