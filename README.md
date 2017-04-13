scroll-width
===========

Because not everyone hides the scrollbar on OSX ;)
Tiny AMD module that will return you the browsers scrollbar width
can be installed via bower, AMD is optional.

Installation

## NPM
```
  npm install scroll-width --save
```
## Bower
```
  bower install scroll-width --save
```

## AMD usage:

```javascript
  require(['scrollWidth'], function(scrollWidth){
    alert("My scroll's width is " + scrollWidth + "px");
  });
```

## without AMD:

```javascript
  alert("My scroll's width is " + window.scrollWidth + "px");
```
