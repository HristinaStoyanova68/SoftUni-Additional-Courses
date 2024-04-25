const input: string[] = [
  "Sample Town | Sample Product | 1000",
  "Sample Town | Orange | 2",
  "Sample Town | Peach | 1",
  "Sofia | Orange | 3",
  "Sofia | Peach | 2",
  "New York | Sample Product | 1000.1",
  "New York | Burger | 10",
];

type TownPriceMap = {
  [townName: string]: number;
};

type ResultType = {
  [key: string]: TownPriceMap;
};

function lowestPrices(input: string[]): void {
  const result = {} as ResultType;

  for (const line of input) {
    const [town, product, priceAsStr] = line.split(" | ");
    const price = Number(priceAsStr);

    if (!result[product]) {
      result[product] = {};
    }

    if (result[product][town] === undefined || result[product][town] > price) {
      result[product][town] = price;
    }
  }

  const tuples = Object.entries(result);

  for (const [product, townsWithPriceMap] of tuples) {
    const townPriceTuples = Object.entries(townsWithPriceMap);
    const sorted = townPriceTuples.sort((a, b) => {
      return a[1] - b[1];
    });

    const [town, price] = sorted[0];
    console.log(`${product} -> ${price} (${town})`);
  }
}

lowestPrices(input);
