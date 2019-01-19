'use strict';

let tableElement;

function handleTableClick(event) {
  if (!event.target.classList.contains('prop__name')) {
    return false;
  }

  if (event.target.hasAttribute('data-dir')) {
    event.target.setAttribute('data-dir', -1 * Number(event.target.getAttribute('data-dir')));
  } else {
    event.target.setAttribute('data-dir', 1);
  }

  tableElement.setAttribute('data-sort-by', event.target.dataset.propName);

  sortTable(event.target.dataset.propName, event.target.dataset.dir);
}

function init() {
  tableElement = document.getElementsByTagName('table')[0];
  tableElement.addEventListener('click', handleTableClick);
}

document.addEventListener('DOMContentLoaded', init);