var NumberConvertion = /** @class */ (function () {
    function NumberConvertion(strategy) {
        this.strategy = strategy;
    }
    NumberConvertion.prototype.execute = function (num) {
        this.strategy.convertNumber(num);
    };
    return NumberConvertion;
}());
var NumberToCurrency = /** @class */ (function () {
    function NumberToCurrency() {
    }
    NumberToCurrency.prototype.convertNumber = function (num) {
        console.log("NumberToCurrency...", num.toLocaleString("id-ID", {
            minimumFractionDigits: 2,
            style: "currency",
            currency: "IDR",
        }));
    };
    return NumberToCurrency;
}());
var NumberToDecimalSeparator = /** @class */ (function () {
    function NumberToDecimalSeparator() {
    }
    NumberToDecimalSeparator.prototype.convertNumber = function (num) {
        console.log("NumberToDecimalSeparator...", num.toLocaleString("id-ID", {
            minimumFractionDigits: 2,
        }));
    };
    return NumberToDecimalSeparator;
}());
var NumberToDate = /** @class */ (function () {
    function NumberToDate() {
    }
    NumberToDate.prototype.convertNumber = function (num) {
        console.log("NumberToDate...", new Date(num * 1000).toUTCString());
    };
    return NumberToDate;
}());
// how to use :
var mataUang = new NumberConvertion(new NumberToCurrency());
mataUang.execute(100000000);
