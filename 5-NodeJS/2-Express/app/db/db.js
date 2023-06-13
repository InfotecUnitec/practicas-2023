const fs = require("fs");
const { promisify } = require("util");

const PRODUCTS_FILE_PATH = __dirname + "/products.JSON";

const getAllProducts = async () => {
  try {
    const productsBuffer = await promisify(fs.readFile)(PRODUCTS_FILE_PATH);
    return [JSON.parse(productsBuffer.toString()).products, null];
  } catch (err) {
    return [null, err];
  }
};

// complete
const getOneProduct = async (id) => {};
const createProduct = async (payload) => {};
const updateProduct = async (id, payload) => {};
const deleteProduct = async (id) => {};

const db = {
  productsRepository: {
    getAll: getAllProducts,
    getOne: getOneProduct,
    create: createProduct,
    update: updateProduct,
    delete: deleteProduct,
  },
  init: () => {
    const devData = fs.readFileSync(__dirname + "/dev-products.JSON").toString();
    fs.writeFileSync(__dirname + "/products.JSON", devData);
  },
};

module.exports = db;
