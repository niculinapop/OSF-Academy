'use strict';

var server = require('server');
server.extend(module.superModule);

server.append('Show', function (req, res, next) {
    var BasketMgr = require('dw/order/BasketMgr');
    var currentBasket = BasketMgr.getCurrentBasket();
    var cartTotal = 0; 
    var message = '';

    if (currentBasket) {
        cartTotal = currentBasket.totalGrossPrice.value;

        // Check if the cart total exceeds $200
        if (cartTotal > 200) {
            var ContentMgr = require('dw/content/ContentMgr');
            var cartTotalThreshold = ContentMgr.getContent('cartTotalThreshold');
            
            if(cartTotalThreshold) {
                message = cartTotalThreshold.custom.body; 
            } else {
                message = 'Your cart total exceeds $200!';
        
            }
        }
        
    }

    res.setViewData({
        cartTotal: cartTotal,
        customMessage: message
    }); 
 
    next();
});

module.exports = server.exports();
