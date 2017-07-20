#   if2
__if2 A,B := if A then A else B__

```js   
var if2 = require('if2');

if2(null, 1);
// RETURN 1

if2(true, 2);
// RETURN true

if2(null, undefined, false, 3);
// RETURN 3
```