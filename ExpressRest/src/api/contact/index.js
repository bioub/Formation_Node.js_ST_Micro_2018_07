const express = require('express');
const ctrl = require('./controllers');
const auth = require('../../middlewares/auth');

const router = express.Router();

// List
/*
GET /api/contacts HTTP/1.1
Host: localhost:8080
*/
router.get('/',
  ctrl.list,
);

// Création
/*
POST /api/contacts HTTP/1.1
Host: localhost:8080
Content-Type: application/json

{
	"prenom": "Bill",
	"nom": "Gates"
}
*/
router.post('/',
 // auth,
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
