(function () {


    const enemy = new Arr4Map().Empty2DArray(14,14);

    const player = new Arr4Map().Empty2DArray(14,14);
    console.log("player in INit")
    console.log(player)
    console.log("enemy in Init")
    console.log(enemy)




    const oWorld = new overWorld({
        element: document.querySelector(".game-container"),
        player: player,
        enemy: enemy,
    });





    oWorld.init();
})();