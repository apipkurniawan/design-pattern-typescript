namespace COR {
  class Product {
    name: string;
    price: number;
    weight: number;

    constructor(name: string, price: number, weight: number) {
      this.name = name;
      this.price = price;
      this.weight = weight;
    }

    validate() {
      if (this.name.length > 20) {
        return "nama harus dibawah 20 karakter";
      }

      if (this.price < 1000000) {
        return "harga harus dibawah satu juta";
      }

      if (this.weight > 5) {
        return "berat product harus dibawah 5kg";
      }

      return this;
    }
  }

  const product = new Product("kulkas", 250000, 7);
  console.log("opo...", product.validate());
}
