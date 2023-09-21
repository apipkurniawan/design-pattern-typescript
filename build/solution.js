"use strict";
var FactoryMethodSolution;
(function (FactoryMethodSolution) {
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
    class LogisticFactory {
        create(options) {
            if (options.type === "deliver_by_land") {
                return new Truck(options.qty);
            }
            else if (options.type === "deliver_by_sea") {
                return new Ship(options.qty);
            }
            throw new Error("class tidak tersedia");
        }
    }
    const logistic = new LogisticFactory();
    const byLand = logistic.create({ type: "deliver_by_land", qty: 20 });
    console.log(byLand.deliver());
    const bySea = logistic.create({ type: "deliver_by_sea", qty: 30 });
    console.log(bySea.deliver());
})(FactoryMethodSolution || (FactoryMethodSolution = {}));
