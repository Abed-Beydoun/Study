const mongoose = require('mongoose');
const majorModel = require('./major.schema');
const courseModel = require('./course.schema');
const userSchema = new mongoose.Schema(
  {
    fname: {
      type: String,
      required: [true, 'First name is required'],
      trim: true,
      lowercase: true,
    },
    lname: {
      type: String,
      required: [true, 'Last name is required'],
      trim: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true, // unique email
      trim: true,
      validate: {
        validator: (email) => {
          const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
          return emailRegex.test(email);
        },
        message: (props) => `${props.value} is not a valid email address!`,
      },
    },
    phone: {
      type: String,
      required: [true, 'Phone number is required'],
      trim: true,
    },
    major: {
      type: mongoose.ObjectId,
      ref: majorModel,
      required: [true, 'Major is required'],
    },
    role: {
      type: String,
      required: [true, 'Role is required'],
      trim: true,
      uppercase: true,
      enum: ['ADMIN', 'STUDENT'],
    },
    courses: {
      type: [mongoose.ObjectId],
      ref: courseModel,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model('user', userSchema);
