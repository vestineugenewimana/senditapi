import Users from '../db/users';


class userController{
  static getUsers(req, res)=>{
    return res.json({
      message:'all users',
      users:Users
    })
  }
}