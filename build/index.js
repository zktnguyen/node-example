'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.get('/', function (req, res) {
  res.json({ message: "Hey welcome to Node.js & Express" });
});

app.listen(3000, function () {
  return console.log("Listening to port 3000");
});
//# sourceMappingURL=index.js.map