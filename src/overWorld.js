class overWorld{
    constructor(config) {
        this.element = config.element;
        this.canvas = this.element.querySelector(".game-canvas");
        this.ctx = this.canvas.getContext("2d")
        this.map = null;
        this.enemy = config.enemy;
        this.player =  config.player;

    }

    startGameLoop(){

        const step = ()=> {


            // clear frame
            this.ctx.clearRect(0,0, this.canvas.width,this.canvas.height)

            // update all object
            Object.values(this.map.gameObjects).forEach(object => {

                if (object.isVisible  && (this.directionInput.direction === "Select" || this.directionInput.direction ==="Delete")){
                    if (this.directionInput.direction === "Select"){
                        //console.log("pre is "+object.preDirect+"  Direct is "+object.direction);
                        if (object.preDirect !== "Select"){
                            //console.log("GO Inner")
                            object.changeState("B");
                        }
                        //console.log("GO outer")

                    }else {
                        if (object.direction !== "Delete") {
                            object.changeState("C");
                        }
                    }

                    console.log("FINISH OUTER")

                }else {

                    object.isVisible && object.update({
                        arrow: this.directionInput.direction,
                    });
                }
                object.preDirect = this.directionInput.direction;


            })


            //Draw Upper Layer
            this.map.drawUpperImage(this.ctx)

            console.log("out here")
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
        console.log(this.enemy);
        console.log(this.player);

        const queue = new Queue();



        this.map = new overWorldMap(window.overWorldMap.Street);
        Object.values(this.map.gameObjects)
            .sort(object =>{object.scale})
            .forEach(object => {
                object.type === "ship" && queue.enqueue(object.scale)
            })

        console.log(queue);


        this.directionInput = new directionInput();
        this.directionInput.init();
        this.directionInput.direction;


        this.startGameLoop();
    }

}