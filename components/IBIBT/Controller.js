
const Service = require('./Service');
const moment = require('moment-timezone');
const searchProducts = async (req, res) => {
  try {
    const searchTerm = req.query.search || ' ';
    console.log('1111', searchTerm);
    const { id_KH } = req.params;
    const page = req.query.page || 1;
    const pageSize = 20;
    const products = await Service.searchProducts(id_KH, searchTerm, page, pageSize);
    res.json({ status: true, products: products });
  } catch (error) {
    console.log('Đã xảy ra lỗi:', error);
    res.status(500).json({ error: error.message });
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
    const id_SP = req.query.sp;
    const items = await Service.detailProductService(id_SP);
    res.status(200).json({ status: true, items: items });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: false, error: 'Internal Server Error' });
  }
};
const detailProductXuatController = async (req, res) => {
  try {
    const id_SP = req.query.sp;
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
      res.status(200).json({ success: true, user: user.id_KH, TK: user });
    } else {
      return res.status(400).json({ success: false, message: 'Tài khoản hoặc mật khẩu sai' });
    }
  } catch (error) {
    console.log('Đã xảy ra lỗi:', error);
    return res.status(500).json({ success: false, message: 'Internal server error' });
  }
}
const locNhapHang = async (req, res) => {
  try {
    const { id_KH, filterType } = req.params;
    let startDate;
    const currentDate = new Date();
    const endDate = new Date().toLocaleString("en-US", { timeZone: "Asia/Ho_Chi_Minh" }).split(',')[0];

    switch (filterType) {
      case 'all':
        startDate = new Date('1753-01-01').toLocaleString("en-US", { timeZone: "Asia/Ho_Chi_Minh" }).split(',')[0];
        break;
      case 'today':
        startDate = endDate;
        break;
      case 'thisWeek':
        const firstDayOfWeek = currentDate.getDate() - currentDate.getDay() + (currentDate.getDay() === 0 ? -6 : 1);
        startDate = new Date(currentDate.setDate(firstDayOfWeek)).toLocaleString("en-US", { timeZone: "Asia/Ho_Chi_Minh" }).split(',')[0];
        break;
      case 'thisMonth':
        startDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).toLocaleString("en-US", { timeZone: "Asia/Ho_Chi_Minh" }).split(',')[0];
        break;
        case 'custom':
          let date = moment(req.query.date);
          console.log(date)
          date.tz('Europe/London').startOf('day');
          startDate = date.format('MM/DD/YYYY');
          break;
      default:
        throw new Error('Invalid filter type');
    }
    console.log(startDate, endDate)
    const page = req.query.page || 1;
    const pageSize = 20;
    const items = await Service.locnhaphang(id_KH, page, pageSize, startDate, endDate);
    res.status(200).json({ status: true, items: items });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: false, error: 'Internal Server Error' });
  }
};
const locXuatHang = async (req, res) => {
  try {
    const { id_KH, filterType } = req.params;
    let startDate;
    const currentDate = new Date();
    const endDate = new Date().toLocaleString("en-US", { timeZone: "Asia/Ho_Chi_Minh" }).split(',')[0];

    switch (filterType) {
      case 'all':
        startDate = new Date('1753-01-01').toLocaleString("en-US", { timeZone: "Asia/Ho_Chi_Minh" }).split(',')[0];
        break;
      case 'today':
        startDate = endDate;
        break;
      case 'thisWeek':
        const firstDayOfWeek = currentDate.getDate() - currentDate.getDay() + (currentDate.getDay() === 0 ? -6 : 1);
        startDate = new Date(currentDate.setDate(firstDayOfWeek)).toLocaleString("en-US", { timeZone: "Asia/Ho_Chi_Minh" }).split(',')[0];
        break;
      case 'thisMonth':
        startDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).toLocaleString("en-US", { timeZone: "Asia/Ho_Chi_Minh" }).split(',')[0];
        break;
        case 'custom':
          let date = moment(req.query.date);
          console.log(date)
          date.tz('Europe/London').startOf('day');
          startDate = date.format('MM/DD/YYYY');
          break;
      default:
        throw new Error('Invalid filter type');
    }
    console.log(startDate, endDate)
    const page = req.query.page || 1;
    const pageSize = 20;
    const items = await Service.locxuathang(id_KH, page, pageSize, startDate, endDate);
    res.status(200).json({ status: true, items: items });
  } catch (error) {
    res.status(500).json({ status: false, error: 'Internal Server Error' });
  }
};

module.exports = {
  searchProducts,
  getallImportmypageController,
  getallExportmypageController,
  detailProductController,
  detailProductXuatController,
  login,
  locNhapHang,
  locXuatHang
};
