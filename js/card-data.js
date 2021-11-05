import {generateAds} from './utils/mock-data.js';
const cardTemplate = document.querySelector('#card').content.querySelector('.popup');
const adsArray = generateAds();
const cardTemplateFragment = document.createDocumentFragment();
const mapCanvas = document.querySelector('.map__canvas');
const lodgingType = function(lodging){
  if (lodging === 'palace') {
    return 'Дворец';
  }
  if (lodging === 'hotel' ) {
    return 'Отель';
  }
  if (lodging === 'house') {
    return 'Дом';
  }
  if (lodging === 'bungalow') {
    return 'Бунгало';
  }
  if (lodging === 'flat') {
    return 'Квартира';
  }
};

const popupFunction = function() {
  adsArray.forEach((ads) => {
    const cardNode = cardTemplate.cloneNode(true);
    cardNode.querySelector('.popup__title').textContent = ads.offer.title;
    cardNode.querySelector('.popup__text--address').textContent = ads.offer.address;
    cardNode.querySelector('.popup__text--price').textContent = `${ads.offer.price}₽/ночь`;
    cardNode.querySelector('.popup__type').textContent = lodgingType(ads.offer.type);
    cardNode.querySelector('.popup__text--capacity').textContent = `Заезд после ${ads.offer.checkin} ,выезд до ${ads.offer.checkout}`;
    cardNode.querySelector('.popup__features').textContent = ads.offer.features;
    cardNode.querySelector('.popup__description').textContent = ads.offer.description;
    cardNode.querySelector('.popup__photo').src = ads.offer.photos;
    cardNode.querySelector('.popup__avatar').src = ads.author.avatar;
    cardTemplateFragment.appendChild(cardNode);
  });
  mapCanvas.appendChild(cardTemplateFragment);

};

export {popupFunction};
