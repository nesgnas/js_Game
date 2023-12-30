(function () {


    const enemy = new Arr4Map().Empty2DArray(16,16);
    const enemyChecker = new Arr4Map().Empty2DArray(16,16);

    const logic = new logicForMap(enemyChecker);
    logic.boderMap();




    const dataEnemy = new dataForEnemy(enemy);
    dataEnemy.renderMap();
    console.log("enemy  AFTER FILL in Init")
    console.log(enemy)

    const player = new Arr4Map().Empty2DArray(16,16);
    const playerChecker = new Arr4Map().Empty2DArray(16,16);

    const logicP = new logicForMap(enemyChecker);
    logicP.boderMap();
    
    console.log("player in INit")
    console.log(player)





    const oWorld = new overWorld({
        element: document.querySelector(".game-container"),
        player: player,
        checkerE: enemyChecker,
        checkerP: playerChecker,
        enemy: enemy,
    });





    oWorld.init();
})();