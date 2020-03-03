# datesformatter
This is a [Moment.js](https://github.com/moment/moment/) plugin that allows you to work with start and end dates without repetition, for example "mar 1 - 12"

## Note
* This plugin works on both server and client side.

## Usage

````javascript
// NodeJS: require instead of standard moment package
var moment = require('norepeatdate');
// You'll be able use Moment.js as you normally do
````

## API

The objects returned by methods are **Moment.js** objects (except `norepeatdate`) so you can
handle them with **Moment.js** native methods.

#### `.norepeatdate(date1, date2, 'lang');`

```javascript
var date = moment().norepeatdate(new Date(2020, 0), new Date(2020, 1), 'en');
// Jan 01 - Feb 01, 2020
```

## Installation

````
// For Node.js
$ npm install moment
$ npm install norepeatdate

// ...or install and save in package.json
$ npm install --save moment
$ npm install --save norepeatdate

// For bower
$ bower install moment
$ bower install norepeatdate
````

