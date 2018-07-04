const mongoose = require('mongoose');


const schema = new mongoose.Schema({
  nom: {
    required: [true, 'Le nom est obligatoire'],
    type: String,
  },
  ville: {
    required: [true, 'La ville est obligatoire'],
    type: String,
  },
  updated: { type: Date, default: Date.now },
}, { versionKey: false });

module.exports = mongoose.model('Company', schema);


/*
const contacts = [
  {
    id: '123',
    prenom: 'John',
    nom: 'Doe',
  },
  {
    id: '456',
    prenom: 'Jean',
    nom: 'Dupont',
  },
];

module.exports = class ContactModel {
  static find() {
    return Promise.resolve(contacts);
  }

  static findById(id) {
    return Promise.resolve(contacts.find((contact) => contact.id === id));
  }

  static findByIdAndUpdate(id, data) {
    const contact = contacts.find((contact) => contact.id === id);

    if (contact) {
      Object.assign(contact, data);
    }

    return Promise.resolve(contact);
  }

  static findByIdAndRemove(id) {
    const contact = contacts.find((contact) => contact.id === id);

    if (contact) {
      contacts.splice(contacts.indexOf(contact), 1);
    }

    return Promise.resolve(contact);
  }

  static create(contact) {
    const id = String(Math.floor(Math.random() * 10000));

    contact.id = id;
    contacts.push(contact);
    return Promise.resolve(contact);
  }
}
*/
