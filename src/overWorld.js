class overWorld{


    constructor(config) {
        this.element = config.element;
        this.canvas = this.element.querySelector(".game-canvas");
        this.ctx = this.canvas.getContext("2d")
        this.map = null;
        this.inMap = null;
        this.enemy = config.enemy;
        this.player =  config.player;

    }


    startGameLoop(){
        let flag;

       let cloneObj = {... Object.values(this.map.gameObjects)}


        const step = ()=> {
            const logicPlayer = new logicForMap(this.player);


            // clear frame
            this.ctx.clearRect(0,0, this.canvas.width,this.canvas.height);

            // console.log("diff clone and Obj")
            // console.log("clone")
            // console.log(cloneObj);
            // console.log("Obj");
            // console.log(Object.values(this.map.gameObjects));

            // update all object
            Object.values(this.map.gameObjects).forEach(object => {


                if (object.isVisible  && (this.directionInput.direction === "Select" || this.directionInput.direction ==="Delete")){
                    if (this.directionInput.direction === "Select"){
                        console.log(object.scale);
                        //console.log("pre is "+object.preDirect+"  Direct is "+object.direction);
                        if (object.preDirect !== "Select"){
                            console.log("flgSrc is " + object.flagSrc);
                            //console.log("GO Inner")
                            object.changeState("B",logicPlayer);
                        }
                        //console.log("GO outer")

                    }else {
                        if (object.direction !== "Delete") {
                            object.changeState("C",logicPlayer);
                        }
                    }

                    flag = 1 ;
                    console.log("FINISH OUTER")

                }else {


                    if (object.isVisible){
                        if (flag ===1){
                            object.lenMove=4;

                        }else {
                            object.lenMove=1;
                        }
                        //console.log("Flag is "+flag);
                        //console.log("LenMove is "+object.lenMove)
                        //console.log("direction is "+ this.directionInput.direction)
                        object.update({
                            arrow: this.directionInput.direction,
                        });
                        //console.log("this x "+object.x + " this y "+object.y);
                    }

                }
                object.preDirect = this.directionInput.direction;


            })
            console.log(this.player);


            //Draw Upper Layer
            this.map.drawUpperImage(this.ctx);


            let a = new Object();

            // Object.values(this.inMap.gameObjects).forEach(objectIN =>{
            //     if (objectIN.flagInMap ===2){
            //         a = objectIN;
            //     }
            //     a.x = untils.withGrid(10);
            //     a.y = untils.withGrid(10);
            // })
            //
            // a.isVisible && a.sprite.draw(this.ctx);
            // a.updateInMap({
            //     arrow: this.directionInput.direction,
            // });



            let temp = 0;
            for (var i = 0; i<13; i++){
                for (var j = 0; j<13;j++){
                    if (this.player[i][j] > 0){
                        temp = this.player[i][j];
                        for (var iT = i;iT<i+temp;iT++){
                            for (var jT = j;jT<j+temp;jT++){
                                this.player[iT][jT] = -temp;

                            }
                        }

                        Object.values(this.inMap.gameObjects).forEach(objectIN =>{
                            if (objectIN.flagInMap ===temp){
                                a = objectIN;
                            }
                            a.x = untils.withGrid(j+1);
                            a.y = untils.withGrid(i+1);
                        })

                        a.isVisible && a.sprite.draw(this.ctx);
                        a.updateInMap({
                            arrow: this.directionInput.direction,
                        });
                        temp = 0;



                    }
                }
            }
            for (var i = 0; i<14; i++) {
                for (var j = 0; j < 14; j++) {
                    if (this.player[i][j] < 0){
                        this.player[i][j] = Math.sqrt(this.player[i][j] * this.player[i][j]);
                    }
                }
            }
            //Draw Ship in Map Arr



            //console.log("out here")
            //Draw game Object
            Object.values(this.map.gameObjects).forEach(object => {
                if (object.isVisible &&(this.directionInput.direction === "Select" || this.directionInput.direction ==="Delete")){

                }else {

                        //object.isVisible && console.log("ob pos = "+object.x);
                        object.isVisible && object.sprite.draw(this.ctx);

                }

            })

            requestAnimationFrame(()=>{
                step();
            })
        }
        step();
    }



    init(){
        // console.log(this.enemy);
        // console.log(this.player);

        const logicPlayer = new logicForMap(this.player);
        //logicPlayer.fill(9,9,3);

        //logicPlayer.fill(6,6,3);
        logicPlayer.fill(1,8,4);
        // logicPlayer.fill(1,1,4)
        // console.log(this.player);
        // logicPlayer.delete (1,1,4);
        // console.log(this.player);


        const queue = new Queue();
        const stack = new Stack();


        this.map = new overWorldMap(window.overWorldMap.Street);
        this.inMap = new overWorldMap(window.overWorldMap.checkPoint);
        Object.values(this.map.gameObjects)
            .sort(object =>{object.scale})
            .forEach(object => {
                object.type === "ship" && queue.enqueue(object.scale)
            })

        // reverse queue
        while (!queue.isEmpty){
            stack.push(queue.dequeue())
        }
        while (!stack.isEmpty()){
            queue.enqueue(stack.pop())
        }

        console.log(queue);


        this.directionInput = new directionInput();
        this.directionInput.init();
        this.directionInput.direction;


        this.startGameLoop();
    }

}