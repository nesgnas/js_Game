class gameObject{
    constructor(config) {
        this.x = config.x || 0;
        this.y = config.y || 0;
        this.scale = config.scale || 32;
        this.type = config.type;


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
    update(){

    }
}