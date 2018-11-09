import Users from '../db/users';

class userController {
  static getUsers(req, res) {
    return res.json({
      message: 'all users',
      users: Users,
    });
  }

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
}
export default userController;
