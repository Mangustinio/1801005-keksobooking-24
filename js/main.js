
const getRandomIntInclusive = function(min1, max1) {
  let f = 0;
  // eslint-disable-next-line id-length
  let h = 0;
  let someInt = 0;
  if (min1 > max1) {
    f = min1;
    h = max1;
    max1 = f;
    min1 = h;
  }
  if (min1 <= 0, max1 <= 0) {
    return 0;
  } else if (min1 <= 0, max1 > 0) {
    someInt = Math.floor(Math.random() * (max1 - min1 + 1)) + min1;
    return someInt;
  } else {
    someInt = Math.floor(Math.random() * (max1 - min1 + 1)) + min1;
    return someInt;
  } //Максимум и минимум включаются
};
const getRandomInclusive = function(degree,min1,max1) {
  let f = 0;
  let h = 0;
  let someInt = 0;
  if (min1 > max1) {
    f = min1;
    h = max1;
    max1 = f;
    min1 = h;
  }
  if (min1 <= 0, max1 <= 0) {
    return 0;
  } else if (min1 <= 0, max1 > 0) {
    someInt = (Math.random() * (max1 - min1)) + min1;
    someInt = someInt.toFixed(degree);
    return someInt;
  } else {
    someInt = (Math.random() * (max1 - min1)) + min1;
    someInt = someInt.toFixed(degree);
    return someInt;
  }
};
console.log(getRandomIntInclusive(15, 6));
let k = 0;
let result = 0;
while (k<100) {
  result = getRandomInclusive(2,1.1, 1.2);
  k++;
  console.log(result);
}

console.log((Math.random()*(1.2 - 1.1) + 1.1).toFixed(2));
