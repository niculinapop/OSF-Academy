/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./cartridges/app_storefront_base/cartridge/client/default/js/orderHistory/orderHistory.js":
/*!*************************************************************************************************!*\
  !*** ./cartridges/app_storefront_base/cartridge/client/default/js/orderHistory/orderHistory.js ***!
  \*************************************************************************************************/
/***/ (function(module) {



module.exports = function () {
    $('body').on('change', '.order-history-select', function (e) {
        var $ordersContainer = $('.order-list-container');
        $ordersContainer.empty();
        $.spinner().start();
        $('.order-history-select').trigger('orderHistory:sort', e);
        $.ajax({
            url: e.currentTarget.value,
            method: 'GET',
            success: function (data) {
                $ordersContainer.html(data);
                $.spinner().stop();
            },
            error: function (err) {
                if (err.responseJSON.redirectUrl) {
                    window.location.href = err.responseJSON.redirectUrl;
                }
                $.spinner().stop();
            }
        });
    });
};


/***/ }),

/***/ "./cartridges/app_storefront_base/cartridge/client/default/js/util.js":
/*!****************************************************************************!*\
  !*** ./cartridges/app_storefront_base/cartridge/client/default/js/util.js ***!
  \****************************************************************************/
/***/ (function(module) {



module.exports = function (include) {
    if (typeof include === 'function') {
        include();
    } else if (typeof include === 'object') {
        Object.keys(include).forEach(function (key) {
            if (typeof include[key] === 'function') {
                include[key]();
            }
        });
    }
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!************************************************************************************!*\
  !*** ./cartridges/app_storefront_base/cartridge/client/default/js/orderHistory.js ***!
  \************************************************************************************/


var processInclude = __webpack_require__(/*! ./util */ "./cartridges/app_storefront_base/cartridge/client/default/js/util.js");

$(document).ready(function () {
    processInclude(__webpack_require__(/*! ./orderHistory/orderHistory */ "./cartridges/app_storefront_base/cartridge/client/default/js/orderHistory/orderHistory.js"));
});

}();
/******/ })()
;