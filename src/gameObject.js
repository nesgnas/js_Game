class gameObject{
    constructor(config) {
        this.x = config.x || 0;
        this.y = config.y || 0;
        this.direction = config.direction || "down";
        //pass value into Sprite
        this.sprite = new Sprite({
            gameObject: this,
            src: config.src || "./map/sample/npc1.png"
        })
    }

    update(){

    }
}