const validateRequest = (req, res, next) => {
  try {
    next();
  } catch {}
};

module.exports = validateRequest;
