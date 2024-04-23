class CompareElements {
    elements;
    constructor(elements) {
        this.elements = elements;
    }
    compare(element) {
        const matchedElement = this.elements.filter(e => e === element);
        return matchedElement.length;
    }
}
let c = new CompareElements(['a', 'b', 'ab', 'abc', 'cba', 'b']);
console.log(c.compare('b'));
let d = new CompareElements([1, 2, 3, 4, 5, 1, 1]);
console.log(d.compare(1));
//# sourceMappingURL=generic-compare-elements.js.map