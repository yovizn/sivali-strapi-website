'use strict';

/**
 * list-attendance service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::list-attendance.list-attendance');
