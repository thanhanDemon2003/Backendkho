
const Service = require('./Service');

const getAllItemsController = async (req, res) => {
  try {
    const items = await Service.getAllItemsService();
    res.status(200).json({ status: true, items: items });
  } catch (error) {
    res.status(500).json({ status: false, error: 'Internal Server Error' });
  }
};
const searchProducts = async (req, res) => {
  try {
    const  searchTerm  = req.query.search || ' ';
    console.log('1111',searchTerm);
    const { id_KH } = req.params;
    const page = req.query.page || 1;
    const pageSize = 20;
    const products = await Service.searchProducts(id_KH, searchTerm, page, pageSize);
    res.json({ status: true, products: products });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const getallImportController = async (req, res) => {
  try {
    const items = await Service.getallImport();
    res.status(200).json({ status: true, items: items });
  } catch (error) {
    res.status(500).json({ status: false, error: 'Internal Server Error' });
  }
};
const getallImportmypageController = async (req, res) => {
  try {
    const { id_KH } = req.params;
    const page = req.query.page || 1;
    const pageSize = 20;
    const items = await Service.getallImportmypage(id_KH, page, pageSize);
    res.status(200).json({ status: true, items: items });
  } catch (error) {
    res.status(500).json({ status: false, error: 'Internal Server Error' });
  }
};
const getallExportController = async (req, res) => {
  try {
    const items = await Service.getallExport();
    res.status(200).json({ status: true, items: items });
  } catch (error) {
    res.status(500).json({ status: false, error: 'Internal Server Error' });
  }
};
const getallExportmypageController = async (req, res) => {
  try {
    const { id_KH } = req.params;
    const page = req.query.page || 1;
    const pageSize = 20;
    const items = await Service.getallExportmypage(id_KH, page, pageSize);
    res.status(200).json({ status: true, items: items });
  } catch (error) {
    res.status(500).json({ status: false, error: 'Internal Server Error' });
  }
};
//detailProductService
const detailProductController = async (req, res) => {
  try {
  const id_SP  = req.query.sp;
  const items = await Service.detailProductService(id_SP);
  res.status(200).json({ status: true, items: items });
} catch (error) {
  console.log(error);
  res.status(500).json({ status: false, error: 'Internal Server Error' });
}
};
const detailProductXuatController = async (req, res) => {
  try {
  const id_SP  = req.query.sp;
  const items = await Service.detailProductXuatService(id_SP);
  res.status(200).json({ status: true, items: items });
} catch (error) {
  console.log(error);
  res.status(500).json({ status: false, error: 'Internal Server Error' });
}
}
const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await Service.login(username, password);
    if (user) {
      if (user.is_active == false) {
        return res.status(400).json({ success: false, message: 'Tài khoản không có quyền truy cập thông tin' })
      }
      console.log(user.is_active)
       res.status(200).json({ success: true, user: 12, TK: user });
    } else {
      return res.status(400).json({ success: false, message: 'Tài khoản hoặc mật khẩu sai' });
    }
  } catch (error) {
    console.log('Đã xảy ra lỗi:', error);
    return res.status(500).json({ success: false, message: 'Internal server error' });
  }
}
module.exports = {
  getAllItemsController,
  searchProducts,
  getallImportController,
  getallImportmypageController,
  getallExportmypageController,
  getallExportController,
  detailProductController,
  detailProductXuatController,
  login
};
