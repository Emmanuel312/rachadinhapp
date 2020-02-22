import { Schema, model } from 'mongoose';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Auth from '../../config/auth';


const UserSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      trim: true,
      required: true,
      minlength: 8,
    },
    avatar_id: {
      type: Schema.Types.ObjectId,
      ref: 'File',
      default: null,
    },
    tel: {
      type: Number,
    },
  },
  { timestamps: true },
);

// hooks == triggers
UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) next();
  this.password = await bcryptjs.hash(this.password, 8);
});

// methods
UserSchema.methods = {
  compareHash(password) {
    return bcryptjs.compare(password, this.password);
  },
  generateToken() {
    return jwt.sign({ userId: this._id }, Auth.secret, {
      expiresIn: '7d',
    });
  },
};

export default model('User', UserSchema);
