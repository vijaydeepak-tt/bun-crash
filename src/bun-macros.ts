import { getArray, getBool, getFunc, getNumber, getObject, getString } from './macros/macros.ts' with { type: 'macros' };

console.log(getString());
console.log(getNumber());
console.log(getBool());
console.log(getArray());
console.log(getObject());
console.log(getFunc());
