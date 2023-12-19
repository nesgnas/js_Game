class Sprite{
    constructor(config) {
        //set up the image
        this.image = new Image();
        console.log(config.src);
        this.image.src = config.src || "./map/use-Tile/selector/shock-mine.png";
        this.image.onload = ()=> {
            this.isLoaded = true;
        }






        //Config animation & current state
        this.animation = config.animation || {
            "idle-Down": [[0,0]],
            "idle-Right": [[0,0]],
            "idle-Up": [[0,0]],
            "idle-Left": [[0,0]],

            "walk-Down": [[0,0], [0,0],[1,0], [0,0]  ],
            "walk-Right": [[0,0], [0,0],[1,0], [0,0] ],
            "walk-Up": [[0,0], [0,0],[1,0], [0,0] ],
            "walk-Left": [[0,0], [0,0],[1,0], [0,0] ],
        }

        this.curentAnimation = "walk-Up"; //config.animations || "idle-Down";
        this.curentAnimationFrame = 0;

        this.animationFrameLimit = config.animationFrameLimit || 16;
        this.animationFrameProgress = this.animationFrameLimit;

        //Ref the game object
        this.gameObject = config.gameObject;
    }

    get frame(){
        return this.animation[this.curentAnimation][this.curentAnimationFrame]
    }

    setAnimation(key){
        if (this.curentAnimation !== key){
            this.curentAnimation = key;
            this.curentAnimationFrame =0;
            this.animationFrameProgress = this.animationFrameLimit;
        }
    }

    updateAnimationProgress(){
        //Down frame progress
        if (this.animationFrameProgress>0){
            this.animationFrameProgress -=1;
            return;
        }

        //reset the counter
        this.animationFrameProgress = this.animationFrameLimit;
        this.curentAnimationFrame +=1;

        if (this.frame ===undefined){
            this.curentAnimationFrame =0;
        }
    }
    draw(ctx){
        // const x = this.gameObject.x -8 + untils.withGrid(10.5)- cameraPerson.x; // set image at beginning value
        // const y = this.gameObject.y -18 +untils.withGrid(10.5) -cameraPerson.y  ;

        const x = this.gameObject.x;
        const y = this.gameObject.y;



        const [frameX,frameY] = this.frame;



        this.isLoaded && ctx.drawImage(this.image,
            frameX *this.gameObject.scale, frameY *this.gameObject.scale,
            this.gameObject.scale,this.gameObject.scale,
            x,y,
            this.gameObject.scale,this.gameObject.scale,
        )

        this.updateAnimationProgress();
    }

}