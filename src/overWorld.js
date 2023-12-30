class overWorld{




    constructor(config) {
        this.element = config.element;
        this.canvas = this.element.querySelector(".game-canvas");
        this.ctx = this.canvas.getContext("2d");

        //initial dataset of map
        this.map = null;
        this.inMap = null;

        // arr for map
        this.enemy = config.enemy;
        this.player =  config.player;
        this.checkerE = config.checkerE;
        this.checkerP = config.checkerP;

        // pos for control moving left side
        this.initialPositionX = untils.withGrid(1);
        this.initialPositionY = untils.withGrid(1);

        // pos for control moving right side
        this.gamePlayPosX = untils.withGrid(25);
        this.gamePlayPosY = untils.withGrid(1);

        //turn
        this.turn = true;


    }


    startGameLoop(){





        const step = ()=> {
            //const forPlayer = new forPlayer();


            const fPlay = new forPlayer(this.queue,this.enemy);
            const winner = new checkWinner(this.player,this.checkerP,this.enemy,this.checkerE);
            if (true){


                    //if (fPlay.isAlready()){
                    //console.log("wrong");
                    //console.log(this.directionInput.direction);


                    // clear frame
                    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

                    //Draw  Layer
                    this.map.drawUpperImage(this.ctx);


                    let a = new Object();
                    let temp = 0;
                    for (var i = 1; i < 15; i++) {
                        for (var j = 1; j < 15; j++) {

                            if (this.player[i][j] > 0) {
                                temp = this.player[i][j];
                                for (var iT = i; iT < i + temp; iT++) {
                                    for (var jT = j; jT < j + temp; jT++) {
                                        this.player[iT][jT] = -temp;
                                    }
                                }

                                Object.values(this.inMap.gameObjects).forEach(objectIN => {
                                    if (objectIN.flagInMap === temp) {
                                        a = objectIN;
                                    }
                                    a.x = untils.withGrid(j);
                                    a.y = untils.withGrid(i);
                                })

                                //draw map
                                a.isVisible && a.sprite.draw(this.ctx);
                                a.updateInMap({
                                    arrow: this.directionInput.direction,
                                });
                                temp = 0;
                            }
                            if (this.checkerE[i][j]!==0){
                                temp = this.checkerE[i][j];

                                Object.values(this.inMap.gameObjects).forEach(objectIN => {
                                    if (objectIN.flagInMap === temp) {
                                        a = objectIN;
                                    }
                                    a.x = untils.withGrid(j+24);
                                    a.y = untils.withGrid(i);
                                })

                                a.isVisible && a.sprite.draw(this.ctx);
                                a.updateInMap({
                                    arrow: this.directionInput.direction,
                                });
                                temp = 0;
                            }
                            if (this.checkerP[i][j]!==0){
                                temp = this.checkerP[i][j];

                                Object.values(this.inMap.gameObjects).forEach(objectIN => {
                                    if (objectIN.flagInMap === temp) {
                                        a = objectIN;
                                    }
                                    a.x = untils.withGrid(j);
                                    a.y = untils.withGrid(i);
                                })

                                a.isVisible && a.sprite.draw(this.ctx);
                                a.updateInMap({
                                    arrow: this.directionInput.direction,
                                });
                                temp = 0;
                            }
                        }
                    }

                    for (var i = 1; i < 15; i++) {
                        for (var j = 1; j < 15; j++) {
                            if (this.player[i][j] < 0) {
                                this.player[i][j] = Math.sqrt(this.player[i][j] * this.player[i][j]);
                            }
                        }
                    }



                    //-------------------------------------------------
                if (this.turn) {

                    // take ship
                    let aPlay;
                    Object.values(this.map.gameObjects).forEach(object => {
                        if (object.type === "selector") {
                            aPlay = object;
                        }
                    })

                    // on Selector
                    Object.values(this.map.gameObjects).forEach(object => {
                        if (object.type !== "ship") {
                            object.isCanBeControlled = true;
                            object.x = this.gamePlayPosX;
                            object.y = this.gamePlayPosY;
                            object.isVisible = true;
                        } else {
                            object.isCanBeControlled = false;
                            object.isVisible = false;
                        }

                    });

                    // update direction for Selector
                    Object.values(this.map.gameObjects).forEach(object => {
                        if (object.isVisible && (this.directionInput.direction === "Select" || this.directionInput.direction === "Delete")) {
                            if (object.preDirect !=="Select") {
                                winner.checkToFlagPlayer(this.gamePlayPosX / untils.withGrid(1) - 24, this.gamePlayPosY / untils.withGrid(1));
                                this.turn = false;

                                console.log("done in player");
                            }
                        } else if (object.isVisible) {
                            object.update({
                                arrow: this.directionInput.direction,
                            });
                        }
                        object.preDirect = this.directionInput.direction;
                    })


                    // draw selector
                    Object.values(this.map.gameObjects).forEach(object => {
                        console.log(object.preDirect);
                        if (object.isVisible && (this.directionInput.direction === "Select" || this.directionInput.direction === "Delete")) {

                        } else if (object.isVisible) {
                            object.sprite.draw(this.ctx);
                            this.gamePlayPosY = object.y;
                            this.gamePlayPosX = object.x;
                        }
                        object.preDirect = this.directionInput.direction;
                    })


                }else {
                    console.log("In Enemy area");
                    // INPUT for selection of enemy

                    winner.checkToFlagEnemy(2,2)
                    this.turn = true;
                }

            }else {

                //DON'T CARE
                const logicPlayer = new logicForMap(this.player);
                logicPlayer.boderMap();


                let curShip = this.queue.peek();
                let a1;

                // TAKE OUT SHIP
                Object.values(this.map.gameObjects).forEach(object => {
                    if (object.scale === curShip) {
                        a1 = object;
                    }
                })

                let tempCountShip = logicPlayer.countShipInType(a1.scale / untils.withGrid(1));
                //console.log(tempCountShip);
                if (tempCountShip >= a1.numOfShip) {
                    this.queue.dequeue();
                    curShip = this.queue.peek();
                }

                //console.log("state "+this.initialPositionX+" "+this.initialPositionY);
                Object.values(this.map.gameObjects).forEach(object => {
                    if (object.scale === curShip && object.type ==="ship") {
                        object.isCanBeControlled = true;
                        object.x = this.initialPositionX;
                        object.y = this.initialPositionY;
                        object.isVisible = true;
                    } else {
                        object.isCanBeControlled = false;
                        object.isVisible = false;
                    }

                });


                // clear frame
                this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);


                // update all object
                Object.values(this.map.gameObjects).forEach(object => {
                    if (object.isVisible && (this.directionInput.direction === "Select" || this.directionInput.direction === "Delete")) {
                        if (this.directionInput.direction === "Select") {
                            console.log(object.scale);
                            //console.log("pre is "+object.preDirect+"  Direct is "+object.direction);
                            if (object.preDirect !== "Select") {
                                console.log("flgSrc is " + object.flagSrc);
                                //console.log("GO Inner")
                                object.changeState("B", logicPlayer);
                            }
                            //console.log("GO outer")
                        } else {
                            if (object.direction !== "Delete") {
                                object.changeState("C", logicPlayer);
                            }
                        }
                    } else {
                        if (object.isVisible) {
                            object.update({
                                arrow: this.directionInput.direction,
                            });
                        }
                    }
                    object.preDirect = this.directionInput.direction;

                });
                //console.log(this.player);

                //Draw Upper Layer
                this.map.drawUpperImage(this.ctx);


                let a = new Object();
                let temp = 0;
                for (var i = 1; i < 15; i++) {
                    for (var j = 1; j < 15; j++) {

                        if (this.player[i][j] > 0) {
                            temp = this.player[i][j];
                            for (var iT = i; iT < i + temp; iT++) {
                                for (var jT = j; jT < j + temp; jT++) {
                                    this.player[iT][jT] = -temp;
                                }
                            }

                            Object.values(this.inMap.gameObjects).forEach(objectIN => {
                                if (objectIN.flagInMap === temp) {
                                    a = objectIN;
                                }
                                a.x = untils.withGrid(j);
                                a.y = untils.withGrid(i);
                            })

                            a.isVisible && a.sprite.draw(this.ctx);
                            a.updateInMap({
                                arrow: this.directionInput.direction,
                            });
                            temp = 0;
                        }
                    }
                }
                for (var i = 1; i < 15; i++) {
                    for (var j = 1; j < 15; j++) {
                        if (this.player[i][j] < 0) {
                            this.player[i][j] = Math.sqrt(this.player[i][j] * this.player[i][j]);
                        }
                    }
                }
                //Draw Ship in Map Arr


                //console.log("out here")
                //Draw game Object
                Object.values(this.map.gameObjects).forEach(object => {
                    if (object.isVisible && (this.directionInput.direction === "Select" || this.directionInput.direction === "Delete")) {

                    } else {

                        //object.isVisible && console.log("ob pos = "+object.x);
                        if (object.isVisible) {
                            object.sprite.draw(this.ctx);
                            this.initialPositionY = object.y;
                            this.initialPositionX = object.x;
                        }


                    }

                })
            }

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
        logicPlayer.fill(1,8,1);
        logicPlayer.fill(2,2,1)
        // logicPlayer.fill(1,1,4)
        // console.log(this.player);
        // logicPlayer.delete (1,1,4);
        // console.log(this.player);


        const queue = new Queue();
        //console.log("queueeee = "+queue.isEmpty());
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

        this.queue = queue;
        //queue.dequeue();



        console.log(queue);


        this.directionInput = new directionInput();
        this.directionInput.init();
        this.directionInput.direction || "right";


        this.startGameLoop();
    }

}