import {generateAds} from './utils/mock-data.js';
const cardTemplate = document.querySelector('#card').content.querySelector('.popup');
const adsArray = generateAds();
const cardTemplateFragment = document.createDocumentFragment();
const mapCanvas = document.querySelectorAll('.mao__canvas');

adsArray.forEach((ads) => {
  const cardNode = cardTemplate.content.cloneNode(true);
  cardNode.querySelector('.popup__title').textContent = ads.offer.title;
  cardNode.querySelector('.popup__text--address').textContent = ads.offer.address;
  cardNode.querySelector('.popup__text--price').textContent = `${ads.offer.price}₽/ночь`;
  cardTemplateFragment.appendChild(cardNode);
});


mapCanvas.appendChild(cardTemplateFragment);
