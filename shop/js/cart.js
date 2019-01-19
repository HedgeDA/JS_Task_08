'use strict';

function addButtonClick(event) {
  if (!event.target.classList.contains('add-to-cart')) {
    return false;
  }

  addToCart({
    'title': event.target.dataset.title,
    'price': event.target.dataset.price
  })
}

function init() {
  document.querySelector('.items-list').addEventListener('click', addButtonClick);
}

document.addEventListener('DOMContentLoaded', init);