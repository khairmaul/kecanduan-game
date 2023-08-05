module.exports = (fn) => (req, res, next) => {
  // it is also return handler controller function or middleware function
  //   fn(req, res, next).catch((err) => {
  //     next(err);
  //   });
  fn(req, res, next).catch(next);
};
