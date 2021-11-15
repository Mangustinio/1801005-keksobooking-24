const formType = document.querySelector('.ad-form');
const mapFilterType = document.querySelector('.map__filters');
const mapFilterChildrens = mapFilterType.children;
const formChildrens = formType.children;
const selectPriceType = document.querySelector('#type');
const inputPriceType = document.querySelector('#price');
const selectRoomNumber = document.querySelector('#room_number');
const roomNumberOption = selectRoomNumber.querySelectorAll('option');
const selectCapacity = document.querySelector('#capacity');
const selectCapacityOption = selectCapacity.querySelectorAll('option');
const TypeMinPriceMap = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};

const roomNumberOptionDisabledMap ={
  1: [1],
  2: [1,2],
  3: [1,2,3],
  100: [0],
};

const capacityRegulation = (event) => {
  const newOldCapacity = roomNumberOptionDisabledMap[event.target.value];

  for (const iterator of selectCapacityOption) {
    if (newOldCapacity.includes(Number(iterator.value))) {
      iterator.removeAttribute('disabled');
      selectCapacity.value = iterator.value;
    } else {
      iterator.setAttribute('disabled', true);
    }
  }
};

selectRoomNumber.addEventListener('change', capacityRegulation);

const changeMinPrice = (event) => {
  const newPrice = TypeMinPriceMap[event.target.value];
  inputPriceType.min = newPrice;
};

selectPriceType.addEventListener('change', changeMinPrice);

const formDisactivation = function () {
  formType.classList.add('ad-form--disabled');
  mapFilterType.classList.add('map__filters--disabled');
  for (const value of mapFilterChildrens) {
    value.setAttribute('disabled','disabled');
  }
  for (const value of formChildrens) {
    value.setAttribute('disabled','disabled');
  }
};

const formActivation = function () {
  formType.classList.remove('ad-form--disabled');
  mapFilterType.classList.remove('map__filters--disabled');
  for (const value of mapFilterChildrens) {
    value.removeAttribute('disabled','disabled');
  }
  for (const value of formChildrens) {
    value.removeAttribute('disabled','disabled');
  }
};

export {formActivation, formDisactivation};
