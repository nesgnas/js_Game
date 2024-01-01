/* Name: 2 -- Battle Ship
 Bui Doan The Sang --ITCSIU21104
 Purpose: function to call this game (like "static void main" in Java)
*/
(function () {


    const enemy = new Arr4Map().Empty2DArray(16,16);
    const enemyChecker = new Arr4Map().Empty2DArray(16,16);

    const logic = new logicForMap(enemyChecker);
    logic.boderMap();




    const dataEnemy = new dataForEnemy(enemy);
    dataEnemy.renderMap();


    const player = new Arr4Map().Empty2DArray(16,16);
    const playerChecker = new Arr4Map().Empty2DArray(16,16);

    const logicP = new logicForMap(playerChecker);
    logicP.boderMap();
    
    console.log("player in INit")
    console.log(player)





    const stackX = new Stack();


    const auto = new autoBot(stackX,playerChecker);



    const oWorld = new overWorld({
        element: document.querySelector(".game-container"),
        player: player,
        checkerE: enemyChecker,
        checkerP: playerChecker,
        enemy: enemy,
        auto: auto,

        stackX:stackX,

    });





    oWorld.init();
})();