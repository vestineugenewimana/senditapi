import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/server';

chai.use(chaiHttp);

describe('PARCELS', () => {
  describe('Get all parcels', () => {
    it('should return an object of all parcels', (done) => {
      chai
        .request(app)
        .get('/api/v1/parcels')
        .end((err, res) => {
          chai.expect(res.statusCode).to.be.equal(200);
          chai.expect(res.body).to.be.a('object');
          done();
        });
    });
  });
  describe('Get one parcel with id 1', () => {
    it('should return one parcel object', (done) => {
      const id = 1;
      chai
        .request(app)
        .get(`/api/v1/parcels/${id}`)
        .end((err, res) => {
          chai.expect(res.statusCode).to.be.equal(200);
          chai.expect(res.body).to.be.a('object');
          chai.expect(res.body.message).to.equal('parcel found');
          done();
        });
    });
  });
  describe('Get one parcel with id 10', () => {
    it('should return error', (done) => {
      const id = 10;
      chai
        .request(app)
        .get(`/api/v1/parcels/${id}`)
        .end((err, res) => {
          chai.expect(res.statusCode).to.be.equal(400);
          chai.expect(res.body.message).to.equal('parcel not found');
          done();
        });
    });
  });
  describe('adding a parcel', () => {
    it('should add new parcel', (done) => {
      const parcel = {
        pickupLocation: 'Ruhango,Avenue 25 street',
        destinationLocation: 'Musanze, City Market',
        weight: '400 g',
        quantity: '8',
        comment: 'clothes',
      };
      chai
        .request(app)
        .post('/api/v1/parcels')
        .send(parcel)
        .end((err, res) => {
          chai.expect(res.statusCode).to.be.equal(200);
          chai.expect(res.body).to.be.a('object');
          chai.expect(res.body.message).to.equal('created a new parcel');

          done();
        });
    });
  });
  describe('Delete a parcel with id 3', () => {
    it('should return one parcel object', (done) => {
      const id = 3;
      chai
        .request(app)
        .delete(`/api/v1/parcels/${id}`)
        .end((err, res) => {
          chai.expect(res.statusCode).to.be.equal(200);
          chai.expect(res.body).to.be.a('object');
          chai.expect(res.body.message).to.equal('parcel deleted');
          done();
        });
    });
  });
  describe('Delete a parcel that doesnot exist', () => {
    it('should return one parcel object', (done) => {
      const id = 10;
      chai
        .request(app)
        .delete(`/api/v1/parcels/${id}`)
        .end((err, res) => {
          chai.expect(res.statusCode).to.be.equal(400);
          chai.expect(res.body.message).to.equal('parcel do not exist');
          done();
        });
    });
  });
  describe('cancel a parcel with id 1', () => {
    it('should cancel an order', (done) => {
      const id = 1;
      chai
        .request(app)
        .put(`/api/v1/parcels/${id}/cancel`)
        .set('content-type', 'application/json')
        .send({
          cancel: true,
        })
        .end((err, res) => {
          chai.expect(res.status).to.equal(200);
          chai.expect(res.body.message).to.equal('order cancelled');
          done();
        });
    });
  });
  describe('cancel a parcel with id 10', () => {
    it('should fail to cancel an order', (done) => {
      const id = 10;
      chai
        .request(app)
        .put(`/api/v1/parcels/${id}/cancel`)
        .set('content-type', 'application/json')
        .send({
          cancel: true,
        })
        .end((err, res) => {
          chai.expect(res.status).to.equal(400);
          chai.expect(res.body.message).to.equal('parcel cannot be cancelled');
          done();
        });
    });
  });
});
