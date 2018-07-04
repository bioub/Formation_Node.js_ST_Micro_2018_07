const notFound = require('../../src/middlewares/not-found');
const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);

describe('#notFound()', function() {
  it('should set statusCode to 404 and call', function() {

    const req = {};
    const res = {
      json: sinon.fake(),
    };

    notFound(req, res);

    expect(res.statusCode).to.equals(404);
    // expect(res.json.calledOnce).to.be.true;
    // peut s'écrire grace à sinon-chai :
    expect(res.json).to.have.been.calledOnce;
    expect(res.json).to.have.been.calledWith({msg: 'Not Found'});

  });
});
