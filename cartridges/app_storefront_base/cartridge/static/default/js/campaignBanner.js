/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!**************************************************************************************!*\
  !*** ./cartridges/app_storefront_base/cartridge/client/default/js/campaignBanner.js ***!
  \**************************************************************************************/


$(document).ready(function () {
    if (window.resetCampaignBannerSessionToken) {
        window.sessionStorage.removeItem('hide_campaign_banner');
    }

    var campaignBannerStatus = window.sessionStorage.getItem('hide_campaign_banner');
    $('.campaign-banner .close').on('click', function () {
        $('.campaign-banner').addClass('d-none');
        window.sessionStorage.setItem('hide_campaign_banner', '1');
    });

    if (!campaignBannerStatus || campaignBannerStatus < 0) {
        $('.campaign-banner').removeClass('d-none');
    }
});

/******/ })()
;