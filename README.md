scrollWidth
===========

Tiny AMD module that will return you the browsers scrollbar width

can be installed via bower, AMD is optional.

AMD usage:

```javascript
  require(['scrollWidth'], function(scrollWidth){
    alert("My scroll's width is " + scrollWidth + "px");
  });
```

without AMD:

```javascript
  alert("My scroll's width is " + window.scrollWidth + "px");
```
