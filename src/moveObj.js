class moveObj extends gameObject{
    constructor(config) {
        super(config);
        this.movingProcessRemaining = 0;

        this.direction = "Right";

        this.isCanBeControlled = config.isCanBeControlled || false;
        this.directionUpdate = {
            "Up": ["y", -1],
            "Down": ["y", 1],
            "Left": ["x",-1],
            "Right": ["x", 1],
        }
    }

    update(state) {
        this.updatePosition();
        this.updateSprite(state);
        if (this.isCanBeControlled && this.movingProcessRemaining===0 && state.arrow) { // move only after finish moving
            this.direction = state.arrow;
            this.movingProcessRemaining =16;
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
        this.sprite.setAnimation("idle-"+this.direction);
    }
}