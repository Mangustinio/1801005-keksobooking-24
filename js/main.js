
const DEFAULT_GENERATE_NUM = 10;

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

const typeOfRooms = ['palace','flat','house','bungalow','hotel'];
const roomsNumber = getRandomPositiveInteger(0,typeOfRooms.length);

const checkinVariants = ['12:00','13:00','14:00'];
const checkinNumber = getRandomPositiveInteger(0,checkinVariants.length);
const checkinResult = checkinVariants[checkinNumber];

const checkoutVariants = ['12:00','13:00','14:00'];
const checkoutNumber = getRandomPositiveInteger(0,checkoutVariants.length);
const checkoutResult = checkoutVariants[checkoutNumber];

const typeOfFeatures = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const featureChoice = [];

let coin = 0;
for(let index = 0; index <= typeOfFeatures - 1; index++){
  coin = getRandomPositiveInteger(1,2);
  if (coin === 1){
    featureChoice[index] = typeOfFeatures[index];
  }
}

let allFeautures = '';
for(let index = 0; index <= typeOfFeatures.length-1; index++){
  allFeautures = `${allFeautures  },${   featureChoice[index]}`;
}

const variationOfPhotos = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];
const photosNumber = getRandomPositiveInteger(0,variationOfPhotos.length);
const photosResult = variationOfPhotos[photosNumber];

const generateOffer = function (index, address) {
  const offer = {
    title: 'Введите текст',
    address,
    price: getRandomPositiveInteger(1,1000000),
    rooms: roomsNumber,
    guests: getRandomPositiveInteger(1,100),
    checkin: checkoutResult,
    checkout: checkinResult,
    features: featureChoice,
    description: 'Описание',
    photos: photosResult,
  };

  return offer;
};

function generateAd(param) {
  const value = param + 1;
  const locationObj = {
    lat: getRandomPositiveFloat(35.60000, 3570000, 5),
    lng: getRandomPositiveFloat(139.70000, 1398000, 5),
  };

  const address = '{$location.lat},{$location.lng}';

  return {
    author: {
      avatar: `img/avatars/user${value < 10 ? `0${value}` : value}.png`,
    },
    offer: generateOffer(param, address),
    location: locationObj,
  };
}

const generateAds = function (generateNum = DEFAULT_GENERATE_NUM) {
  const ads = [];
  for(let index = 0; index < generateNum; index++) {
    ads[index] = generateAd(index);
  }

  return ads;
};


