'use strict';

/**
 *  contact controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::contact.contact', ({strapi}) => ({
    async create(ctx) {
        const response = await super.create(ctx);

        const { email } = ctx.request.body.data;

        await strapi.plugins['email'].services.email.send({
            to: email,
            from: 'someone2@example.com',
            subject: 'Hello world',
            text: 'Hello world',
            html: `<h4>Hello world</h4>`,
        });

        return response;
    }
}));
