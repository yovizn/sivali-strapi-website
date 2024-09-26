'use strict';

/**
 * home-dashboard service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::home-dashboard.home-dashboard');
