'use strict';

/**
 * employee-website service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::employee-website.employee-website');
