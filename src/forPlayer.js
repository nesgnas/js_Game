/* Name: 2 -- Battle Ship
 Bui Doan The Sang --ITCSIU21104
 Purpose: use to check, did player and bot fill their own map or not.
    Queue(use like flag for type of ship) will decrease to 0 if player filled map.
    2d arr to check does its generated?
*/
class forPlayer{

    constructor(queue , enemy) {
        this.queue = queue;
        this.enemy = enemy;


    }

    isAlready(){
        const logicEnemy = new logicForMap(this.enemy);
        if (this.queue.length()===0 && !logicEnemy.isEmpty()){

            return true;
        }

        return false;
    }
}