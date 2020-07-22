import items from '../menu.json';
import postItemTemplates from '../templates/menu-item.hbs';

const refs = {
  menu: document.querySelector('.js-menu'),
};

refs.menu.insertAdjacentHTML('beforeend', buildMenuFeed(items));

function buildMenuFeed(items) {
  const posts = items.map(item => postItemTemplates(item)).join('');
  return posts;
}