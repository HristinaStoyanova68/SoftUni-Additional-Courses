class Box {
    item;
    constructor(item) {
        this.item = item;
    }
    // getItem(): T {
    //     return this.item;
    // }
    toString() {
        return `${this.item} is of type ${typeof this.item}`;
    }
}
let box1 = new Box(['test']);
let box2 = new Box(20);
let box3 = new Box('Hello');
console.log(box1.toString());
console.log(box2.toString());
console.log(box3.toString());
//# sourceMappingURL=generic-box-of-string.js.map