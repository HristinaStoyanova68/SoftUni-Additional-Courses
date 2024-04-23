class CarDealership {
    dealershipName;
    soldCars;
    modelsSold = {};
    constructor(dealershipName) {
        this.dealershipName = dealershipName;
        this.soldCars = 0;
    }
    sellCar(dealerID, model) {
        this.modelsSold[String(dealerID)] = model;
        this.soldCars++;
    }
    showDetails() {
        let details = `${this.dealershipName}:\n`;
        for (const dealerID in this.modelsSold) {
            details += `${dealerID} sold ${this.modelsSold[dealerID]}\n `;
        }
        return details;
    }
}
let dealership = new CarDealership('SilverStar');
dealership.sellCar('BG01', 'C Class');
dealership.sellCar('BG02', 'S Class');
dealership.sellCar('BG03', 'ML Class');
dealership.sellCar('BG04', 'CLK Class');
console.log(dealership.showDetails());
//# sourceMappingURL=car-dealership.js.map