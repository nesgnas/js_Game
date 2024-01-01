/* Name: 2 -- Battle Ship
 Bui Doan The Sang --ITCSIU21104
 Purpose: sub class, store all has all function needed with this object
*/
class moveObj extends gameObject{
    constructor(config) {
        super(config);
        this.movingProcessRemaining = 0;

        this.direction = "Right";
        this.lenMove = config.lenMove;
        this.scale = config.scale;
        this.flgSrc = config.flagSrc;
        this.flagInMap = config.flagInMap;
        this.numOfShip = config.totalShip;

        this.isCanBeControlled = config.isCanBeControlled || false;
        this.isVisible  = config.isVisible || false;
        this.directionUpdate = {
            "Up": ["y", -this.lenMove] ,
            "Down": ["y", this.lenMove],
            "Left": ["x",-this.lenMove],
            "Right": ["x", this.lenMove],
        }
        this.type = config.type;

    }
    changeState(changeState,logicPlayer){
        console.log("in change State, try take object flagSrc value "+this.flgSrc);
        const player = logicPlayer;
        let xT= this.x/untils.withGrid(1);
        let yT = this.y/untils.withGrid(1);
        let scaleT = this.scale/untils.withGrid(1);

        if (changeState === "B" ){
            if (this.flgSrc ==="A" || this.flgSrc ==="B"){
                this.sprite = new Sprite({
                    gameObject: this,
                    src: this.sSrc || "./map/sample/npc1.png"
                })
                console.log("changState is "+changeState+", flgSrc is "+this.flgSrc);

                this.flgSrc = "B";


                if(logicPlayer.isFullScale(xT,yT,scaleT)){
                    player.fill(this.x/untils.withGrid(1),this.y/untils.withGrid(1),this.scale/untils.withGrid(1));
                }

            }
            if (this.flgSrc ==="C"){
                this.sprite = new Sprite({
                    gameObject: this,
                    src: this.src || "./map/sample/npc1.png"
                })
                console.log("changState is "+changeState+", flgSrc is "+this.flgSrc);

                this.flgSrc = "A";
                if(logicPlayer.isPoint(xT,yT,scaleT)) {
                    player.delete(this.x / untils.withGrid(1), this.y / untils.withGrid(1), this.scale / untils.withGrid(1));
                }
            }
        }
        if (changeState === "C" ){
            if (this.flgSrc ==="A" || this.flgSrc ==="B"){
                this.sprite = new Sprite({
                    gameObject: this,
                    src: this.dSrc || "./map/sample/npc1.png"
                })
                console.log("changState is "+changeState+", flgSrc is "+this.flgSrc);

                this.flgSrc = "C";
            }
            if (this.flgSrc ==="C"){
                this.sprite = new Sprite({
                    gameObject: this,
                    src: this.dSrc || "./map/sample/npc1.png"
                })
                console.log("changState is "+changeState+", flgSrc is "+this.flgSrc);

                this.flgSrc = "C";
            }
        }

        console.log("FINISH");
    }

    update(state) {
        this.directionUpdate = {
            "Up": ["y", -this.lenMove] ,
            "Down": ["y", this.lenMove],
            "Left": ["x",-this.lenMove],
            "Right": ["x", this.lenMove],
        }
        this.updatePosition();
        this.updateSprite(state);
        if (this.isCanBeControlled && this.movingProcessRemaining===0 && state.arrow) { // move only after finish moving
            this.direction = state.arrow;
            this.movingProcessRemaining =  32;
        }
    }
    updateInMap(state) {
        this.directionUpdate = {
            "Up": ["y", this.lenMove] ,
            "Down": ["y", this.lenMove],
            "Left": ["x",-this.lenMove],
            "Right": ["x", this.lenMove],
        }
        //this.updatePosition();
        this.updateSpriteInMap(state);
        if (this.isCanBeControlled && this.movingProcessRemaining===0 && state.arrow) { // move only after finish moving
            this.direction = "Up";
            this.movingProcessRemaining =  0;
        }
    }

    updatePosition(){
        if (this.movingProcessRemaining>0){
            const [property, change] = this.directionUpdate[this.direction];
            this[property] +=change;
            this.movingProcessRemaining -= 1;
        }

    }

    updateSprite(state){
        if (this.isCanBeControlled && this.movingProcessRemaining===0 && !state.arrow){
            this.sprite.setAnimation("idle-"+this.direction);
            return;
        }

        if (this.movingProcessRemaining >0){
            this.sprite.setAnimation("walk-"+this.direction);
        }
    }
    updateSpriteInMap(state){

            this.sprite.setAnimation("idle-"+this.direction);
            return;



    }

    fillArray(array, sizeOfShip){

        return null;
    }
}