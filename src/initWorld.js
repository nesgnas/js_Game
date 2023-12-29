(function () {


    const enemy = new Arr4Map().Empty2DArray(16,16);


    const dataEnemy = new dataForEnemy(enemy);
    dataEnemy.fill();
    console.log("enemy  AFTER FILL in Init")
    console.log(enemy)

    const player = new Arr4Map().Empty2DArray(16,16);
    console.log("player in INit")
    console.log(player)





    const oWorld = new overWorld({
        element: document.querySelector(".game-container"),
        player: player,
        enemy: enemy,
    });





    oWorld.init();
})();