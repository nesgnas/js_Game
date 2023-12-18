(function () {


    const player = new Arr4Map().Empty2DArray(14,14);
    const enemy = new Arr4Map().Empty2DArray(14,14);




    const oWorld = new overWorld({
        element: document.querySelector(".game-container"),
        player: player,
        enemy: enemy,
    });





    oWorld.init();
})();