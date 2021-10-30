import {generateOffer,LAT_MIN,LAT_MAX,LAT_ROUNDING,LNG_MIN,LNG_MAX,LNG_ROUNDING} from './main.js';
import {getRandomPositiveFloat } from './get-random-positive-float.js';


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

export {generateAd};
