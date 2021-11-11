const formType = document.querySelector('.ad-form');
const mapFilterType = document.querySelector('.map__filters');
const mapFilterChildrens = mapFilterType.children;
const formChildrens = formType.children;

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

function onFilterChange (evt) {
  let comparison = '';
  comparison = evt.target.value;
}
