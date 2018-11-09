import Users from '../db/users';

class userController {
  static getUsers(req, res) {
    return res.json({
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
      return res.status(200);
    }
    return res.status(400);
  }

  // login the user
  static userLogin(req, res) {
    const { email, password } = req.body;
    const user = Users.find(oneuser => oneuser.email == email);
    if (user && user.password == password) {
      res.status(200).json({
        loggedinUser: user,
      });
    }
    return res.status(400);
  }

  static userParcel(req, res) {
    const { userId } = req.params;
    const user = Users.find(oneuser => oneuser.id == userId);
    if (user) {
      res.status(200).json({ parcels: user.parcels });
    }
    res.status(400);
  }
}
export default userController;
