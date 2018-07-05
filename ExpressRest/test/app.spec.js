const app = require('../src/app');
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const Contact = require('../src/api/contact/model');

chai.use(sinonChai);
chai.use(chaiHttp);

describe('Functionnal tests', function() {

  describe('GET /api/contacts', function() {

    it('should have status 200 and respond json', async function() {
      const contacts = [{prenom: 'A', nom: 'B'}];

      const mock = sinon.mock(Contact);
      mock.expects("find").once().resolves(contacts);

      const res = await chai.request(app).get('/api/contacts');
      expect(res).to.have.status(200);
      expect(res).to.be.json;
      expect(res.body).to.deep.equals(contacts);

      mock.verify();
    });

  });

  describe('POST /api/contacts', function() {

    it('should have status 201 and respond json', async function() {
      const contact = {prenom: 'A', nom: 'B'};

      const docReturned = {
        _id: '5b3ca2c13f29e56d81d7157b',
        updated: Date.now(),
        ...contact, // ES9 (REST/SPREAD object)
      };

      const mock = sinon.mock(Contact);
      mock.expects('create').once().withExactArgs(contact).resolves(docReturned);

      const res = await chai.request(app).post('/api/contacts').send(contact);
      expect(res).to.have.status(201);
      expect(res).to.be.json;
      expect(res.body).to.deep.equals(docReturned);

      mock.verify();
    });

  });

});

