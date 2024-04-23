type ProductData = {
  town: string;
  product: string;
  price: number;
};

function findLowestPrices(array: string[]): void {
  const products: { [key: string]: ProductData } = {};

  for (let entry of array) {
    const [town, product, priceAsStr] = entry.split(" | ");
    const price = Number(priceAsStr);

    if (!products.hasOwnProperty(product) || price < products[product].price) {
      products[product] = { town, product, price };
    }
  }

  for (let key in products) {
    const { town, product, price } = products[key];
    console.log(`${product} -> ${price} (${town})`);
  }
}

findLowestPrices([
  "Sample Town | Sample Product | 1000",
  "Sample Town | Orange | 2",
  "Sample Town | Peach | 1",
  "Sofia | Orange | 3",
  "Sofia | Peach | 2",
  "New York | Sample Product | 1000.1",
  "New York | Burger | 10",
]);
