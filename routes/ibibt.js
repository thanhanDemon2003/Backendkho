var express = require('express');
var router = express.Router();
const Controller = require('../components/IBIBT/Controller');

/* GET users listing. */
router.get('/getall', Controller.getAllItemsController);
router.get('/searchProduct/:id_KH', Controller.searchProducts);

router.get('/getallimport', Controller.getallImportController);
router.get('/getimportpage/:id_KH', Controller.getallImportmypageController);

router.get('/getallexport', Controller.getallExportController);
router.get('/getexportpage/:id_KH', Controller.getallExportmypageController);

router.get('/detailproduct', Controller.detailProductController);
router.get('/detailproductxuat', Controller.detailProductXuatController);
router.post('/Login', Controller.login)

module.exports = router;