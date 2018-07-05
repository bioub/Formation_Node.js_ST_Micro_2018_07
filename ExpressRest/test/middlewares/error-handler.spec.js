const errorHandler = require('../../src/middlewares/error-handler');
const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);

describe('#errorHandler()', function() {
  it('should set statusCode to 500 and call res.json with error message', function() {

    const err = {
      message: 'My custom error',
    };
    const res = {
      json: sinon.fake(),
    };

    errorHandler(err, undefined, res);

    expect(res.statusCode).to.equals(500);
    expect(res.json).to.have.been.calledOnce;
    expect(res.json).to.have.been.calledWith({msg: err.message});

  });

});
