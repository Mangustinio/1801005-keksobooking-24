const formType = document.querySelector('.ad-form');
const mapFilterType = document.querySelector('.map__filters');
const mapFilterChildrens = mapFilterType.children;
const formChildrens = formType.children;
const selectPriceType = document.querySelector('#type');
const inputPriceType = document.querySelector('#price');
const selectRoomNumber = document.querySelector('#room_number');
const roomNumberOption = selectRoomNumber.querySelectorAll('option');
const selectCapacity = document.querySelector('#capacity');
const TypeMinPriceMap = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};

/*const roomNumberMap ={
  1: 0,
  2: 1,
  3: 2,
  100: 3,
};
*/
const roomNumberOptionDisabledMap ={
  1: roomNumberOption[1,2,3],
  2: roomNumberOption[2,3],
  3: roomNumberOption[3],
  100: roomNumberOption[0,1,2],
};

const capacityRegulation = (event) => {
  //const newCapacity = roomNumberMap[event.target.value];
  const newOldCapacity = roomNumberOptionDisabledMap[event.target.value];
  newOldCapacity.forEach((element) =>{
    element.setAttribute('disabled','disabled');
  });
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
