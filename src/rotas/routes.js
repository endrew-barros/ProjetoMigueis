const express = require('express');
const multer = require('multer');
const path = require('path');
const SessoesController = require('../controllers/SessoesController');
const PasseiosController = require('../controllers/PasseiosController');
const DashboardController = require('../controllers/DashboardController');
const HospedagemControllers = require('../controllers/HospedagemConstroller')

const routes = express.Router();

const storage = multer.diskStorage({
  destination: path.resolve(__dirname, '..', '..', 'uploads'),
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
  },
})
const upload = multer({ storage: storage });
// const upload = multer(uploadConfig);

routes.post('/sessoes', SessoesController.store);
routes.get('/passeios', PasseiosController.index);
routes.post('/passeios',
  upload.single('imagem'),
  PasseiosController.store);
routes.get('/dashboard', DashboardController.show);
routes.post('/passeios/:pid/res', HospedagemControllers.store);
module.exports = routes;