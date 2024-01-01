/* Name: 2 -- Battle Ship
 Bui Doan The Sang --ITCSIU21104
 Purpose: fill the reminder map for Player | Bot;
    to perform tile select "true" and select "false" in reminder map
    with value -10 for false-selection
                10 for true-selection

*/
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