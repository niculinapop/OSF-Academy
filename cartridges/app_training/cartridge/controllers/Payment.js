/* eslint-disable require-jsdoc */

'use strict'


var server = require('server');
var PaymentModel = require('~/cartridge/static/default/js/PaymentModel'); // Poți să folosești un model personalizat pentru procesarea datelor 

function validatePaymentDetails(formData) {
    var errors = [];

    if (!formData.cardNumber || formData.cardNumber.length !== 16) {
        errors.push('Card number is invalid.');
    }
    if (!formData.expiryMonth || formData.expiryMonth < 1 || formData.expiryMonth > 12) {
        errors.push('Expiration month is invalid.');
    }
    if (!formData.expiryYear || formData.expiryYear.length !== 4) {
        errors.push('Expiration year is invalid.');
    }
    if (!formData.securityCode || formData.securityCode.length !== 3) {
        errors.push('Security code is invalid.');
    }
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
        errors.push('Email is invalid.');
    }

    return errors; 
} 

server.get('Start', function (req, res, next) {
    res.render('checkout/paymentForm'); // Redirectează către formularul ISML
    next();
});

server.post('Submit', function (req, res, next) {
    var formData = req.form;

    // Validarea datelor
    var errors = validatePaymentDetails(formData);

    if (errors.length > 0) {
        res.render('checkout/paymentForm', {
            errors: errors,
            formData: formData
        });
    } else {
        // Dacă datele sunt valide, procesează-le (de exemplu, salvează-le sau trimite-le mai departe)
        PaymentModel.processPayment(formData);
        res.render('checkout/confirmation');
    }

    next();
});

module.exports = server.exports();
