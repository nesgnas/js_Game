class checkWinner{
    constructor(player1, checkPlayer1, player2, checkPlayer2) {
        this.player1 = player1;
        this.player2 = player2;
        this.checkPlayer1 = checkPlayer1;
        this.checkPlayer2 = checkPlayer2;
    }


    // dung de kiem tra mang enemy xem co ton tai ship o vtri hien tai hay k
    checkToFlagPlayer(posX, posY){
        if (this.player2[posY][posX]>0 ){
            this.checkPlayer2[posY][posX] = 10;
            return true;
        }else {
            this.checkPlayer2[posY][posX] = -10;
            return false;
        }
        console.log(this.checkPlayer2);


    }

    checkToFlagEnemy(posX, posY){
        let t1 ;
        let t2 ;
        t1 = Math.floor(Math.random()*14)+1;
        t2 = Math.floor(Math.random()*14)+1;
        while (true){
            if (this.checkPlayer1[t2][t1]===0){
                break;
            }
            t1 = Math.floor(Math.random()*14)+1;
            t2 = Math.floor(Math.random()*14)+1;
        }
        posY = t2;
        posX = t1;

        if (this.player1[posY][posX]>0 ){
            this.checkPlayer1[posY][posX] = 10;
            return false;
        }else {
            this.checkPlayer1[posY][posX] = -10;
            return true;
        }
        console.log(this.checkPlayer2);


    }
}