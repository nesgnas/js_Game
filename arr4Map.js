class Arr4Map{
    constructor() {

    }

    Empty2DArray(rows, cols) {
        return Array.from({ length: rows },
            () => Array(cols).fill(0));
    }
}