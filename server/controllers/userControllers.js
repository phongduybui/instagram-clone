import User from '../models/userModel.js';

const signIn = async (req, res) => {
  try {
    console.log(req.body);
    const user = await User.create(req.body);

    res.status(200).json({
      status: 'Success',
      data: {
        user,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

const getUser = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      status: 'Success',
      result: users.length,
      data: {
        users,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

export { signIn, getUser };
