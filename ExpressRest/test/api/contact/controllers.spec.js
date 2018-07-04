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

});

