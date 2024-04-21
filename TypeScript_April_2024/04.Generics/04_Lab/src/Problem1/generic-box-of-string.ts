class Box<T> {
    private item: T;

    constructor(item: T) {
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