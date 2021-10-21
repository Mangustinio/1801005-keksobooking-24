const getRandomPositiveInteger = function(min1, max1) {
  const lower = Math.ceil(Math.min(Math.abs(min1), Math.abs(max1)));
  const upper = Math.floor(Math.max(Math.abs(min1), Math.abs(max1)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomPositiveFloat = function(min, max, digits = 1) {
  const lower = Math.min(Math.abs(min), Math.abs(max));
  const upper = Math.max(Math.abs(min), Math.abs(max));
  const result = Math.random() * (upper - lower) + lower;
  return result.toFixed(digits);
};

const numberAvatar = getRandomPositiveInteger(1,10);
const numberAvatarFix = `0${ numberAvatar}`;

const typeOfRooms = ['palace','flat','house','bungalow','hotel'];
const roomNumber = typeOfRooms.length - 1;
const roomsChoice = typeOfRooms[roomNumber];

const checkinVariants = ['12:00','13:00','14:00'];
const checkinNumber = checkinVariants.length - 1;
const checkinChoice = checkinVariants[checkinNumber];

const checkoutVariants = ['12:00','13:00','14:00'];
const checkoutNumber = checkoutVariants.length - 1;
const checkoutChoice = checkoutVariants[checkinNumber];

const typeOfFeatures = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const featureAmount = getRandomPositiveInteger(0,typeOfFeatures - 1);
let featureChoice = 0;

for(let i = 0; i <= typeOfFeatures - 1; i++){
  let coin = getRandomPositiveInteger(1,2);
  if (coin == 1){
    featureChoice[i] = typeOfFeatures[i];
  };
};

let allFeautures = '';
for(let j = 1; j <= typeOfFeatures; j++){
  allFeautures = allFeautures + ',' +  featureChoice[j];
};


const variationOfPhotos = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];
const photosNumber = variationOfPhotos.length - 1;
const photosChoice = variationOfPhotos[photosNumber];

let author = {
  avatar: numberAvatarFix,
};

let offer = {
  title: 'Введите текст',
  addres: {
    location: {
      lat: getRandomPositiveFloat(35.65000,35.70000,5),
      lng: getRandomPositiveFloat(139.70000,139.80000,5),
    },
  },
  price: getRandomPositiveInteger(1,1000000),
  rooms: roomChoice,
  guests: getRandomPositiveInteger(1,100),
  checkin: checkinChoice,
  checkout: checkoutChoice,
  features: featureChoice,
  description: 'Описание',
};










console.log(numberAvatarFix);
console.log(getRandomPositiveFloat(1.11,1.33,2));