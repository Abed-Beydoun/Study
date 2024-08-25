const users = require('../data/users');
const authorize = (req, res, next) => {
  const userId = req.headers.userid;
  if (!userId) {
    return res.status(401).json({
      message: 'Unauthorized',
    });
  }
  const isUserFound = users.find(
    (singleUser) => singleUser.id === parseInt(userId)
  );
  if (!isUserFound) {
    return res.status(401).json({
      message: 'Unauthorized',
    });
  }
  return next();
};

module.exports = authorize;
