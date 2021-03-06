'use strict';

/**
 * Navbar.js controller
 *
 * @description: A set of functions called "actions" for managing `Navbar`.
 */

module.exports = {

  /**
   * Retrieve navbar records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.navbar.search(ctx.query);
    } else {
      return strapi.services.navbar.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a navbar record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.navbar.fetch(ctx.params);
  },

  /**
   * Count navbar records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.navbar.count(ctx.query, populate);
  },

  /**
   * Create a/an navbar record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.navbar.add(ctx.request.body);
  },

  /**
   * Update a/an navbar record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.navbar.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an navbar record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.navbar.remove(ctx.params);
  }
};
