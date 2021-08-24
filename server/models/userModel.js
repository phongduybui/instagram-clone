import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import validator from 'validator';
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please enter name!'],
    },
    email: {
      type: String,
      required: [true, 'Provide email'],
      unique: [true, 'Email is exist'],
      validate: [validator.isEmail, 'invalid Email'],
    },
    password: {
      type: String,
      required: [true, 'Must have a password'],
    },
    avatar: {
      type: String,
      default:
        'https://1.bp.blogspot.com/-A7UYXuVWb_Q/XncdHaYbcOI/AAAAAAAAZhM/hYOevjRkrJEZhcXPnfP42nL3ZMu4PvIhgCLcBGAsYHQ/s1600/Trend-Avatar-Facebook%2B%25281%2529.jpg',
    },
    post: [],
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// Check password
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Encrypt password before save it to database
userSchema.pre('save', async function (next) {
  // Generate number of rounds
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model('User', userSchema);

export default User;
