class forPlayer{

    constructor(queue , enemy) {
        this.queue = queue;
        this.enemy = enemy;

    }

    isAlready(){
        const logicEnemy = new logicForMap(this.enemy);
        // console.log("Length queue ="+ this.queue.length());
        console.log("queue=" +this.queue.length());
        console.log("enemy=" + !logicEnemy.isEmpty());
        if (this.queue.length()===0 && !logicEnemy.isEmpty()){
            console.log("true case");
            return true;
        }
        console.log("false case");
        return false;
    }
}