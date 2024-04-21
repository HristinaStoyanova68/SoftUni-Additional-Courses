class CompareElements<T> {
    private elements: T[];

    constructor(elements: T[]) {
        this.elements = elements;
    }

    compare (element: T) {

        const matchedElement = this.elements.filter(e => e === element);

        return matchedElement.length;
    }
}

let c = new CompareElements(['a', 'b', 'ab', 'abc', 'cba', 'b']);

console.log(c.compare('b'));

let d = new CompareElements([1, 2, 3, 4, 5, 1, 1]);

console.log(d.compare(1));