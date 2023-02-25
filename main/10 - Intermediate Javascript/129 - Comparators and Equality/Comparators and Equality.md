# Comparators and Equality

Comparators are used to compare two values. They return a boolean value, either true or false. There are two types of comparators: strict and abstract. Strict comparators are used to compare two values of the same type. Abstract comparators are used to compare two values of different types.

## Strict Comparators

| Operator | Description |
| --- | --- |
| === | Strict equal to. Returns true if the operands are equal and of the same type. |
| !== | Strict not equal to. Returns true if the operands are of the same type but not equal, or are of different type. |

```js
3 === 3; // true
3 === '3'; // false
```

## Abstract Comparators

| Operator | Description |
| --- | --- |
| == | Abstract equal to. Returns true if the operands are equal. |
| != | Abstract not equal to. Returns true if the operands are not equal. |

```js
3 == 3; // true
3 == '3'; // true
```

## Strict vs Abstract Comparators

```js
0 == false; // true
0 === false; // false
```

## Comparing Objects

```js
var obj1 = {a: 1};
var obj2 = {a: 1};

obj1 === obj2; // false
obj1 == obj2; // false
```

## Comparing Arrays

```js
var arr1 = [1, 2, 3];
var arr2 = [1, 2, 3];

arr1 === arr2; // false
arr1 == arr2; // false
```

## Comparing Null and Undefined

```js
null === undefined; // false
null == undefined; // true
```

## Comparing NaN

```js
NaN === NaN; // false
NaN == NaN; // false
```

## Comparing Boolean

```js
true == 1; // true
true === 1; // false
```

## Comparing Strings

```js
'0' == 0; // true
'0' === 0; // false
```

## Comparing String and Number

```js
'3' == 3; // true
'3' === 3; // false
```

## Comparing String and Boolean

```js
'false' == false; // true
'false' === false; // false
```

## Comparing String and Object

```js
'{}' == {}; // true
'{}' === {}; // false
```

## Comparing String and Array

```js
'[]' == []; // true
'[]' === []; // false
```

## Comparing String and Null

```js
'null' == null; // false
'null' === null; // false
```

## Comparing String and Undefined

```js
'undefined' == undefined; // false
'undefined' === undefined; // false
```

## Comparing String and NaN

```js
'NaN' == NaN; // false
'NaN' === NaN; // false
```
