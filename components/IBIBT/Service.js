const model = require('./Model');

const searchProducts = async (id_KH, searchTerm, page, pageSize) => {
  try {
    const items = await model.getProducts(id_KH, searchTerm, page, pageSize);
    return items;
  } catch (error) {
    throw error;
  };
}

const getallImportmypage = async (id_KH, page, pageSize) => {
  try {
    const items = await model.getallImportmypage(id_KH, page, pageSize);
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
const locnhaphang = async (id_KH, page, pageSize, startDate, endDate, status) => {
  try {
    const items = await model.locnhaphang(id_KH, page, pageSize, startDate, endDate, status);
    return items;
  } catch (error) {
    throw error;
  }
}
const locxuathang = async (id_KH, page, pageSize, startDate, endDate, status) => {
  try {
    const items = await model.locxuathang(id_KH, page, pageSize, startDate, endDate, status);
    return items;
  } catch (error) {
    throw error;
  }
}
module.exports = {
  searchProducts,
  getallImportmypage,
  getallExportmypage,
  detailProductService,
  detailProductXuatService,
  login,
  locnhaphang,
  locxuathang
};
