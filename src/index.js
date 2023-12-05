const canvas = document.querySelector('canvas')

const c = canvas.getContext('2d')

console.log(c)

class Pointer{
    constructor(x,y,scaleW,scaleH) {
        this.position ={
            x: x,
            y: y
        }
        this.scale ={
            width: scaleW,
            height: scaleH
        }
    }
    draw(){

    }
}