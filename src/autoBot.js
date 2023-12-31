class autoBot{

    constructor(stackX, arrPlayer) {
        this.stackX = stackX;

        this.arrPlayer = arrPlayer;
        this.isOn = false;
        this.alredy = 0;
        this.miner=-1;
    }

    giveNum(scale){
        let cur = [];

        console.log("___________")
        console.log("Stack here");
        console.log(this.stackX);

        console.log("stack empty? "+this.stackX.isEmpty());
        if(this.stackX.isEmpty()) {

            console.log("*******EMPTYEMPTYEMPTY*****")
            this.miner++;

        }
        scale = scale - this.miner;

        if (scale ===1){
            this.miner--;
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
            console.log("t1= "+t1+" t2= "+t2);
            cur[0] = t2;
            cur[1] = t1;
        }else {
            // console.log("scale is " + scale);
            // console.log("this already " + this.alredy);

            if (scale != this.alredy) {


                this.alredy = scale;
                for (var i = 15 - scale; i > 0; i = i - scale) {
                    for (var j = 15 - scale; j > 0; j = j - scale) {

                        this.stackX.push([j, i, "initial"]);

                    }
                }

                let crr;
                // console.log("first time rendering")
                // console.log(this.stack);
                crr = this.stackX.peek();
                cur[0] = crr[0];
                cur[1] = crr[1];
            } else {

                console.log("normal stack");
                console.log(this.stackX);
                let crr;
                crr = this.stackX.peek();
                console.log("current crr = "+crr);

                while (true) {
                    let a;
                    let b;
                    a = crr[0];
                    b = crr[1];
                    if (this.arrPlayer[a][b] === 0) {

                        break;
                    }
                    console.log("pop inital [" + a + "," + b + "]");
                    let temp =this.stackX.pop();
                    if(this.stackX.isEmpty()){
                        this.stackX.push(temp);
                        break;
                    }
                    crr = this.stackX.peek();
                }
                console.log("take out");
                console.log(crr);


                cur[0] = crr[0];
                cur[1] = crr[1];


            }
            // console.log("___Pos for input____");
            // console.log([cur[0], cur[1]]);
            // console.log("_____________________");
        }

        return [cur[0],cur[1]];
    }

    getSignal(boolean){
        let cur;
        if (boolean){
            cur = this.stackX.pop();
            let type = cur[2];
            //console.log("add to stack");
            if (type === "initial") {
                // console.log("________IN INITIAL_________");
                // console.log(this.arrPlayer);
                // //console.log([cur[0],cur[1]])
                // console.log("______________")
                if (this.arrPlayer[cur[0]][cur[1]+1] === 0) {
                    this.stackX.push([cur[0], cur[1] + 1, "right"]);
                    //console.log([cur[0], cur[1] + 1],"right");
                }
                if (this.arrPlayer[cur[0]][ cur[1] - 1] === 0) {
                    this.stackX.push([cur[0], cur[1] - 1, "left"]);
                    //console.log([cur[0], cur[1] - 1],"left");
                }
                if (this.arrPlayer[cur[0] - 1][ cur[1]] === 0) {
                    this.stackX.push([cur[0] - 1, cur[1], "up"]);
                    //console.log([cur[0] - 1, cur[1]],"up");
                }
                if (this.arrPlayer[cur[0] + 1][ cur[1]] === 0) {
                    this.stackX.push([cur[0] + 1, cur[1], "down"]);
                    //console.log([cur[0] + 1, cur[1]],"down");
                }
            }
            if (type === "right"){
                if (this.arrPlayer[cur[0]][cur[1]+1] === 0) {
                    this.stackX.push([cur[0], cur[1] + 1, "right"]);
                    //console.log([cur[0], cur[1] + 1],"right");
                }
                if (this.arrPlayer[cur[0] - 1][ cur[1]] === 0) {
                    this.stackX.push([cur[0] - 1, cur[1], "up"]);
                    //console.log([cur[0] - 1, cur[1]],"up");
                }
                if (this.arrPlayer[cur[0] + 1][ cur[1]] === 0) {
                    this.stackX.push([cur[0] + 1, cur[1], "down"]);
                    //console.log([cur[0] + 1, cur[1]],"down");
                }
            }
            if (type === "left"){
                if (this.arrPlayer[cur[0]][ cur[1] - 1] === 0) {
                    this.stackX.push([cur[0], cur[1] - 1, "left"]);
                    //console.log([cur[0], cur[1] - 1],"left");
                }
                if (this.arrPlayer[cur[0] - 1][ cur[1]] === 0) {
                    this.stackX.push([cur[0] - 1, cur[1], "up"]);
                    //console.log([cur[0] - 1, cur[1]],"up");
                }
                if (this.arrPlayer[cur[0] + 1][ cur[1]] === 0) {
                    this.stackX.push([cur[0] + 1, cur[1], "down"]);
                    //console.log([cur[0] + 1, cur[1]],"down");
                }

            }
            if (type === "down"){
                if (this.arrPlayer[cur[0]][cur[1]+1] === 0) {
                    this.stackX.push([cur[0], cur[1] + 1, "right"]);
                    //console.log([cur[0], cur[1] + 1],"right");
                }

                if (this.arrPlayer[cur[0]][ cur[1] - 1] === 0) {
                    this.stackX.push([cur[0], cur[1] - 1, "left"]);
                    //console.log([cur[0], cur[1] - 1],"left");
                }

                if (this.arrPlayer[cur[0] + 1][ cur[1]] === 0) {
                    this.stackX.push([cur[0] + 1, cur[1], "down"]);
                    //console.log([cur[0] + 1, cur[1]],"down");
                }


            }
            if (type === "up"){
                if (this.arrPlayer[cur[0]][cur[1]] === 0) {
                    this.stackX.push([cur[0], cur[1] + 1, "right"]);
                    //console.log([cur[0], cur[1] + 1],"right");
                }

                if (this.arrPlayer[cur[0]][ cur[1] - 1] === 0) {
                    this.stackX.push([cur[0], cur[1] - 1, "left"]);
                    //console.log([cur[0], cur[1] - 1],"left");
                }

                if (this.arrPlayer[cur[0] - 1][ cur[1]] === 0) {
                    this.stackX.push([cur[0] - 1, cur[1], "up"]);
                    //console.log([cur[0] - 1, cur[1]],"up");
                }
            }


            //console.log(this.stackX);
        }else {
            //console.log("simple pop");

            cur = this.stackX.pop();
            //console.log("this pop = "+ cur);
            //console.log(this.arrPlayer);
        }
    }
}