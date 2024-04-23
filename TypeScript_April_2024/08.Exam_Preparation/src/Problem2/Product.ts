export class Product {
    productName: string;
    productPrice: number;
    productTown: string;

    constructor(productName:string, productPrice: number, productTown: string) {
        this.productName = productName;
        this.productPrice = productPrice;
        this.productTown = productTown;
    }
}