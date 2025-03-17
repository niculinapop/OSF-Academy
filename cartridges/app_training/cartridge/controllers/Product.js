
'use strict';

var server = require('server');
server.extend(module.superModule);

server.append('Show', function (req, res, next) {
    var ProductMgr = require('dw/catalog/ProductMgr');
    var productId = res.getViewData().product.id;
    var product = ProductMgr.getProduct(productId);
    var suggestedProducts = [];

    if (product.isCategorized()) {
        var CatalogMgr = require('dw/catalog/CatalogMgr');
        var ProductSearchModel = require('dw/catalog/ProductSearchModel');
        var ProductSearch = require('*/cartridge/models/search/productSearch');
        var apiProductSearch = new ProductSearchModel();
        
        apiProductSearch.setCategoryID(product.getPrimaryCategory().ID);
        apiProductSearch.search();
        
        var productSearch = new ProductSearch( 
            apiProductSearch,
            req.querystring,
            req.querystring.srule,
            CatalogMgr.getSortingOptions(),
            CatalogMgr.getSiteCatalog().getRoot()
        );

        for (var index = 0; index < 4; index++) {
            var suggestedProductId = productSearch.productIds[index].productID;
            var suggestedProduct = ProductMgr.getProduct(suggestedProductId);
            suggestedProducts.push(suggestedProduct);
        }  


    }

    res.setViewData({
        suggestedProducts: suggestedProducts
    });

    next();
});

module.exports = server.exports();
