function throttler(func, delay) {
  let prev = 0;
  return (...args) => {
    let now = new Date().getTime();
    // console.log(now - prev, delay);
    if (now - prev > delay) {
      prev = now;
      return func(...args);
    }
  };
}

btn.addEventListener("click", throttler(callback, 1500));
