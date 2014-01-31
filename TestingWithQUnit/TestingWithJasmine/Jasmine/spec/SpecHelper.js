beforeEach(function () {
  jasmine.addMatchers({
      toBeBetween: function () {
      return {
        compare: function (actual, value1, value2) {
          return {
            pass: actual >= value1 && actual <= value2
          }
        }
      };
    },
  });
});
