/* Name: 2 -- Battle Ship
 Bui Doan The Sang --ITCSIU21104
 Purpose: parent class for Object
*/
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

    changeState(){
    }
    update(){

    }
}