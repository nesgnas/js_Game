class directionInput{
    constructor() {
        this.heldDiriction = [];

        this.map = {
            "ArrowUp": "Up",
            "ArrowDown": "Down",
            "ArrowLeft": "Left",
            "ArrowRight": "Right",
            "KeyW": "Up",
            "KeyS": "Down",
            "KeyA": "Left",
            "KeyD": "Right",


        }

    }

    get direction(){
        return this.heldDiriction[0];
    }

    init(){
        document.addEventListener("keydown", e =>{
            console.log(e.code);
            const dir = this.map[e.code];
            if (dir && this.heldDiriction.indexOf(dir)===-1){
                this.heldDiriction.unshift(dir);
                console.log(this.heldDiriction);
            }
        });
        document.addEventListener("keyup", e =>{
            const dir = this.map[e.code];
            const index = this.heldDiriction.indexOf(dir);
            if (index>-1){
                this.heldDiriction.splice(index,1)
                console.log(this.heldDiriction);
            }

        });

    }

}