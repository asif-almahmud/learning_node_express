const area = (r) => 3.14 * r * r;
const circumference = (r) => 2 * 3.14 * r;

exports.circle = { area: area(3), circumference: circumference(3) };
console.log(exports);
