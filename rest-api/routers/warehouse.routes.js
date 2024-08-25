const express = require('express');
const getAllTvs = require('../controllers/getalltvs.controller');
const createTv = require('../controllers/createtv.controller');
const getTvByModel = require('../controllers/gettvByModel.controller');

const warehouseRouter = express.Router();

warehouseRouter.get('/get-all-tvs', getAllTvs);
warehouseRouter.post('/create-tv', createTv);
warehouseRouter.get('/get-tv-by-model', getTvByModel);

module.exports = warehouseRouter;
