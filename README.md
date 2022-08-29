# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @michaelbinnick/lotide`

**Require it:**

`const _ = require('@michaelbinnick/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `countLetters(sentence)`: Returns the number of characters in the input string (does not count spaces).
* `countOnly(list, rules)`: Takes in a list (array) of items and rules object (each rule data value is a property, and should have value of true or false.) Returns an object with counts for each item that was asked for.
* `eqArrays(arrayOne, arrayTwo)`: Check to see if two arrays are the same, return true or false.
* `eqObjects(object1, object2)`: Check to see if two objects are the same, return true or false.
* `findKey(object, callback)`: Returns the key that matches the rules set by the callback function passed.
* `findKeyByValue(object, value)`: Returns the key within input object that has the value asked for.
* `flatten(array)`: Returns an array with subarrays into one array, no nesting.
* `head(array)`: Returns the first item in an array.
* `letterPositions(sentence)`: Returns an object that tells you the index positions for each unique character in the input string.
* `map(array, action)`: A low-rent version of the .map array function.
* `middle(array)`: Returns the middle index(es) of an array, in an array.
* `tail(array)`: Returns an array minus the first item.
* `takeUntil(array, callback)`: Return the items of an array until the point an item matches the conditions of the callback function.
* `without(source, itemsToRemove)`: Takes in a source array and an itemsToRemove array. Returns the source array, minus any matches to items in the itemsToRemove array.