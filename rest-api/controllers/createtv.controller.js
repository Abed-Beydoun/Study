const tv = require('../models/tv');
const allTvs = require('../data/tvs');
module.exports = (req, res) => {
  const newTv = new tv(req.body);
  allTvs.push(newTv);
  return res.status(200).json({
    message: 'Success',
  });
};
