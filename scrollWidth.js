(function (root, factory) {
  // optional AMD https://github.com/umdjs/umd/blob/master/amdWeb.js
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['jquery'], factory);
  } else {
    // Browser globals
    root.mediaQuery = factory(root.$);
  }
}(this, function ($) {
  /*jslint browser: true */
  'use strict';

  var width;

  function measureScroll () {
    var testDiv, cssAttributes, attr;

    //creates a DOM element
    testDiv = document.createElement('div');

    //stores the CSS atributes
    cssAttributes = {
      width: "100px",
      height: "100px",
      overflow: "scroll",
      position: "absolute",
      top: "-999px"
    };

    //sets all the styles on testDiv
    for(attr in cssAttributes){
      testDiv.style[attr] = cssAttributes[attr];
    }

    //adds the testDiv to the DOM
    document.body.appendChild(testDiv);

    //measures the the scrollWidth
    width = testDiv.offsetWidth - testDiv.clientWidth;

    //removes the testDiv from the DOM
    document.body.removeChild(testDiv);

    //returns the width
    return width;
  }

  //returns the width if already measured
  return width || measureScroll();

}));
