class gameObject{
    constructor(config) {
        this.x = config.x || 0;
        this.y = config.y || 0;
        this.scale = config.scale || 32;

        // change selector
        this.src = config.src;
        this.sSrc = config.sSrc;
        this.dSrc = config.dSrc;
        this.flgSrc = config.flagSrc;
         console.log("------------"+this.flgSrc)

        this.preDirect =   null;

        this.direction = config.direction || "up";
        //pass value into Sprite

        this.sprite = new Sprite({

            gameObject: this,
            src: config.src || "./map/sample/npc1.png"
        })


        this.amount = config.amount;
        this.currentAmount = config.currentAmount;
    }

    changeState(changeState){

        if (changeState === "B" ){
            if (this.flgSrc ==="A" || this.flgSrc ==="B"){
                this.sprite = new Sprite({
                    gameObject: this,
                    src: this.sSrc || "./map/sample/npc1.png"
                })
                console.log("changState is "+changeState+", flgSrc is "+this.flgSrc);

                this.flgSrc = "B";
            }
            if (this.flgSrc ==="C"){
                this.sprite = new Sprite({
                    gameObject: this,
                    src: this.src || "./map/sample/npc1.png"
                })
                console.log("changState is "+changeState+", flgSrc is "+this.flgSrc);

                this.flgSrc = "A";
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
    update(){

    }
}