Design a HashMap without using any built-in hash table libraries.

Implement the MyHashMap class:

MyHashMap() initializes the object with an empty map.
void put(int key, int value) inserts a (key, value) pair into the HashMap. If the key already exists in the map, update the corresponding value.
int get(int key) returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key.
void remove(key) removes the key and its corresponding value if the map contains the mapping for the key.

Example 1:

Input
["MyHashMap", "put", "put", "get", "get", "put", "get", "remove", "get"]
[[], [1, 1], [2, 2], [1], [3], [2, 1], [2], [2], [2]]
Output
[null, null, null, 1, -1, null, 1, null, -1]

Explanation
MyHashMap myHashMap = new MyHashMap();
myHashMap.put(1, 1); // The map is now [[1,1]]
myHashMap.put(2, 2); // The map is now [[1,1], [2,2]]
myHashMap.get(1); // return 1, The map is now [[1,1], [2,2]]
myHashMap.get(3); // return -1 (i.e., not found), The map is now [[1,1], [2,2]]
myHashMap.put(2, 1); // The map is now [[1,1], [2,1]] (i.e., update the existing value)
myHashMap.get(2); // return 1, The map is now [[1,1], [2,1]]
myHashMap.remove(2); // remove the mapping for 2, The map is now [[1,1]]
myHashMap.get(2); // return -1 (i.e., not found), The map is now [[1,1]]

Constraints:

0 <= key, value <= 106
At most 104 calls will be made to put, get, and remove.

```javaScript
// solution 1:


class MyHashMap {
    //private
    #map;

    constructor() {
        this.#map = Array.from({length: 1009}, () => []);
    };

    #hash(key) {
        return key % this.#map.length;
    };

    put(key, value) {
        const index = this.#hash(key);
        const bucket = this.#map[index];

        if (bucket[key] !== value) {
            this.#map[index][key] = value;
        }

        return;
    };

    get(key) {
        const bucket = this.#map[this.#hash(key)];

        if(bucket[key] === undefined) {
            return -1;
        }

        return bucket[key];
    };

    remove(key) {
        const bucket = this.#map[this.#hash(key)];

        if (bucket[key]) {
            bucket[key] = undefined;
        }

        return;
    }
};

// solution 2 :

class MyHashMap {
    //private
    #map;

    constructor() {
        this.#map = Array.from({length: 1009}, () => ({}));
    };

    #hash(key) {
        return key % this.#map.length;
    };

    put(key, value) {
        this.#map[this.#hash(key)][key] = value;
    };

    get(key) {
        const bucket = this.#map[this.#hash(key)];

        return bucket[key] !== undefined ? bucket[key] : -1;
    };

    remove(key) {
        const bucket = this.#map[this.#hash(key)];

        delete bucket[key];
    }
};
// solution 3:


class MyHashMap {
    //private
    #map;

    constructor() {
        this.#map = {};
    };

    // #hash(key) {
    //     return key % this.#map.length;
    // };

    put(key, value) {
        this.#map[key] = value;
    };

    get(key) {
        return this.#map[key] !== undefined ? this.#map[key] : -1;
    };

    remove(key) {
        delete this.#map[key];
    }
};

// solution 4:
class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
    }
}

class MyHashMap {
    //private
    #map;

    constructor() {
        this.#map = Array.from({ length: 1009 }, () => new Node(null, null));
    };

    #hash(key) {
        return key % this.#map.length;
    };

    put(key, value) {
        let node = this.#map[this.#hash(key)];

        while (node.next) {
            if (node.next.key === key && node.next.value !== value) {
                node.next.value = value;
                return;
            }
            node = node.next;
        }

        node.next = new Node(key, value);
    };

    get(key) {
        let node = this.#map[this.#hash(key)];

        while (node.next) {
            if (node.next.key === key) {
               return node.next.value;
            }
            node = node.next;
        }

        return -1;
    };

    remove(key) {
        let node = this.#map[this.#hash(key)];

        while (node.next) {
            if (node.next.key === key) {
                return node.next = node.next.next;
            }
            node = node.next;
        }
    }
};



```

---

# **Résumé de la session – Design HashMap en JavaScript**

## **1️⃣ Objectif**

- Exercice LeetCode : **“Design HashMap”**
- Implémenter une structure de type HashMap avec :
  - `put(key, value)`
  - `get(key)`
  - `remove(key)`

- Langage : **JavaScript (ES6+)**

---

## **2️⃣ Problèmes rencontrés et étapes d’apprentissage**

