class Category {
  name: string;
  children: any[] = [];

  constructor(name: string) {
    this.name = name;
  }
}

const computer = new Category("Computer");
console.log(computer);

computer.children = [
  (new Category("PC").children = [
    new Category("Case"),
    new Category("motherboard"),
  ]),
  (new Category("Laptop").children = [new Category("Asus ROG")]),
];
