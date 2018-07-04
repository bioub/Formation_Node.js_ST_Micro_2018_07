const express = require('express');
const ctrl = require('./controllers');

const router = express.Router();

router.get('/',
  ctrl.list,
);

router.post('/',
  express.json(),
  ctrl.create,
);

router.get('/:id',
  ctrl.show,
);

router.delete('/:id',
  ctrl.remove,
);

router.patch('/:id',
  express.json(),
  ctrl.update,
);

module.exports = router;
