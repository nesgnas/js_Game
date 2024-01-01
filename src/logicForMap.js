/* Name: 2 -- Battle Ship
 Bui Doan The Sang --ITCSIU21104
 Purpose: all logic for working with 2d array
*/
class logicForMap{
    constructor(arr) {
        this.arr = arr;

    }

    // 0 -- initial value of arr
    // another num -- value to defined ship

    fill (posX,posY, scale){
        for (let j =posY;j<=posY+scale-1;j++) {
            for (let i = posX; i <= posX+scale-1; i++) {
                this.arr[j][i] = scale||0;
            }
        }
        //console.log("display arr");
        //console.log(this.arr);

    }

    isEmpty(){
        for (var i = 1; i<15; i++){
            for (var j = 1; j<15;j++){
               if (this.arr[i][j] !== 0){
                   return false;
               }
            }
        }
        return  true;
    }

    delete (posX,posY,scale){
        for (let j =posY;j<=posY+scale-1;j++) {
            for (let i = posX; i <= posX+scale-1; i++) {
                this.arr[j][i] = 0;
            }
        }

        console.log("display arr");
        console.log(this.arr);

    }

    isFullScale(posX,posY,scaleVal){

        for (var i = posX;i<posX+scaleVal;i++){
            for (var j= posY; j< scaleVal + posY; j++){
                if (this.arr[j][i] !==0){
                    return false;
                }
            }
        }

        return true;

    }

    isPoint(posX,posY,Val){
        if (this.arr[posY][posX] !==Val){
            return false;
        }
        return true;
    }

    countShipInType(scale){
        let counter = 0;
        let temp = 0;
        for (var i = 1; i<15; i++){
            for (var j = 1; j<15;j++){
                if (this.arr[i][j] === scale) {
                    temp = scale;
                    for (var iT = i; iT < i + temp; iT++) {
                        for (var jT = j; jT < j + temp; jT++) {
                            this.arr[iT][jT] = -temp;

                        }
                    }
                    counter++;

                }
            }
        }
        for (var i = 1; i<15; i++) {
            for (var j = 1; j < 15; j++) {
                if (this.arr[i][j] === -temp){
                    this.arr[i][j] = Math.sqrt(this.arr[i][j] * this.arr[i][j]);
                }
            }
        }
        return counter;
    }


    boderMap(){
        for (var i = 0;i<=15;i++){
            for (var j= 0; j<=15;j++){
                if (i===0 | j ===0| i===15| j===15){
                    this.arr[j][i]=9999;
                }
            }
        }

    }




}