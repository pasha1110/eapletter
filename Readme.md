# EapLetter
#### for letter string

## Introduction

EapLetter is a tool for displaying large text consisting of small characters,
 this package only **8.5 KB!**(may change at any time).
This package can also be collaborated with the Chalk or Readline Module

## Installation
**Note** this package support npm **only**

For install this package just write this command

> npm install -g eapletter

**Note** -g flags for installing globaly, if you Do not want install globaly remove -g flags

## fast documentation:

### how to use:

 **Note** before using this package name your files with the extension `.mjs` because this package using es6 module statement or use `npm init` and set `type: module`

Then import **eapletter**

Example:
 
```javascript

import latter from 'eaplatter';

new letter ({
    message: "Hello World",
    type: "#",//default
    use_dot: true //default
 });
``` 


## Understand the code above

Before we initialize the `letter` object, We have to import the eapletter module. Then we initialize the `letter` function and its parameters as follows:

### **message**:  
Data type: **string**

Explanation: 
Parameters for storing text or strings that will be made large

### **type**:   
Data type: **string**

Explanation:
Converting components into custom character

Default: **#**   

  

### **use_dot**:   
Data type: **boolean**

Explanation:
Replace white space with dot (.)

Default: **true**

## Conclusion

So that was Documentation from the eapletter, A tool for displaying large text 

Goodbye and don't forget the semicolon, bye