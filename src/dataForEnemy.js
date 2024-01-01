/* Name: 2 -- Battle Ship
 Bui Doan The Sang --ITCSIU21104
 Purpose: use to generate ship for Enemy BOT, fill 4(1x1) 3(2x2) 2(3x3) 2(4x4)
*/
class dataForEnemy{
    constructor(config) {
        this.arr = config
        this.logic = new logicForMap(this.arr);
        this.logic.boderMap();
    }

    renderMap(){
        // 2 area for 4x4
        for (var i =0;i<2;i++){
            this.add(4);
        }

        // 2 area for 3x3
        for (var i =0;i<2;i++){
            this.add(3);
        }

        // 3 area for 2x2
        for (var i =0;i<3;i++){
            this.add(2);
        }

        // 4 area for 1x1
        for (var i =0;i<4;i++){
            this.add(1);
        }


    }

    add(type){
        while (true) {

            let i = Math.floor(Math.random() * 14) + 1;
            let j = Math.floor(Math.random() * 14) + 1;
            if (this.logic.isFullScale(i, j, type)) {
                this.logic.fill(i, j, type);
                return false;
            }
        }
        return true;
    }


}