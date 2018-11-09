import Users from '../db/users';

class userController {
  static getUsers(req, res) {
    return res.json({
      message: 'all users',
      users: Users,
    });
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
    };
    if (newUser) {
      Users.push(newUser);
      return res.status(200).json({
        message: 'registered successfuly',
      });
    }
    return res.json({
      message: 'registration failed',
    });
  }

  // login the user
  static userLogin(req, res) {
    const { email, password } = req.body;
    const user = Users.find(oneuser => oneuser.email == email);
    if (user && user.password == password) {
      res.status(200).json({
        message: 'successfuly logged in',
        loggedinUser: user,
      });
    }
    return res.status(400).json({
      message: 'user cannot log in',
    });
  }
}
export default userController;
