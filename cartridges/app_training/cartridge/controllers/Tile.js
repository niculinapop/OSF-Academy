'use strict';

var server = require('server');
server.extend(module.superModule);

server.append('Show', function (req, res, next) {
  
    var additionalData = { customField: 'customValue' };
    res.setViewData(additionalData);

    next(); 
});

module.exports = server.exports();
