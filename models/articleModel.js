const mongoose = require('mongoose');
const { slugify } = require('slugify');

const articleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Article requires a title'],
      unique: true,
    },
    slug: {
      type: String,
      required: [true, 'Article requires a slug'],
      unique: true,
      default: function () {
        return slugify(this.title, { lower: true });
      },
    },
    description: {
      type: String,
      required: [true, 'Article required a description'],
      trim: true,
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

// triggre when create() and save()
articleSchema.pre('save', function (next) {
  this.slug = slugify(this.title, { lower: true });
  next();
});

// triggre when findByIdAndUpdate()
articleSchema.pre('findByIdAndUpdate', function (next) {
  this.slug = slugify(this.title, { lower: true });
  next();
});

const articleModel = mongoose.model('Article', articleSchema);
module.exports = articleModel;
