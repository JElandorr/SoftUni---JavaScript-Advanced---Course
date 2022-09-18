(function arrayExt() {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  Array.prototype.last = function () {
    return this[this.length - 1];
  };

  Array.prototype.skip = function (n) {
    let result = [];
    for (let index = n; index < this.length; index++) {
      result.push(this[index]);
    }
    return result;
  };

  Array.prototype.take = function (n) {
    let result = [];
    for (let index = 0; index < n; index++) {
      result.push(this[index]);
    }
    return result;
  };

  Array.prototype.sum = function () {
    return this.reduce((a, b) => a + b, 0);
  };

  Array.prototype.average = function () {
    return this.reduce((a, b) => a + b, 0) / this.length;
  };
})();
