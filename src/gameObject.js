class gameObject{
    constructor(config) {
        this.x = config.x || 0;
        this.y = config.y || 0;
        this.scale = config.scale || 32;

        this.direction = config.direction || "up";
        //pass value into Sprite
        this.sprite = new Sprite({

            gameObject: this,
            src: config.src || "./map/sample/npc1.png"
        })

        this.amount = config.amount;
        this.currentAmount = config.currentAmount;
    }

    update(){

    }
}