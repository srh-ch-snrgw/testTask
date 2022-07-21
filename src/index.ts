import _ from 'lodash';

function component() {
  const element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  return element;
}

function appendComponent() {
  document.body.appendChild(component());
}

function main() {
  appendComponent();
}

main();
