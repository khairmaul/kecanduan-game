const mongoose = require('mongoose');

const solutionschema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, 'The solution must have a name'],
    },
    addictionLevel: {
      type: String,
      unique: true,
      required: [true, 'The solution must have a addiction level'],
      enum: ['ringan', 'sedang', 'tinggi'],
    },
    createdAt: {
      type: Date,
      default: () => Date.now(),
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const articleModel = mongoose.model('Solution', solutionschema);
module.exports = articleModel;
