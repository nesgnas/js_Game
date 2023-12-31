class Stack {
    constructor() {
        this.item = [];
    }

    push(element) {
        this.item.push(element);
    }

    pop() {
        return this.item.pop();
    }

    peek() {
        return this.item[this.length - 1];
    }

    get length() {
        return this.item.length;
    }

    isEmpty() {
        return this.length === 0;
    }
}

