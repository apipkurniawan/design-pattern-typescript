namespace Mediator {
  interface IProduct {
    name: string;
    sell(): void;
  }

  interface IMediator {
    registerProduct(product: IProduct): void;
    setAvailableStatus(availableStatus: boolean): void;
    isAvailable(): boolean;
  }

  class Product implements IProduct {
    name: string;
    mediator: IMediator;

    constructor(name: string, mediator: IMediator) {
      this.name = name;
      this.mediator = mediator;
    }

    sell(): void {
      if (this.mediator.isAvailable()) {
        this.mediator.setAvailableStatus(false);
        console.log("produk " + this.name + " berhasil dijual");
      } else {
        console.log(
          "produk " +
            this.name +
            " belum dijual, harus didaftarkan terlebih dahulu"
        );
      }
    }
  }

  class ProductMediator implements IMediator {
    product?: Product;
    status: boolean = false;

    registeredProduct(): void {
      if (this.status) {
        console.log(this.product);
      } else {
        console.log("tidak ada produk yang dijual");
      }
    }

    registerProduct(product: Product): void {
      if (this.status) {
        console.log(
          "tidak bisa mendaftarkan produk, karena masih ada produk yang belum terjual"
        );
      } else {
        this.product = product;
        this.status = true;
        console.log("produk berhasil didaftarkan");
      }
    }

    setAvailableStatus(availableStatus: boolean): void {
      this.status = availableStatus;
    }

    isAvailable(): boolean {
      return this.status;
    }
  }

  const mediator = new ProductMediator();

  const product1 = new Product("sabun", mediator);
  const product2 = new Product("odol", mediator);

  mediator.registerProduct(product1);
  mediator.registerProduct(product2);

  product1.sell();
  product2.sell();

  mediator.registeredProduct();

  mediator.registerProduct(product2);
  mediator.registeredProduct();
  product2.sell();
  mediator.registeredProduct();
}
