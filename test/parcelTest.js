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
  describe('adding a parcel', () => {
    it('should add new parcel', (done) => {
      const parcel = {
        pickupLocation: 'Ruhango,Avenue 25 street',
        destinationLocation: 'Musanze, City Market',
        weight: '400 g',
        quantity: 8,
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
  describe('adding invalid parcel', () => {
    it('should fail to add new parcel', (done) => {
      const parcel = {
        pickupLocation: 'Ruhango,Avenue 25 street',
        destinationLocation: 'Musanze, City Market',
        weight: '400 g',
        comment: 'clothes',
      };
      chai
        .request(app)
        .post('/api/v1/parcels')
        .send(parcel)
        .end((err, res) => {
          chai.expect(res.statusCode).to.be.equal(400);
          chai.expect(res.body.message).to.equal('invalid data');

          done();
        });
    });
  });
});
