beforeEach(function () {
  jasmine.addMatchers({
      toBeBetween: function () {
      return {
        compare: function (actual, value1, value2) {
          return {
              pass: actual >= value1 && actual <= value2,
              message: 'Expected to be between ' + value1 + ' and ' + value2 + ' but the actual value is ' + actual
          }
        }
      };
    },
  });
});
