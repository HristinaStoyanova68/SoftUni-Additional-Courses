"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Courier = void 0;
class Courier {
    placesToVisit = [];
    constructor(placesToVisit) {
        this.placesToVisit = placesToVisit;
    }
    newCustomer(customerName, visited = false) {
        if (this.placesToVisit.some(customer => customer.customerName === customerName)) {
            throw new Error(`${customerName} is already a customer of yours!`);
        }
        this.placesToVisit.push({ customerName, visited });
        return `${customerName} just became your client.`;
    }
    visitCustomer(customerName) {
        const customer = this.placesToVisit.find(customer => customer.customerName === customerName);
        if (!customer) {
            throw new Error(`${customerName} is not your customer.`);
        }
        customer.visited = true;
    }
    showCustomers() {
        return this.placesToVisit.map(customer => {
            const visitedStatus = customer.visited ? 'true' : 'false';
            return `${customer.customerName} -> ${visitedStatus}`;
        }).join('\n');
    }
}
exports.Courier = Courier;
let courier = new Courier([{ customerName: 'DHL', visited: false }]);
courier.newCustomer('Speedy');
courier.newCustomer('MTM');
courier.newCustomer('TipTop');
courier.visitCustomer('DHL');
courier.visitCustomer('MTM');
courier.visitCustomer('MTM');
console.log(courier.showCustomers());
//# sourceMappingURL=courier.js.map