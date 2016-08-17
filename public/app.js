'use strict';

var Thing = React.createClass({
  render: function render() {
    return React.createElement(
      'h1',
      null,
      'This works!'
    );
  }
});

ReactDOM.render(React.createElement(Thing, null), document.getElementById('app'));
"use strict";

console.log("Testing gulp setup");
console.log([1, 2, 3].map(function (n) {
  return n + 1;
}));