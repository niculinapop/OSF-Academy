'use strict';

var server = require('server');

server.extend(module.superModule);

server.append('Show', function (req, res, next) {
    var viewData = res.getViewData();
    viewData.example = 'One string';

    res.setViewData(viewData);
    next();
});

module.exports = server.exports();
