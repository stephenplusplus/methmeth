# methmeth
> call a method on an object in an [].prototype callback.

> *also see [propprop](https://github.com/stephenplusplus/propprop).*


#### Before
```js
var friends = [
  {
    name: 'passy',
    hobby: 'carrots',
    alert: function () {
      alert(this.name + ' likes ' + this.hobby);
    }
  },
  {
    name: 'sindre',
    vehicle: 'unicorn taxi',
    alert: function () {
      alert(this.name + ' drives ' + this.vehicle);
    }
  },
  {
    name: 'addy',
    invented: 'google *',
    alert: function () {
      alert(this.name + ' created ' + this.invented);
    }
  }
];

friends.forEach(function (item) {
  item.alert();
});
```

#### After
```js
var friends = [ /* ... */ ];

friends.forEach(methmeth('alert'));
```


## Added Bonus
```js
var friends = [
  // ...
  {
    name: 'dave',
    passion: 'dried mango',
    alert: function (extraEmotion, evenExtraEmotion) {
      var emotion = (extraEmotion || '') + (evenExtraEmotion || '');

      alert(this.name + ' loves ' + this.passion + emotion);
    }
  }
];

friends.forEach(methmeth('alert', '!!!!', '1!1!111'));
```


## Why?

![](https://cloud.githubusercontent.com/assets/574696/2713734/90997534-c4eb-11e3-9ff7-99ac669feeb8.jpg)

Perhaps you're already using [Lo-Dash](http://lodash.com), [Underscore.js](http://underscorejs.org), or another utility library. This should not supplement those libraries, and definitely cannot replace. This is better suited towards applications that don't want to carry the weight and/or functionality of such libraries, and just want something simple and modular.


## Install
`methmeth` can be used in the browser or within your Node.js apps.

#### Browser
```bash
$ bower install --save methmeth
```
```html
<script src="bower_components/methmeth/browser.js"></script>
```

#### Node.js
```bash
$ npm install --save methmeth
```
```js
var meth = require('methmeth');
```


## License

[MIT](http://opensource.org/licenses/MIT) © [Stephen Sawchuk](http://sawchuk.me)
