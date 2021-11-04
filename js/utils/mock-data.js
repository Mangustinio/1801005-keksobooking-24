import {getRandomPositiveInteger} from './get-random-positive-integer.js';
import {getRandomPositiveFloat} from './get-random-positive-float.js';

const LAT_MIN = 35.65000;
const LAT_MAX = 35.70000;
const LAT_ROUNDING = 5;
const LNG_MIN = 139.70000;
const LNG_MAX = 139.80000;
const LNG_ROUNDING = 5;
const DEFAULT_GENERATE_NUM = 10;
const GUESTS_MIN = 1;
const GUESTS_MAX = 100;
const PRICE_MIN = 1;
const PRICE_MAX = 100000;
const titlesList = ['Введите текст', 'Заполните пустые поля', 'Заполните пустую форму','Отсутствует информация'];
const typeOfFeatures = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

function getFeatures() {
  let coin = 0;
  const featureChoice = [];
  for(let index = 0; index <= typeOfFeatures.length - 1; index++){
    coin = getRandomPositiveInteger(1,2);
    if (coin === 1){
      featureChoice.push(typeOfFeatures[index]);
    }
  }
  return featureChoice;
}

const typeOfRooms = ['palace','flat','house','bungalow','hotel'];
const roomsNumber = getRandomPositiveInteger(0,typeOfRooms.length);

const checkinVariants = ['12:00','13:00','14:00'];

const checkoutVariants = ['12:00','13:00','14:00'];

const variationOfPhotos = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];
const photosNumber = getRandomPositiveInteger(0,variationOfPhotos.length);
const photosResult = variationOfPhotos[photosNumber];

const generateOffer = function (index, address) {
  const offer = {
    title: titlesList[getRandomPositiveInteger(0, titlesList.length - 1)],
    address,
    price: getRandomPositiveInteger(PRICE_MIN,PRICE_MAX),
    rooms: roomsNumber,
    guests: getRandomPositiveInteger(GUESTS_MIN,GUESTS_MAX),
    checkin: checkinVariants[getRandomPositiveInteger(0, checkoutVariants.length - 1)],
    checkout: checkoutVariants[getRandomPositiveInteger(0, checkoutVariants.length - 1)],
    features: getFeatures() ,
    description: 'Описание',
    photos: photosResult,
  };

  return offer;
};
 
const generateAd = function(param) {
  const value = param + 1;
  const locationObj = {
    lat: getRandomPositiveFloat(LAT_MIN, LAT_MAX, LAT_ROUNDING),
    lng: getRandomPositiveFloat(LNG_MIN, LNG_MAX, LNG_ROUNDING),
  };

  const address = `${locationObj.lat}, ${locationObj.lng}`;

  return {
    author: {
      avatar: `img/avatars/user${value < 10 ? `0${value}` : value}.png`
    },
    offer: generateOffer(param, address),
    location: locationObj,
  }
}

const generateAds = function (generateNum = DEFAULT_GENERATE_NUM) {
  const ads = [];
  for(let index = 0; index < generateNum; index++) {
    ads[index] = generateAd(index);
  }

  return ads;
};


export {generateAds};