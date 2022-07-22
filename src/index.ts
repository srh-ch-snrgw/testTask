import { join } from 'lodash';
// import throttledCounter from './throttled-counter';
// import throttledCounter from './throttled-counter-promises';
import throttledCounterGen from './throttled-counter-gen';

function component() {
  const element = document.createElement('div');
  const p = document.createElement('p');
  element.classList.add('root');
  p.innerHTML = join(['Open console', 'to see the result'], ' ');
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
    const res = throttledCounterGen();
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
