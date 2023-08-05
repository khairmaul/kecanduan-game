const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, 'The testing data must have a user'],
    },
    weight: [{ name: { type: String }, value: { type: Number } }],
    zValue: {
      type: Number,
      default: undefined,
      validate: {
        validator: function (value) {
          return value >= 0 && value <= 100;
        },
        message:
          'Z value ({VALUE})% must be greater or equal 0 and below or equal 100',
      },
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

resultSchema.index({ user: 1 });

resultSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'user',
  });

  next();
});

resultSchema.virtual('classification').get(function () {
  if (this.zValue === 0 || this.zValue >= 55) {
    return 'berat';
  }
  if (this.zValue > 40 && this.zValue <= 50) {
    return 'ringan';
  }
  if (this.zValue > 50 && this.zValue < 55) {
    return 'sedang';
  }
  return undefined;
});

const resultModel = mongoose.model('result', resultSchema);
module.exports = resultModel;
