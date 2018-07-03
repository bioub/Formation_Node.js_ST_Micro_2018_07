const contacts = [
  {
    prenom: 'Jean',
    nom: 'Dupont',
    id: '123'
  },
  {
    prenom: 'Eric',
    nom: 'Martin',
    id: '456'
  },
];

const { Router } = require('express');
const router = Router();

/* GET /contacts */
router.get('/', (req, res, next) => {
   res.render('contacts/list', { contacts });
});

/* GET /contacts/:id */
router.get('/:id', (req, res, next) => {
  const id = req.params.id;

  const contact = contacts.find((c) => c.id === id);

  if (!contact) {
    return next();
  }

  res.render('contacts/show', { contact });
});

module.exports = router;
