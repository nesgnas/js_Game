class overWorld{
    constructor(config) {
        this.element = config.element;
        this.canvas = this.element.querySelector(".game-canvas");
        this.ctx = this.canvas.getContext("2d")
        this.map = null;
    }

    startGameLoop(){

        const step = ()=> {

            // clear frame
            //this.ctx.clearRect(0,0, this.canvas.width,this.canvas.height)

            // establish camera person
            //const cameraPerson = this.map.gameObjects.ship1;

            // update all object
            Object.values(this.map.gameObjects).forEach(object => {
                object.update({
                    arrow: this.directionInput.direction,
                });
            })



            //Draw Upper Layer
            this.map.drawUpperImage(this.ctx)


            //Draw game Object
            Object.values(this.map.gameObjects).forEach(object => {
                //console.log("work with obj")
                object.sprite.draw(this.ctx);

            })

            requestAnimationFrame(()=>{
                step();
            })
        }
        step();
    }

    init(){
        this.map = new overWorldMap(window.overWorldMap.Street);


        this.directionInput = new directionInput();
        this.directionInput.init();
        this.directionInput.direction;


        this.startGameLoop();
    }
}