const Model = require('./model');

/**
 * Controller List
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {function} next
 */
exports.list = async (req, res, next) => {
  try {
    const docs = await Model.find(/*{}, 'prenom nom'*/);
    res.json(docs);
  }
  catch (err) {
    next(err);
  }
};

/**
 * Controller Show
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {function} next
 */
exports.show = async (req, res, next) => {
  try {
    const doc = await Model.findById(req.params.id).populate('societe');
    //const doc = await Model.findOne({_id: req.params.id});

    if (!doc) {
      req.notFoundReason = 'Contact not found';
      return next();
    }

    res.json(doc);
  }
  catch (err) {
    next(err);
  }
};


/**
 * Controller Create
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {function} next
 */
exports.create = async (req, res, next) => {
  try {
    const doc = await Model.create(req.body);
    res.statusCode = 201;
    res.json(doc);
  }
  catch (err) {
    next(err);
  }
};

/**
 * Controller Remove
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {function} next
 */
exports.remove = async (req, res, next) => {
  try {
    const doc = await Model.findByIdAndDelete(req.params.id)
    res.json(doc);
  }
  catch (err) {
    next(err);
  }
};

/**
 * Controller Update
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {function} next
 */
exports.update = async (req, res, next) => {
  try {
    const doc = await Model.findByIdAndUpdate(req.params.id, req.body);
    res.json(doc);
  }
  catch (err) {
    next(err);
  }
};
