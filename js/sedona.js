let bthSearch = document.querySelector('.button-search');
let popupSearch = document.querySelector('.popup-search');
popupSearch.classList.add('popup-hidden');
popupSearch.classList.add('popup-display-none');
let popupDisplayNone = function () {
  popupSearch.classList.add('popup-display-none');
}
// inputs
let inputFirstDate = popupSearch.querySelector('input[id="first-data"]');
let inputLastDate = popupSearch.querySelector('input[id="last-data"]');

let inputAdult = popupSearch.querySelector('input[id="adult"]');
let inputChild = popupSearch.querySelector('input[id="child"]');

let allInputs = popupSearch.querySelectorAll('input');

// minus, plus
let adultMinus = popupSearch.querySelector('.adult-minus');
let adultPlus = popupSearch.querySelector('.adult-plus');

let childMinus = popupSearch.querySelector('.child-minus');
let childPlus = popupSearch.querySelector('.child-plus');

//form
let popupForm = popupSearch.querySelector('form');

//button submit
let btnSubmit = popupSearch.querySelector('button[type="submit"]');

// show popup
bthSearch.onclick = function () {
  popupSearch.classList.toggle('popup-hidden');
  if (popupSearch.classList.contains('popup-display-none')) {
    popupSearch.classList.remove('popup-display-none');
  } else {
  setTimeout(popupDisplayNone, 1000);
  }
  inputFirstDate.focus();
}

// create output errors
let outputError = document.createElement('div');
outputError.classList.add('output-error');
outputError.style.color = 'red';
outputError.style.textTransform = "none"
popupSearch.appendChild(outputError);


// check input value
btnSubmit.addEventListener('click', function (evt) {
  if (!inputFirstDate.value || !inputLastDate.value || !inputAdult.value || !inputChild.value) {
  evt.preventDefault();
  outputError.textContent = 'Не все поля заполнены';
  }
});

// clear output errors after focus in any input
for (let input of allInputs) {
  input.addEventListener('focus', function () {
    outputError.textContent = '';
  });
}

// check localStorage and getting data from of him
let isLocalStorage = true;
try {
  if (localStorage.hasOwnProperty('Adult')) {
  inputAdult.value = localStorage.Adult;
  }
  if (localStorage.hasOwnProperty('Child')) {
  inputChild.value = localStorage.Child;
  }
} catch (err) {
  console.log('ошибка localStorage');
  isLocalStorage = false;
}

// add EventListener click on minus , plus
adultPlus.addEventListener('click', function () {
  inputAdult.value = Number(inputAdult.value) + Number(1);
  if (isLocalStorage) {
    localStorage.setItem('Adult', inputAdult.value);
  }
});

adultMinus.addEventListener('click', function () {
  if (Number(inputAdult.value) > 0) {
    inputAdult.value = Number(inputAdult.value) - Number(1);
    if (isLocalStorage){
      localStorage.setItem('Adult', inputAdult.value);
    }
  }
 });

childPlus.addEventListener('click', function () {
  inputChild.value = Number(inputChild.value) + Number(1);
  if (isLocalStorage) {
    localStorage.setItem('Child', inputChild.value);
  }
 });

childMinus.addEventListener('click', function () {
  if (Number(inputChild.value) > 0) {
    inputChild.value = Number(inputChild.value) - Number(1);
    if (isLocalStorage) {
      localStorage.setItem('Child', inputChild.value);
    }
  }
});

// add EventListener keydown space on minus , plus
adultPlus.addEventListener('keydown', function (evt) {
  if (evt.keyCode == 32) {
    inputAdult.value = Number(inputAdult.value) + Number(1);
    if (isLocalStorage) {
      localStorage.setItem('Adult', inputAdult.value);
    }
  }
 });

 adultMinus.addEventListener('keydown', function (evt) {
  if (evt.keyCode == 32) {
    if (Number(inputAdult.value) > 0) {
      inputAdult.value = Number(inputAdult.value) - Number(1);
      if (isLocalStorage){
        localStorage.setItem('Adult', inputAdult.value);
      }
    }
  }
 });

childPlus.addEventListener('keydown', function (evt) {
  if (evt.keyCode == 32) {
    inputChild.value = Number(inputChild.value) + Number(1);
    if (isLocalStorage) {
      localStorage.setItem('Child', inputChild.value);
    }
  }
 });

childMinus.addEventListener('keydown', function (evt) {
  if (evt.keyCode == 32) {
    if (Number(inputChild.value) > 0) {
      inputChild.value = Number(inputChild.value) - Number(1);
      if (isLocalStorage) {
        localStorage.setItem('Child', inputChild.value);
      }
    }
  }
});






