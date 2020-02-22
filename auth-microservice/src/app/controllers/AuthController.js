import User from '../models/User';

class AuthController {
  async signIn(req, res) {
    const { email, password } = req.body;
    const user = await User.findOne(email);

    if (!(await user.compareHash(password))) {
      return res.status(404).json({ error: 'Incorrect password' });
    }

    return res.json({ user, token: user.generateToken() });
  }

  async signUp(req, res) {
    const user = await User.create(req.body);

    res.json(user);
  }
}


export default new AuthController();
