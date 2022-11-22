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
