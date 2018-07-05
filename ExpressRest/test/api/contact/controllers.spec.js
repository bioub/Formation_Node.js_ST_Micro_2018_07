const contactCtrl = require('../../../src/api/contact/controllers');
const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const Contact = require('../../../src/api/contact/model');

chai.use(sinonChai);


describe('Contact Controller', function() {

  describe('#list()', function() {

    beforeEach(() => {
      // mongoimport
    });

    it('should call Contact.find and res.json', async function() {
      const contacts = [{prenom: 'A', nom: 'B'}];

      const mock = sinon.mock(Contact);
      mock.expects("find").once().resolves(contacts);
      // pour tester les methodes chainées comme .limit() => sinon-mongoose

      const res = {
        json: sinon.spy(),
      }

      await contactCtrl.list(undefined, res);

      expect(res.json).to.have.been.calledOnceWith(contacts);

      mock.verify();

    });

    it('should call next when Contact.find rejects', async function() {

      const err = {msg: 'C pas bien'};

      const mock = sinon.mock(Contact);
      mock.expects("find").once().rejects(err);
      // pour tester les methodes chainées comme .limit() => sinon-mongoose

      const next = sinon.spy();

      await contactCtrl.list(undefined, undefined, next);

      expect(next).to.have.been.calledOnceWith(err);

      mock.verify();

    });

  });

  describe('#create()',  () => {


    it('should set statusCode to 201 and call res.json with the return of Model.create', async () => {
      const req = {
        body: {
          prenom: 'A',
          nom: 'B',
        }
      };

      const res = {
        json: sinon.fake(),
      };

      const docReturned = {
        _id: '5b3ca2c13f29e56d81d7157b',
        updated: Date.now(),
        ...req.body, // ES9 (REST/SPREAD object)
      };

      const mock = sinon.mock(Contact);
      mock.expects('create').once().withExactArgs(req.body).resolves(docReturned);

      await contactCtrl.create(req, res);

      expect(res.statusCode).to.be.equals(201);
      expect(res.json).to.have.been.calledOnceWith(docReturned);

      mock.verify();
    });

    it('should call next when Model.create rejects', async () => {
      const req = {
        body: {
          prenom: 'A',
          nom: 'B',
        }
      };

      const err = {
        message: 'Some error',
      };

      const next = sinon.fake();

      const mock = sinon.mock(Contact);
      mock.expects('create').once().withExactArgs(req.body).rejects(err);

      await contactCtrl.create(req, undefined, next);

      expect(next).to.have.been.calledOnceWith(err);

      mock.verify();
    });

  });

});

