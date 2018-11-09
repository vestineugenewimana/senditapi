import Users from '../db/users';
/* eslint linebreak-style: ["error", "windows"] */
class userController {
  static getUsers(req, res) {
    return res.json({ users: Users });
  }

  // registering a new user
  static addUser(req, res) {
    const { userId } = req.params;
    const {
      names, location, email, password,
    } = req.body;
    const newUser = {
      id: userId,
      names,
      location,
      email,
      password,
      parcels: [],
    };
    Users.push(newUser);
    return res.status(200).json({
      message: 'user registered',
    });
  }

  // login the user
  static userLogin(req, res) {
    const { email, password } = req.body;
    const user = Users.find(oneuser => oneuser.email == email);
    if (user && user.password == password) {
      res.status(200).json({
        message: 'user logged in',
        loggedinUser: user,
      });
    } else {
      res.status(400).json({
        message: 'failed to login',
      });
    }
  }

  //  user parcels
  static userParcel(req, res) {
    const { userId } = req.params;
    const user = Users.find(oneuser => oneuser.id == userId);
    if (user) {
      res.status(200).json({ message: 'user parcels', parcels: user.parcels });
    } else {
      res.status(400).json({
        message: 'user does not have parcels',
      });
    }
  }
}
export default userController;
