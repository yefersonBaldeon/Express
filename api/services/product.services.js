const { faker } = require("@faker-js/faker");

class productService {
  products = [];

  constructor() {
    this.generete();
  }

  generete() {
    for (let index = 0; index < 100; index++) {
      this.products.push({
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.url(),
        isBlock: faker.datatype.boolean(),
      });
    }
  }

  find() {
    return new Promise((one) => {
      setTimeout(() => {
        one(this.products);
      }, 3500);
    });
  }

  findOne(id) {
    const product = this.products.find((item) => item.id === id);
    return product;
  }

  create(body) {
    const product = {
      id: faker.string.uuid(),
      ...body,
    };

    this.products.push(product);
    return product;
  }

  update(id, body) {
    const a = this.products.findIndex((one) => one.id === id);

    if (a === -1) {
      throw new Error("Product not found");
    }
    this.products[a] = { ...this.products[a], ...body };
    return this.products[a];
  }

  delete(id) {
    const a = this.products.findIndex((one) => one.id === id);
    if (a === -1) {
      throw new Error("Product not found");
    }

    this.products.splice(a, 1);
    return a;
  }
}

module.exports = productService;
