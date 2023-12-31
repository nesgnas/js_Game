class Point{
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }

    upP(){
        this.x -=1;
    }
    downP(){
        this.x +=1;
    }
    leftP(){
        this.y -=1;
    }
    rightP(){
        this.y +=1;
    }
}