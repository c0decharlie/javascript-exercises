var calculator = {
  add: function (n) {
    if (typeof(n) == "number") {
      calculator.total += n;
    }
    return calculator;
  },
  substract: function(n) {
    if (typeof(n) == "number") {
      calculator.total -= n;
    }
    return calculator;
  },
  multiple: function(n) {
    if (typeof(n) == "number") {
      calculator.total *= n;
    }
    return calculator;
  },
  divide: function(n) {
    if (typeof(n) == "number") {
      calculator.total /= n;
    }
    return calculator;
  },
  value: function() {
    return calculator.total;
  },
  total:0
};

calculator.add(2).multiple(5).divide(2);

console.log(calculator.value());
