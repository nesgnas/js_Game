class Sprite{
    constructor(config) {
        //set up the image
        this.image = new Image();
        this.image.src = config.src;
        this.image.onload = ()=> {
            this.isLoaded = true;
        }

        // Shadow for Object <maybe -- can use it to perform jump of char or bullet line>
        this.shadow = new Image();
        this.useShadow = true; // config.useShadow || false
        if (this.useShadow){
            this.shadow.src = "./map/sample/DemoLower.png";
        }

        this.shadow.onload = ()=>{
            this.isShadowLoaded = false;
        }


        //Config animation & current state
        this.animation = config.animations || {
            "idle-Down": [[0,0]],
            "idle-Right": [[0,1]],
            "idle-Up": [[0,2]],
            "idle-Left": [[0,3]],

            "walk-Down": [[1,0], [0,0], [3,0], [0,0] ],
            "walk-Right": [[1,1], [0,1], [3,1], [0,1] ],
            "walk-Up": [[1,2], [0,2], [3,2], [0,2] ],
            "walk-Left": [[1,3], [0,3], [3,3], [0,3] ],
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
    draw(ctx, cameraPerson){
        const x = this.gameObject.x -8 + untils.withGrid(10.5)- cameraPerson.x; // set image at beginning value
        const y = this.gameObject.y -18 +untils.withGrid(10.5) -cameraPerson.y  ;

        this.isShadowLoaded && ctx.drawImage(this.shadow,x,y)

        const [frameX,frameY] = this.frame;

        this.isLoaded && ctx.drawImage(this.image,
            frameX *32, frameY *32,
            32,32,
            x,y,
            32,32,
        )

        this.updateAnimationProgress();
    }

}