### **a) Manipulation de tableaux (`Array`)**

- Tu as essayé :

```js
array = [];
array[1000] = "value";
```

- Problèmes rencontrés :
  - Comprendre **sparse arrays** et “trous” (`empty slots`).
  - Différence entre `undefined` réel et “trou” dans un tableau.
  - Impact sur `length` et itérations (`forEach`, `for...of`, `map`).

- Solution / apprentissage :
  - `array.length = index_max + 1` même si les éléments intermédiaires sont vides.
  - `delete array[index]` supprime un élément mais **ne réduit pas length**.
  - Sparse arrays sont différents des vrais `undefined`.

---

### **b) Objets `{}` comme bucket**

- Tu as exploré l’idée d’utiliser `{}` au lieu de `[]` pour chaque bucket :

```js
bucket = {};
bucket[key] = value;
```

- Apprentissage :
  - Les clés sont converties en **string**, mais ça fonctionne comme une HashMap simple.
  - Pas de sparse arrays → économie mémoire.
  - Accès direct : `obj[key]` → value, `delete obj[key]` → supprime la paire.
  - Pour accéder par “index” (ordre d’insertion) : `Object.keys/values/entries()`.

- Conclusion : `{}` est suffisant pour implémenter un HashMap simplifié en JS, mais en interview ou pour l’exercice, il est préférable de **gérer explicitement hash + bucket**.

---

### **c) Erreurs avec `Node` et linked list**

- Implémentation avec `Node(key, value, next)` et un **dummy head** pour chaque bucket.
- Problème rencontré :

```js
while (node.next) {
  node = node.next;
}
```

- Erreur : `TypeError: Cannot read properties of null (reading 'next')`

- Cause : après suppression (`node.next = node.next.next`), `node.next` peut devenir `null`, et la boucle continue.

- Résolution :
  - Ajouter `return` immédiatement après la suppression pour arrêter la boucle :

```js
if (node.next.key === key) {
  node.next = node.next.next;
  return;
}
```

---

### **d) Dummy head**

- Tu as découvert que certains utilisent :

```js
new ListNode((key = -1), (val = -1));
```

- Raison :
  - Créer un **nœud factice** pour chaque bucket.
  - Évite les **cas particuliers pour le premier nœud** dans `put/get/remove`.
  - Les valeurs par défaut `-1` ou `null` ne sont jamais utilisées dans la logique réelle.

---

### **e) Compréhension de Map vs Object**

- `{}` fonctionne comme une HashMap simple, mais :
  - Clés sont converties en string.
  - Pas d’ordre d’insertion garanti.
  - Méthodes limitées (`get`, `set`, `delete`, `size` absentes).

- `Map` :
  - Clés de **n’importe quel type** (objets, fonctions…).
  - Ordre d’insertion garanti.
  - Méthodes dédiées (`set`, `get`, `has`, `delete`, `size`).
  - Optimisée pour les accès O(1).

---

## **3️⃣ Comment je t’ai aidé**

1. Expliquer le **comportement de `Array` avec des indices manquants** (sparse arrays, `length`, `undefined`).
2. Clarifier la différence entre **trous dans un array** et **valeurs `undefined`**.
3. Montrer pourquoi `{}` est plus sûr et évite les sparse arrays.
4. Identifier la cause du **TypeError** dans la linked list (`remove`).
5. Expliquer l’intérêt des **dummy heads** pour simplifier le code.
6. Comparer `{}` vs `Map` et quand utiliser l’un ou l’autre.
7. Expliquer la logique des collisions et pourquoi les solutions attendues utilisent souvent **linked lists par bucket**.

---

## **4️⃣ Ce que tu as appris**

- JavaScript arrays : sparse arrays, longueur, trous, `delete`.
- JavaScript objects : clés converties en string, accéder/supprimer une paire, différence avec `Map`.
- Linked list pour gérer collisions dans un hash map.
- Dummy head pour simplifier `put/get/remove`.
- Gestion des collisions et pourquoi `Map` existe malgré `{}`.
- Debugging d’une erreur classique (`TypeError: Cannot read properties of null`) dans une linked list.

---

## **5️⃣ Résultat final**

- Une **HashMap fonctionnelle** avec :
  - tableau de buckets, chaque bucket est une **linked list avec dummy head**
  - `put(key, value)`
  - `get(key)`
  - `remove(key)`

- Gestion correcte des collisions et des cas limites.
- Syntaxe moderne ES6 avec champs privés `#map`.

---
