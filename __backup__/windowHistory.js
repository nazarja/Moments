window.history.pushState = new Proxy(window.history.pushState, {
    apply: (target, thisArg, argArray) => {
      console.log(window.location.pathname)
      return target.apply(thisArg, argArray);
    },
  });