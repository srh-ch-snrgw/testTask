function makeCounter() {
  let num = 0;

  function throwError() {
    throw new Error('handle me');
  }

  setInterval(() => {
    try {
      throwError();
    } catch (error) {
      console.log(0);
    }
  }, 3000);

  return function () {
    return num++;
  };
}

const counter = makeCounter();

function throttle(func: Function, ms: number, ...args: any[]) {
  let isThrottled = false;
  let savedArgs: any;
  let savedThis: any;
  let res = 0;

  function wrapper() {
    if (isThrottled) {
      savedArgs = arguments;
      savedThis = this;
      return res;
    }
    isThrottled = true;

    res = func.apply(this, arguments);

    setTimeout(function () {
      isThrottled = false;
      if (savedArgs) {
        res = wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
      return res;
    }, ms);

    return res;
  }

  return wrapper;
}

const throttledCounter = throttle(counter, 1000);

export default throttledCounter;
