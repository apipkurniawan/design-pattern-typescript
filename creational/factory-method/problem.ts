class Truck {
  private qty: number;

  constructor(qty: number) {
    this.qty = qty;
  }

  deliver(): void {
    console.log(`kirim ${this.qty} menggunakan truk`);
  }
}

class Ship {
  private qty: number;

  constructor(qty: number) {
    this.qty = qty;
  }

  deliver(): void {
    console.log(`kirim ${this.qty} menggunakan kapal`);
  }
}

let type = "deliver_by_land";
if (type === "deliver_by_land") {
  new Truck(100);
} else if (type === "deliver_by_sea") {
  new Ship(50);
} else {
  // ...
}
