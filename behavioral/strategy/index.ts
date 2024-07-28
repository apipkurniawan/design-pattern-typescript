interface NumericConverter {
  convertNumber(number: number): void;
}

class NumberConvertion {
  private strategy: NumericConverter;

  constructor(strategy: NumericConverter) {
    this.strategy = strategy;
  }

  execute(num: number): void {
    this.strategy.convertNumber(num);
  }
}

class NumberToCurrency implements NumericConverter {
  convertNumber(num: number): void {
    console.log(
      "NumberToCurrency...",
      num.toLocaleString("id-ID", {
        minimumFractionDigits: 2,
        style: "currency",
        currency: "IDR",
      })
    );
  }
}

class NumberToDecimalSeparator implements NumericConverter {
  convertNumber(num: number): void {
    console.log(
      "NumberToDecimalSeparator...",
      num.toLocaleString("id-ID", {
        minimumFractionDigits: 2,
      })
    );
  }
}

class NumberToDate implements NumericConverter {
  convertNumber(num: number): void {
    console.log("NumberToDate...", new Date(num * 1000).toUTCString());
  }
}

// how to use :
const mataUang = new NumberConvertion(new NumberToCurrency());
mataUang.execute(100000000);

const decimal = new NumberConvertion(new NumberToDecimalSeparator());
decimal.execute(500000000);

const date = new NumberConvertion(new NumberToDate());
date.execute(400);
