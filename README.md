# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @hoss-agina/lotide`

**Require it:**

`const _ = require('@hoss-agina/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(head)`: returns the first element of the input array "head" 
* `function2(tail)`: returns all the elements of the input array "tail" - it removes the head or first element of the array
* `function3(middle)`: returns the middle elements of the array: 1 element if the array.length is odd and 2 middle elements if the array.length is even
* `function4(countOnly)`: takes 2 parameters (1st parameter: array of names, 2nd parameter: object with names as keys and value of boolean True or False assigne). Function returns object with the names count common between first parameter and 2nd parameter only if its assigned boolean of true.
* `function5(eqArrays)`: function takes 2 parameters both arrays and returns true if they are equal or false 
* `function6(letterPositions)`: function takes string parameter and returns an object with values of the positions of each character in that string.
* `function7(findKeyByValue)`: function takes 2 parameters (1st parameter: object and 2nd parameter: value ) and returns key assigned to that value.
* `function8(without)`: takes 2 arrays as parameters and returns an output array that does not include any of the elements listed in the 2nd array entered as a parameter
* `function9(map)`: takes 2 parameters (an array and a callback function) and returns back a new array based on the results of the callback function
* `function10(takeUntil)`: takes 2 parameters (an array and a a callback function) and will return a slice of the array starting from the begining of array until the callback function returns a truthy value. 

