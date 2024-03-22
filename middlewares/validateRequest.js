const validateRequest = (req, res, next) => {
  try {
    console.log(req.body);
    next();
  } catch {}
};

module.exports = validateRequest;
