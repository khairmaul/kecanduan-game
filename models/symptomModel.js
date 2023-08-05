const mongoose = require('mongoose');

const symptomSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'The symptom must have a name'],
      trim: true,
    },
    factor: {
      type: String,
      required: [true, 'The symptom must have a factor'],
      enum: [
        'salience',
        'mood modification',
        'tolerance',
        'withdrawal symptoms',
        'conflict',
        'relapse',
      ],
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

const symptomModel = mongoose.model('Symptom', symptomSchema);
module.exports = symptomModel;
