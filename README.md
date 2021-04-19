# pragmatic-email-regex

## Disclaimer

I am not a specialist when it comes to this subject. Just a pragmatic programmer who wants to help.

## Why ?

After building a whole lot of different web applications, I often came across cases where users enter all kinds of weird email addresses in my forms, sometimes even using discount coupons thinking that's what they had to do. This library is by no means a perfect source of truth when it comes to email validation, and it's not trying to be. People who want to nitpick about the exact specs and all the gazillion theoretical possibilities of the correct email string format are gonna be right when they say my library is not perfect. I'm not saying it is, I'm just sayin it's a solid, pragmatic, effective way to filter out most of the cases and hint users about their weird ass looking emails before they submit something that is not going to work either by mistake or simply to be annoying.

Plus it gave me a small pet project to test out github actions to automatically publish an npm package when pushing or merging to master...

## How ?

I built this regular expression from inspirations on the web and by cross-checking with some of the big tech websites to see if it made sense when trying to filter out weird email addresses.

## Installation

```shell
$ yarn add pragmatic-email-regex
```

or

```shell
$ npm i pragmatic-email-regex
```

## Usage

```js
// I recommend importing it with that name cause it makes more sense in the code.
import isValidEmail from 'pragmatic-email-regex';

// Return value is true or false depending on the string shape, that's it.
isValidEmail('email@right.here'); // true
```
