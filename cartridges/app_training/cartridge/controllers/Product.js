// 'use strict';

// var server = require('server');
// server.extend(module.superModule);

// server.append('Show', function (req, res, next) {
//     var ProductMgr = require('dw/catalog/ProductMgr');
//     var productId = res.getViewData().product.id;
//     var product = ProductMgr.getProduct(productId);
//     var suggestedProducts = [];

//     if (product.isCategorized()) {
//         var CatalogMgr = require('dw/catalog/CatalogMgr');
//         var ProductSearchModel = require('dw/catalog/ProductSearchModel');
//         var ProductSearch = require('*/cartridge/models/search/productSearch');
//         var apiProductSearch = new ProductSearchModel();
        
//         apiProductSearch.setCategoryID(product.getPrimaryCategory().ID);
//         apiProductSearch.search();
        
//         var productSearch = new ProductSearch(
//             apiProductSearch,
//             req.querystring,
//             req.querystring.srule,
//             CatalogMgr.getSortingOptions(),
//             CatalogMgr.getSiteCatalog().getRoot()
//         );

//         for (var index = 0; index < 4; index++) {
//             var suggestedProductId = productSearch.productIds[index].productID;
//             var suggestedProduct = ProductMgr.getProduct(suggestedProductId);
//             suggestedProducts.push(suggestedProduct);
//         }  
// for (var index = 0; index < Math.min(4, productSearch.productIds.length); index++) {
//     var suggestedProductId = productSearch.productIds[index].productID;
//     var suggestedProduct = ProductMgr.getProduct(suggestedProductId);
//     if (suggestedProduct) {
//         suggestedProducts.push({
//             URL: suggestedProduct.getPageURL(),
//             image: suggestedProduct.getImage('small', 0).getAbsURL(),
//             name: suggestedProduct.getName(),
//             price: suggestedProduct.getPriceModel().getPrice().getValue()
//         });
//     } 
// } 
// for (var index = 0; index < Math.min(4, productSearch.productIds.length); index++) {
//     var suggestedProductId = productSearch.productIds[index].productID;
//     var suggestedProduct = ProductMgr.getProduct(suggestedProductId);
          
//     if (suggestedProduct) {
//         var image = suggestedProduct.getImage('small', 0);
//         var imageURL = image ? image.getAbsURL() : '/path/to/default/image.jpg';
              
//         var price = suggestedProduct.getPriceModel() ? suggestedProduct.getPriceModel().getPrice().getValue() : 'Price not available';
      
//         suggestedProducts.push({
//             URL: suggestedProduct.getPageURL(),
//             image: imageURL,
//             name: suggestedProduct.getName(),
//             price: price
//         });
//     } 
// }
// 
//     }

//     res.setViewData({
//         suggestedProducts: suggestedProducts
//     });

//     next();
// });

// module.exports = server.exports();

'use strict';

var server = require('server');
server.extend(module.superModule);

server.append('Show', function (req, res, next) {
    var ProductFactory = require('dw/catalog/ProductMgr');
    var productId = res.getViewData().product.id;
    var product = ProductFactory.getProduct(productId);  
    var suggestedProducts = [];
  
    if (product.isCategorized()) {
        var CatalogMgr = require('dw/catalog/CatalogMgr');
        var ProductSearchModel = require('dw/catalog/ProductSearchModel');
        var ProductSearch = require('*/cartridge/models/search/productSearch');
  
        var apiProductSearch = new ProductSearchModel();
        apiProductSearch.setCategoryID(product.getPrimaryCategory().ID);
        apiProductSearch.search();
  
        var productSearch = new ProductSearch(apiProductSearch,
            req.querystring,
            req.querystring.srule,
            CatalogMgr.getSortingOptions(),
            CatalogMgr.getSiteCatalog().getRoot());
  
        for (var index = 0; index < 4; index++) {
            var suggestedProductId = productSearch.productIds[index].productID;
            var suggestedProduct = ProductFactory.getProduct(suggestedProductId);  
            suggestedProducts.push(suggestedProduct);
        }
    }

    res.setViewData({
        suggestedProducts: suggestedProducts
    });

    next(); 
});

module.exports = server.exports();