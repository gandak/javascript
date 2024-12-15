[![NPM](https://nodei.co/npm/typescript-roman-numbers-converter.png?compact=true)](https://nodei.co/npm/typescript-roman-numbers-converter/)


Typescript Roman Numbers Converter
==============
[![NPM](https://img.shields.io/npm/l/typescript-roman-numbers-converter?style=flat-square)](#)

A simple and easy to use Typescript package that converts a given arabic number to roman number format
## Installation

<pre><code>$ npm install --save typescript-roman-numbers-converter</code></pre>

## How to use it

First of all import the package:

<pre><code>import { toRoman } from "typescript-roman-numbers-converter";</code></pre>

### toRoman

Converts the given **number** into a **string** that represents the same value in roman notation.
Due to limitations, we cannot convert decimal numbers, numbers below 1 and numbers bigger than 3999.

<pre>
<code>
let a: number;
let r: string;

a = 32
r = toRoman(a); //r is now equal to "XXXII"

let a_2 = -12
r = toRoman(a_2); //r is now "" due to limitations
</code>
</pre>

### toArabic

Converts the given **string** into a **number** that represents the same value in arabic notation.

<pre>
<code>
let a: number;
let r: string;

r = "XXXII"
a = toArabic(a); //a is now equal to 32
</code>
</pre>

### isRoman

Returns true if the given **string** is a valid written roman number

<pre>
<code>
let b = isRoman("MCM"); //b is true
let b_2 = isRoman("ABC"); //b_2 is false
</code>
</pre>



### RomanNumber class

Is the class that holds the value of the roman numeral

<pre>
<code>
class RomanNumber {
  //holds the numeric value of the number
  num: number;
  //holds the roman numeral that represents the value of `num`
  str: string;

  // elaborations fields for use the large conversion
  baseUnits: number = 0;
  thousands: number = 0;
  
  constructor(num: number, str: string) {
    this.num = num;
    this.str = str;
  }
}
</code>
</pre>

### toRomanLarge, toRomanLargeStr

toRomanLarge converts the arab number passed as parameter to an instance of RomanNumber class. With this method we can convert numbers bigger than 3999. The string representation of the converted number wraps the thousands with an underscore and round braces.
toRomanLargeStr is returns the value of str after calling toRomanLarge.

<pre>
<code>
let a: number;
let r: RomanNumber(0,'');
let r_2: string;

a = 1350021
r = toRomanLarge(a); //r is now equal to {num: 1350021, str: "(_MCCCL)XXI", baseUnits: 21, thousands: 1350}
r_2 = toRomanLargeStr(a); //r_2 is now equal to "(_MCCCL)XXI"
</code>
</pre>
