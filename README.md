# Code kata: String Calculator


## Description

This function adds the elements of an expression whose format is a string.
However, this expression contains some peculiarities:

* If the expression is empty or null, the function returns zero.
* If the expression has only a number, the function returns this number.
* When the expression contains several numbers, the function returns the sum of all of them. The numbers will arrive separated by commas by default.
* If any element of the expression is not a number, the function ignores it and adds all the others.
* Finally, separators can be customized. The configuration must be at the beginning of the expression. This configuration must start with a double slash, followed by the separator and another slash to mark the end of the configuration.


__Example__

``` js
''                // => 0
'8'               // => 8
'1,2,3,4'         // => 10
'1,2,a,3,4,5'     // => 15
'//%/1%5%3'       // => 9

```

## Run project

__Install__

    npm install

__Run test__

    npm test
