module.exports = (req, res, next) => {
  if (req.headers.authorization === 'Bearer 12345') { // TODO vérifier un token généré depuis /api/login
    return next();
  }

  res.statusCode = 401;
  res.json({
    msg: 'Unauthorized',
  });
};

