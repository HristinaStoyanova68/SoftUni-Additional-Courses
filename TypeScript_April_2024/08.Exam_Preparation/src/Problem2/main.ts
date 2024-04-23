import { Product } from "./Product";

function getLowestPrices(input: string[]): void {

    const products: Map<string, Product> = new Map();

    for (const line of input) {
        
        const [productTown, productName, productPriceAsStr] = line.split(' | ');
        const productPrice = parseFloat(productPriceAsStr);

        const product = new Product(productName, productPrice, productTown);

        if (!products.has(productName)) {
            products.set(productName, product);
        } else {
            const existingProductPrice = products.get(productName).productPrice;

            if (existingProductPrice > product.productPrice) {
                products.set(productName, product);
            }
        }
    }

    products.forEach(p => {
        console.log(`${p.productName} -> ${p.productPrice} (${p.productTown})`);
    });
}
const input = ['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10'];

getLowestPrices(input);