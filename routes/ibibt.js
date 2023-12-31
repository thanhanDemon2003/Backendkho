var express = require('express');
var router = express.Router();
const Controller = require('../components/IBIBT/Controller');

/* GET users listing. */
router.get('/searchProduct/:id_KH', Controller.searchProducts);

router.get('/getimportpage/:id_KH', Controller.getallImportmypageController);

router.get('/getexportpage/:id_KH', Controller.getallExportmypageController);

router.get('/detailproduct', Controller.detailProductController);
router.get('/detailproductxuat', Controller.detailProductXuatController);
router.post('/Login', Controller.login)

router.get('/locnhaphang/:id_KH/:filterType', Controller.locNhapHang);

router.get('/locxuathang/:id_KH/:filterType', Controller.locXuatHang);


module.exports = router;