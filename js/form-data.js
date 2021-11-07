const formType = document.querySelector('.ad-form');
const mapFilterType = document.querySelector('.map__filters');

const formDisactivation = function () {
  formType.classList.add('.ad-form--disabled');
  mapFilterType.classList.add('.map__filters--disabled');
};

const formActivation = function () {
  formType.classList.remove('.ad-form--disabled');
  mapFilterType.classList.remove('.map__filters--disabled');
};

export {formActivation, formDisactivation};
