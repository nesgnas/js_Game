class moveObj extends gameObject{
    constructor(config) {
        super(config);
        this.movingProcessRemaining = 0;

        this.direction = "Right";
        this.lenMove = config.lenMove;
        this.scale = config.scale;
        this.flgSrc = config.flagSrc;
        this.flagInMap = config.flagInMap;

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