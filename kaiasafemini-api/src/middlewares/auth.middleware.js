const jwt = require("jsonwebtoken");
const logger = require('./../helpers/logger');

function authMiddleware(req, res, next) {
  try {
    let bearer = req.headers.token;
    logger.info("TEST DATA")
    logger.info(bearer)
      try {
        var decoded = jwt.verify(bearer, process.env.JWT_SECRET);
        logger.info(decoded)
        res.locals.user = { address: decoded.address };
        next();
      } catch (err) {
        throw new Error("Not authorized");
      }
  } catch (err) {
    logger.error(err.message);
    return res.status(404).json({ success: false, message: "Not authorized" });
  }
}

module.exports = authMiddleware;
