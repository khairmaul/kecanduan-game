class APIFeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  filter() {
    const queryObj = { ...this.queryString }; // trick to rebuild new obj without ref original object
    const excludeFields = ['page', 'sort', 'limit', 'fields']; //ini untuk mengeluarkan nilai beberapa obj agar tidak tercampur di query dibawah
    excludeFields.forEach((field) => delete queryObj[field]);

    // 1B) Advance Filering
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);

    this.query = this.query.find(JSON.parse(queryStr));
    // let query = Tour.find(JSON.parse(queryStr));
    return this; //return entire object constructor
  }

  sort() {
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(',').join(' ');
      this.query = this.query.sort(sortBy);
    } else {
      //default sorting
      this.query = this.query.sort('-createdAt'); //descending
    }
    return this;
  }

  limitFields() {
    if (this.queryString.fields) {
      const fields = this.queryString.fields.split(',').join(' ');
      this.query = this.query.select(fields);
    } else {
      //default limiting
      this.query = this.query.select('-__v'); //excluding one field __v
    }
    return this;
  }

  paginate() {
    const page = this.queryString.page * 1 || 1; //convert to number
    const limit = this.queryString.limit * 1 || 100;
    const skip = (page - 1) * limit; //formula
    this.query = this.query.skip(skip).limit(limit);
    return this;
  }
}
module.exports = APIFeatures;
