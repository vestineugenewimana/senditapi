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
      parcels: [],
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

  static userParcel(req, res) {
    const { userId } = req.params;
    const user = Users.find(oneuser => oneuser.id == userId);
    if (user) {
      res.status(200).json({ message: 'users parcel orders', parcels: user.parcels });
    }
    res.json({
      message: 'user does not exist',
    });
  }
}
export default userController;
