'use strict';

/**
 * Custom Banner Component
 * This component renders a clickable banner with an image that links to a specified category.
 */

// Import necessary SFCC modules
var Template = require('dw/util/Template');
var HashMap = require('dw/util/HashMap');
var URLUtils = require('dw/web/URLUtils');
var CatalogMgr = require('dw/catalog/CatalogMgr');

/**
 * @constructor
 * @param {dw.experience.ComponentScriptContext} context - The component script context
 */
function CustomBanner(context) {
    // Initialize the model to pass data to the ISML template
    var model = new HashMap();
    var component = context.component;

    // Get the attributes configured in Page Designer
    var image = component.getAttribute('image'); // Image attribute
    var categoryId = component.getAttribute('category'); // Category attribute (category ID)

    // If an image is provided, add it to the model
    if (image) {
        model.put('image', image);
    }

    // If a category is provided, get its URL and add it to the model
    if (categoryId) {
        var category = CatalogMgr.getCategory(categoryId);
        if (category && category.isOnline()) {
            var categoryUrl = URLUtils.url('Search-Show', 'cgid', category.ID).toString();
            model.put('categoryUrl', categoryUrl);
        }
    }

    // Render the ISML template with the model
    return new Template('experience/components/assets/custombanner').render(model).text;
}

// Export the component
module.exports = CustomBanner;