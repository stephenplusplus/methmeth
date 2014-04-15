module.exports = function (methodName) {
  var extraArguments = [].slice.call(arguments, 1);
  return function (item) {
    if (methodName in item) {
      return item[methodName].apply(item, extraArguments);
    }
  };
};
