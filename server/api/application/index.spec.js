'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var applicationCtrlStub = {
  index: 'applicationCtrl.index',
  show: 'applicationCtrl.show',
  create: 'applicationCtrl.create',
  update: 'applicationCtrl.update',
  destroy: 'applicationCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var applicationIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './application.controller': applicationCtrlStub
});

describe('Application API Router:', function() {

  it('should return an express router instance', function() {
    expect(applicationIndex).to.equal(routerStub);
  });

  describe('GET /api/applications', function() {

    it('should route to application.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'applicationCtrl.index')
        ).to.have.been.calledOnce;
    });

  });

  describe('GET /api/applications/:id', function() {

    it('should route to application.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'applicationCtrl.show')
        ).to.have.been.calledOnce;
    });

  });

  describe('POST /api/applications', function() {

    it('should route to application.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'applicationCtrl.create')
        ).to.have.been.calledOnce;
    });

  });

  describe('PUT /api/applications/:id', function() {

    it('should route to application.controller.update', function() {
      expect(routerStub.put
        .withArgs('/:id', 'applicationCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('PATCH /api/applications/:id', function() {

    it('should route to application.controller.update', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'applicationCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('DELETE /api/applications/:id', function() {

    it('should route to application.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'applicationCtrl.destroy')
        ).to.have.been.calledOnce;
    });

  });

});
