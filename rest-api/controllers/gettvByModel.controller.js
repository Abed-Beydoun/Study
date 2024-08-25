const allTvs = require('../data/tvs');
module.exports = (req, res) => {
  try {
    if (!req.query.model) {
      return res.status(400).json({
        message: 'Expected model in query params',
        data: null,
      });
    }
    const tvToBeFound = allTvs.find(
      (item) =>
        item.model.toLowerCase().trim() ===
          req.query.model.toLowerCase().trim() &&
        item.size === parseInt(req.query.size)
    );
    if (!tvToBeFound) {
      return res.status(404).json({
        message: 'Success',
        data: null,
      });
    } else {
      return res.status(200).json({
        message: 'Success',
        data: tvToBeFound,
      });
    }
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      message: 'Error',
    });
  }
};
