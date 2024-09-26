'use strict';

/**
 * company-website service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::company-website.company-website');
