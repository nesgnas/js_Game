/* Name: 2 -- Battle Ship
 Bui Doan The Sang --ITCSIU21104
 Purpose: class to for create 2d array
*/
class Arr4Map {
    constructor() {

    }


    const
    Empty2DArray = (rows, columns) => {
        let arr = [];
        let value = 0;

        // creating two-dimensional array
        for (let i = 0; i < rows; i++) {
            arr[i] = [];
            for (let j = 0; j < columns; j++) {
                arr[i][j] = 0;
            }
        }
        return arr;
    };

}