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