import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/server';

chai.use(chaiHttp);
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
  describe('loggin a user with invalid email', () => {
    it('should fail to login user', (done) => {
      chai
        .request(app)
        .post('/api/v1/users/login')
        .send({
          email: 'fail@gmail.com',
          password: 'testpassword',
        })
        .end((err, res) => {
          chai.expect(res.status).to.equal(400);
          chai.expect(res.body.message).to.equal('failed to login');
          done();
        });
    });
  });
  describe('list all user parcels', () => {
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
  });
  describe('Fail to list user parcels with id 10', () => {
    it('should not any parcel', (done) => {
      const userId = 10;
      chai
        .request(app)
        .get(`/api/v1/users/${userId}/parcels`)
        .end((err, res) => {
          chai.expect(res.status).to.equal(400);
          chai.expect(res.body.message).to.equal('user does not have parcels');
          done();
        });
    });
  });
});
