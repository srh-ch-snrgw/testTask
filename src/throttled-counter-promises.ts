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

  function getPromisedNum(): Promise<number> {
    return new Promise((resolve) => resolve(num++));
  }

  return getPromisedNum;
}

const counter = makeCounter();

function throttle(func: () => Promise<number>, ms: number, ...args: any[]) {
  let isThrottled = false;
  let savedArgs: any;
  let savedThis: any;
  let res = 0;

  async function wrapper() {
    if (isThrottled) {
      savedArgs = arguments;
      savedThis = this;
      return res;
    }
    isThrottled = true;

    res = await func.apply(this, arguments);

    setTimeout(async () => {
      isThrottled = false;
      if (savedArgs) {
        res = await wrapper.apply(savedThis, savedArgs);
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
