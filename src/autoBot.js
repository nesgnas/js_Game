/* Name: 2 -- Battle Ship
 Bui Doan The Sang --ITCSIU21104
 Purpose: Main part for AutoBot;
    the idea will be explained more detail in report
    - 2 main function
        + give position for BOT
        + control signal if continue to shoot or not
*/
class autoBot{

    constructor(stackX, arrPlayer) {
        this.stackX = stackX;

        this.arrPlayer = arrPlayer;

        this.alredy = 0;
        this.miner=-1;
    }

    giveNum(scale){
        let cur = [];


        if(this.stackX.isEmpty()) {
            this.miner++;
        }
        scale = scale - this.miner;

        if (scale ===1){
            this.miner--;
            if (this.alredy!==scale){
                this.alredy = scale;
            }
            let t1 ;
            let t2 ;
            t1 = Math.floor(Math.random()*14)+1;
            t2 = Math.floor(Math.random()*14)+1;
            while (true){
                if (this.arrPlayer[t2][t1]===0){
                    break;
                }
                t1 = Math.floor(Math.random()*14)+1;
                t2 = Math.floor(Math.random()*14)+1;
            }
            cur[0] = t2;
            cur[1] = t1;
            return [cur[0],cur[1]];
        }else {
            if (scale != this.alredy) {
                this.alredy = scale;
                for (var i = 15 - scale; i > 0; i = i - scale) {
                    for (var j = 15 - scale; j > 0; j = j - scale) {
                        this.stackX.push([j, i, "initial"]);
                    }
                }

                let crr;
                crr = this.stackX.peek();
                cur[0] = crr[0];
                cur[1] = crr[1];
            } else {
                let crr;
                crr = this.stackX.peek();
                while (true) {
                    let a;
                    let b;
                    a = crr[0];
                    b = crr[1];
                    if (this.arrPlayer[a][b] === 0) {

                        break;
                    }
                    let temp =this.stackX.pop();
                    if(this.stackX.isEmpty()){
                        this.stackX.push(temp);
                        break;
                    }
                    crr = this.stackX.peek();
                }
                cur[0] = crr[0];
                cur[1] = crr[1];
            }
        }

        return [cur[0],cur[1]];
    }

    getSignal(boolean){
        let cur;
        if (boolean){
            if (this.alredy===1){

            }else {
                cur = this.stackX.pop();

                let type = cur[2];

                if (type === "initial") {
                    if (this.arrPlayer[cur[0]][cur[1] + 1] === 0) {
                        this.stackX.push([cur[0], cur[1] + 1, "right"]);
                        //console.log([cur[0], cur[1] + 1],"right");
                    }
                    if (this.arrPlayer[cur[0]][cur[1] - 1] === 0) {
                        this.stackX.push([cur[0], cur[1] - 1, "left"]);
                        //console.log([cur[0], cur[1] - 1],"left");
                    }
                    if (this.arrPlayer[cur[0] - 1][cur[1]] === 0) {
                        this.stackX.push([cur[0] - 1, cur[1], "up"]);
                        //console.log([cur[0] - 1, cur[1]],"up");
                    }
                    if (this.arrPlayer[cur[0] + 1][cur[1]] === 0) {
                        this.stackX.push([cur[0] + 1, cur[1], "down"]);
                        //console.log([cur[0] + 1, cur[1]],"down");
                    }
                }
                if (type === "right") {
                    if (this.arrPlayer[cur[0]][cur[1] + 1] === 0) {
                        this.stackX.push([cur[0], cur[1] + 1, "right"]);
                        //console.log([cur[0], cur[1] + 1],"right");
                    }
                    if (this.arrPlayer[cur[0] - 1][cur[1]] === 0) {
                        this.stackX.push([cur[0] - 1, cur[1], "up"]);
                        //console.log([cur[0] - 1, cur[1]],"up");
                    }
                    if (this.arrPlayer[cur[0] + 1][cur[1]] === 0) {
                        this.stackX.push([cur[0] + 1, cur[1], "down"]);
                        //console.log([cur[0] + 1, cur[1]],"down");
                    }
                }
                if (type === "left") {
                    if (this.arrPlayer[cur[0]][cur[1] - 1] === 0) {
                        this.stackX.push([cur[0], cur[1] - 1, "left"]);
                        //console.log([cur[0], cur[1] - 1],"left");
                    }
                    if (this.arrPlayer[cur[0] - 1][cur[1]] === 0) {
                        this.stackX.push([cur[0] - 1, cur[1], "up"]);
                        //console.log([cur[0] - 1, cur[1]],"up");
                    }
                    if (this.arrPlayer[cur[0] + 1][cur[1]] === 0) {
                        this.stackX.push([cur[0] + 1, cur[1], "down"]);
                        //console.log([cur[0] + 1, cur[1]],"down");
                    }

                }
                if (type === "down") {
                    if (this.arrPlayer[cur[0]][cur[1] + 1] === 0) {
                        this.stackX.push([cur[0], cur[1] + 1, "right"]);
                        //console.log([cur[0], cur[1] + 1],"right");
                    }

                    if (this.arrPlayer[cur[0]][cur[1] - 1] === 0) {
                        this.stackX.push([cur[0], cur[1] - 1, "left"]);
                        //console.log([cur[0], cur[1] - 1],"left");
                    }

                    if (this.arrPlayer[cur[0] + 1][cur[1]] === 0) {
                        this.stackX.push([cur[0] + 1, cur[1], "down"]);
                        //console.log([cur[0] + 1, cur[1]],"down");
                    }


                }
                if (type === "up") {
                    if (this.arrPlayer[cur[0]][cur[1]] === 0) {
                        this.stackX.push([cur[0], cur[1] + 1, "right"]);
                        //console.log([cur[0], cur[1] + 1],"right");
                    }

                    if (this.arrPlayer[cur[0]][cur[1] - 1] === 0) {
                        this.stackX.push([cur[0], cur[1] - 1, "left"]);
                        //console.log([cur[0], cur[1] - 1],"left");
                    }

                    if (this.arrPlayer[cur[0] - 1][cur[1]] === 0) {
                        this.stackX.push([cur[0] - 1, cur[1], "up"]);
                        //console.log([cur[0] - 1, cur[1]],"up");
                    }

                }
            }

        }else {
            cur = this.stackX.pop();
        }
    }
}