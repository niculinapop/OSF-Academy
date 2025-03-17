/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./cartridges/app_storefront_base/cartridge/client/default/js/components/formValidation.js":
/*!*************************************************************************************************!*\
  !*** ./cartridges/app_storefront_base/cartridge/client/default/js/components/formValidation.js ***!
  \*************************************************************************************************/
/***/ (function(module) {



/**
 * Remove all validation. Should be called every time before revalidating form
 * @param {element} form - Form to be cleared
 * @returns {void}
 */
function clearFormErrors(form) {
    $(form).find('.form-control.is-invalid').removeClass('is-invalid');
}

module.exports = function (formElement, payload) {
    // clear form validation first
    clearFormErrors(formElement);
    $('.alert', formElement).remove();

    if (typeof payload === 'object' && payload.fields) {
        Object.keys(payload.fields).forEach(function (key) {
            if (payload.fields[key]) {
                var feedbackElement = $(formElement).find('[name="' + key + '"]')
                    .parent()
                    .children('.invalid-feedback');

                if (feedbackElement.length > 0) {
                    if (Array.isArray(payload[key])) {
                        feedbackElement.html(payload.fields[key].join('<br/>'));
                    } else {
                        feedbackElement.html(payload.fields[key]);
                    }
                    feedbackElement.siblings('.form-control').addClass('is-invalid');
                }
            }
        });
    }
    if (payload && payload.error) {
        var form = $(formElement).prop('tagName') === 'FORM'
            ? $(formElement)
            : $(formElement).parents('form');

        form.prepend('<div class="alert alert-danger" role="alert">'
            + payload.error.join('<br/>') + '</div>');
    }
};


/***/ }),

/***/ "./cartridges/app_storefront_base/cartridge/client/default/js/profile/profile.js":
/*!***************************************************************************************!*\
  !*** ./cartridges/app_storefront_base/cartridge/client/default/js/profile/profile.js ***!
  \***************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



var formValidation = __webpack_require__(/*! ../components/formValidation */ "./cartridges/app_storefront_base/cartridge/client/default/js/components/formValidation.js");

var location = window.location;

module.exports = {
    submitProfile: function () {
        $('form.edit-profile-form').submit(function (e) {
            var $form = $(this);
            e.preventDefault();
            var url = $form.attr('action');
            $form.spinner().start();
            $('form.edit-profile-form').trigger('profile:edit', e);
            $.ajax({
                url: url,
                type: 'post',
                dataType: 'json',
                data: $form.serialize(),
                success: function (data) {
                    $form.spinner().stop();
                    if (!data.success) {
                        formValidation($form, data);
                    } else {
                        location.href = data.redirectUrl;
                    }
                },
                error: function (err) {
                    if (err.responseJSON.redirectUrl) {
                        window.location.href = err.responseJSON.redirectUrl;
                    }
                    $form.spinner().stop();
                }
            });
            return false;
        });
    },

    submitPassword: function () {
        $('form.change-password-form').submit(function (e) {
            var $form = $(this);
            e.preventDefault();
            var url = $form.attr('action');
            $form.spinner().start();
            $('form.change-password-form').trigger('password:edit', e);
            $.ajax({
                url: url,
                type: 'post',
                dataType: 'json',
                data: $form.serialize(),
                success: function (data) {
                    $form.spinner().stop();
                    if (!data.success) {
                        formValidation($form, data);
                    } else {
                        location.href = data.redirectUrl;
                    }
                },
                error: function (err) {
                    if (err.responseJSON.redirectUrl) {
                        window.location.href = err.responseJSON.redirectUrl;
                    }
                    $form.spinner().stop();
                }
            });
            return false;
        });
    }
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
/*!*******************************************************************************!*\
  !*** ./cartridges/app_storefront_base/cartridge/client/default/js/profile.js ***!
  \*******************************************************************************/


var processInclude = __webpack_require__(/*! ./util */ "./cartridges/app_storefront_base/cartridge/client/default/js/util.js");

$(document).ready(function () {
    processInclude(__webpack_require__(/*! ./profile/profile */ "./cartridges/app_storefront_base/cartridge/client/default/js/profile/profile.js"));
});

}();
/******/ })()
;