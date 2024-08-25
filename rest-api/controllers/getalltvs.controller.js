const allTvs = require('../data/tvs');
module.exports = (req, res) => {
  return res.status(200).json({
    message: 'Success',
    data: allTvs,
  });
};
