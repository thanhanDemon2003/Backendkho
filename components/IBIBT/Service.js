const model = require('./Model');

const getAllItemsService = async () => {
  try {
    const items = await model.Itemsgetall();
    return items;
  } catch (error) {
    throw error;
  }
};
const searchProducts = async (id_KH, searchTerm, page, pageSize) => {
  try {
    const items = await model.getProducts(id_KH, searchTerm, page, pageSize);
    return items;
  } catch (error) {
    throw error;
  };
}
const getallImport = async () => {
  try {
    const items = await model.getallImport();
    return items;
  } catch (error) {
    throw error;
  }
};
const getallImportmypage = async (id_KH, page, pageSize) => {
  try {
    const items = await model.getallImportmypage(id_KH, page, pageSize);
    return items;
  } catch (error) {
    throw error;
  }
};
const getallExport = async () => {
  try {
    const items = await model.getallExport();
    return items;
  } catch (error) {
    throw error;
  }
};
const getallExportmypage = async (id_KH, page, pageSize) => {
  try {
    const items = await model.getallExportmypage(id_KH, page, pageSize);
    return items;
  } catch (error) {
    throw error;
  }
};
//detailProduct
const detailProductService = async (id_SP) => {
  try {
    const items = await model.detailProduct(id_SP);
    return items;
  } catch (error) {
    throw error;
  }
};
const detailProductXuatService = async (id_SP) => {
  try {
    const items = await model.detailProductXuat(id_SP);
    return items;
  } catch (error) {
    throw error;
  }
};
const login = async (username, password) => {
  try {
    const user = await model.findByUsernameAndPassword(username, password);
    return user;
  } catch (error) {
    throw error;
  }
}
module.exports = {
  getAllItemsService,
  searchProducts,
  getallImport,
  getallImportmypage,
  getallExport,
  getallExportmypage,
  detailProductService,
  detailProductXuatService,
  login
};