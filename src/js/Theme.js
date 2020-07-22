'use strict';
console.log('----------')
const body = document.querySelector('body');
const input = document.querySelector('input.js-switch-input');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

// проверяем, есть ли что-то в локал-сторадж в myTheme,
//  если есть DARK, то записать туда это значение 

if (localStorage.getItem('myTheme')) {
  //ключ может быть любым названием
  const myTheme = localStorage.getItem('myTheme');
  body.classList.add(myTheme);
  if (myTheme === Theme.DARK) {
    input.checked = true;
  }
}

input.addEventListener('change', changeTheme);

function changeTheme() {
  if (input.checked) {
    body.classList.remove(Theme.LIGHT);
    body.classList.add(Theme.DARK);
    localStorage.setItem('myTheme', Theme.DARK);
  } else {
    body.classList.remove(Theme.DARK);
    body.classList.add(Theme.LIGHT);
    localStorage.setItem('myTheme', Theme.LIGHT);
  }
}
