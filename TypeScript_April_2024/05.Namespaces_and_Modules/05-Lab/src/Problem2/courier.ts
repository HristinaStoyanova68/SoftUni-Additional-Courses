import { FoodAndBeverages } from './deliveries';

export class Courier implements FoodAndBeverages.Delivery {
    protected placesToVisit: { customerName: string, visited: boolean }[] = [];

    constructor(placesToVisit: { customerName: string, visited: boolean }[]) {
        this.placesToVisit = placesToVisit;
    }

    newCustomer(customerName: string, visited: boolean = false): string {
        if (this.placesToVisit.some(customer => customer.customerName === customerName)) {
            throw new Error(`${customerName} is already a customer of yours!`);
        }

        this.placesToVisit.push({ customerName, visited });

        return `${customerName} just became your client.`;
    }

    visitCustomer(customerName: string): void {
        const customer = this.placesToVisit.find(customer => customer.customerName === customerName);

        if (!customer) {
            throw new Error(`${customerName} is not your customer.`);
        }

        customer.visited = true;
    }

    showCustomers(): string {
        return this.placesToVisit.map(customer => {
            const visitedStatus = customer.visited ? 'true' : 'false';
            return `${customer.customerName} -> ${visitedStatus}`;
        }).join('\n');
    }
}

let courier = new Courier([{ customerName: 'DHL', visited: false }]);
courier.newCustomer('Speedy');
courier.newCustomer('MTM');
courier.newCustomer('TipTop');
courier.visitCustomer('DHL');
courier.visitCustomer('MTM');
courier.visitCustomer('MTM');
console.log(courier.showCustomers());
