"use strict";
class Truck {
    constructor(qty) {
        this.qty = qty;
    }
    deliver() {
        console.log(`kirim ${this.qty} menggunakan truk`);
    }
}
class Ship {
    constructor(qty) {
        this.qty = qty;
    }
    deliver() {
        console.log(`kirim ${this.qty} menggunakan kapal`);
    }
}
let type = "deliver_by_land";
if (type === "deliver_by_land") {
    new Truck(100);
}
else if (type === "deliver_by_sea") {
    new Ship(50);
}
else {
    // ...
}
