const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'The user must have a name'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'The user must have a email'],
      unique: true,
      lowercase: true,
      validate: [validator.isEmail, 'Please enter a valid email'],
    },
    photo: { type: String, default: 'person-icon.png' },
    role: {
      type: String,
      enum: ['admin', 'user'],
      default: 'user',
    },
    password: {
      type: String,
      required: [true, 'Please enter a password'],
      minLength: 8,
      select: false,
    },
    passwordConfirm: {
      type: String,
      required: [true, 'Please confirm your password'],
      validate: {
        // This only works on save() dan create()
        validator: function (el) {
          return el === this.password;
        },
        message: 'Password not same as before',
      },
    },
    createdAt: {
      type: Date,
      default: () => Date.now(),
    },
    passwordChangedAt: {
      type: Date,
      default: () => Date.now(),
    },
    passwordResetToken: String,
    passwordResetExpires: Date,
    active: {
      type: Boolean,
      default: true,
      select: false,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

userSchema.pre('save', async function (next) {
  //this disini merepresentasikan user model
  if (!this.isModified('password')) return next();

  //Hash the password with cost of 12
  this.password = await bcrypt.hash(this.password, 12);
  //Delete passwordConfirmation
  this.passwordConfirm = undefined;

  next();
});

userSchema.pre('save', function (next) {
  if (!this.isModified('password') || this.isNew) return next();
  this.passwordChangedAt = Date.now() - 1000; //- 1 second because delayed save when send email update password
  next();
});

userSchema.methods.correctPassword = function (
  candidatePassword,
  userPassword
) {
  //this.password tidak bisa digunakan karena di field password schema nya di set select:false, itulah kenapa dijadikan parameter
  return bcrypt.compare(candidatePassword, userPassword);
};

userSchema.methods.changePasswordAfter = function (JWTTimestamp) {
  if (this.passwordChangedAt) {
    // 1) convert data date to second
    const changeTimestamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );

    return JWTTimestamp < changeTimestamp;
  }
  return false;
};

const userModel = mongoose.model('User', userSchema);
module.exports = userModel;
