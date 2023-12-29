class logicForMap{
    constructor(arr) {
        this.arr = arr;
    }

    // 0 -- initial value of arr
    // another num -- value to defined ship

    fill (posX,posY, scale){
        for (let j =posY-1;j<=posY-1+scale-1;j++) {
            for (let i = posX-1; i <= posX-1+scale-1; i++) {
                this.arr[j][i] = scale||0;
            }
        }
        //console.log("display arr");
        //console.log(this.arr);

    }

    delete (posX,posY,scale){
        for (let j =posY-1;j<=posY-1+scale-1;j++) {
            for (let i = posX-1; i <= posX-1+scale-1; i++) {
                this.arr[j][i] = 0;
            }
        }

        console.log("display arr");
        console.log(this.arr);

    }





}