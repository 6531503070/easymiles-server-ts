'use strict';

const { sanitizeEntity } = require('strapi-utils');

module.exports = {
  async register(ctx) {
    const { username, email, password, contact } = ctx.request.body;

    // Basic validation
    if (!username || !email || !password || !contact) {
      return ctx.badRequest('Please provide all required fields.');
    }

    // Register the user with the contact field
    const user = await strapi.plugins['users-permissions'].services.user.add({
      username,
      email,
      password,
      contact,
    });

    ctx.send({
      jwt: strapi.plugins['users-permissions'].services.jwt.issue({ id: user.id }),
      user: sanitizeEntity(user, { model: strapi.query('user', 'users-permissions').model }),
    });
  }
};
