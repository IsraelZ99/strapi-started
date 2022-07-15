"use strict";

/**
 *  product controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::product.product", ({ strapi }) => ({
//   async find(ctx) {
//     ctx.query = { ...ctx.query, local: "en" };
//     const { data, meta } = await super.find(ctx);
//     const products = data.map((product) => {
//       const { title, description, price, quantity } = product.attributes;
//       return {
//         id: product.id,
//         title,
//         description,
//         price,
//         quantity,
//       };
//     });
//     return { products, meta };
//   },
}));
