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
  describe('cancel a parcel with id 3', () => {
    it('should return canceled order message', (done) => {
      const id = 3;
      chai
        .request(app)
        .put(`/api/v1/parcels/${id}/cancel`)
        .set('content-type', 'application/json')
        .end((err, res) => {
          chai.expect(res.statusCode).to.be.equal(200);
          chai.expect(res.body).to.be.a('object');
          done();
        });
    });
  });
});
describe('USERS', () => {
  describe('list all users', () => {
    it('should list all users', (done) => {
      chai
        .request(app)
        .get('/api/v1/users')
        .end((err, res) => {
          chai.expect(res.status).to.equal(200);
          chai.expect(res.body).to.be.a('object');
          done();
        });
    });
  });
  describe('register new user', () => {
    it('should register a new user', (done) => {
      chai
        .request(app)
        .post('/api/v1/users/register')
        .set('content-type', 'application/json')
        .send({
          names: 'Kwizera edward',
          email: 'testemail@gmail.com',
          location: 'kigali',
          password: 'testpassword',
        })
        .end((err, res) => {
          chai.expect(res.status).to.equal(200);
          chai.expect(res.body.message).to.equal('user registered');
          done();
        });
    });
  });
  describe('loggin a user', () => {
    it('should login existing user', (done) => {
      chai
        .request(app)
        .post('/api/v1/users/login')
        .set('content-type', 'application/json')
        .send({
          email: 'testemail@gmail.com',
          password: 'testpassword',
        })
        .end((err, res) => {
          chai.expect(res.status).to.equal(200);
          chai.expect(res.body.message).to.equal('user logged in');
          done();
        });
    });
  });
  describe('list all user parcels', ()=>{
    it('should list all user parcels', (done) => {
      const userId = 1;
      chai
        .request(app)
        .get(`/api/v1/users/${userId}/parcels`)
        .end((err, res) => {
          chai.expect(res.status).to.equal(200);
          chai.expect(res.body).to.be.a('object');
          chai.expect(res.body.message).to.equal('user parcels');
          done();
        });
    });
  })
});
