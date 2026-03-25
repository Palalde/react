Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

Example 1:

Input: s = "()"

Output: true

Example 2:

Input: s = "()[]{}"

Output: true

Example 3:

Input: s = "(]"

Output: false

Example 4:

Input: s = "([])"

Output: true

Example 5:

Input: s = "([)]"

Output: false

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.

```javaScript
//solution 1
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {

   const PCheck = new Map([
        [")", "("],
        ["}", "{"],
        ["]", "["],
    ]);

    let pStack = [];

    for (let i = 0; i < s.length; i++) {

        if (PCheck.has(s[i])) {

            let val = pStack.pop();

            if (val !== PCheck.get(s[i])) {
                return false;
            }
            continue;
        }

        pStack.push(s[i]);
    }

    return true;
};

//solution 2

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {

    if (s.length % 2 !== 0) return false;

    const PCheck = new Map([
        [")", "("],
        ["}", "{"],
        ["]", "["],
    ]);

    let pStack = [];

    for (let i = 0; i < s.length; i++) {

        if (PCheck.has(s[i])) {

            let val = pStack.pop();

            if (val !== PCheck.get(s[i])) {
                return false;
            }
            continue;
        }

        pStack.push(s[i]);
    }

    if (pStack.length) {
        return false;
    } else {
        return true;
    }

};
```
