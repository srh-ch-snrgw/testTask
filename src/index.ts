// import _ from 'lodash';
import throttledCounter from './throttled-counter';

function component() {
  const element = document.createElement('div');
  const p = document.createElement('p');
  element.classList.add('root');
  // p.innerHTML = _.join(['Open console', 'to see the result'], ' ');
  p.innerHTML = ['Open console', 'to see the result'].join();
  element.append(p);
  return element;
}

function appendComponent() {
  document.body.appendChild(component());
}

function testTask() {
  const btn = document.createElement('button');
  btn.innerText = 'increment click';

  btn.onclick = function (e) {
    const res = throttledCounter();
    console.log(
      'num',
      res,
      'squared value',
      Math.pow(res, 2),
      'square root',
      Math.sqrt(res)
    );
  };

  document.querySelector('.root').appendChild(btn);
}

function main() {
  appendComponent();
  testTask();
}

main();
