const plus = (...args) => {
  return args.reduce((prev, curr) => prev + curr);
};

const minus = (...args) => {
  return args.reduce((prev, curr) => prev - curr);
};

const multiply = (...args) => {
  return args.reduce((prev, curr) => prev * curr);
};

module.exports = {
  plus,
  minus,
  multiply,
};
