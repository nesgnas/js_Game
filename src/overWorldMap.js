class overWorldMap{
    constructor(config) {
        this.gameObjects = config.gameObjects;

        // this.lowerImage = new Image();
        // this.lowerImage.src = config.lowerSrc;

        this.upperImage = new Image();
        this.upperImage.src = config.upperSrc;

    }



    drawUpperImage(ctx){
        ctx.drawImage(
            this.upperImage,
            0,0
        )
    }
}

// create set of list product to draw
window.overWorldMap = {
    Street: {
        upperSrc: "./basicmap.png",
        gameObjects: {
            selector: new moveObj({
                isCanBeControlled: false,
                map: "two",
                x: untils.withGrid(1),
                y: untils.withGrid(1),
                src: "./map/use-Tile/selector/shock-mine.png"
            }),
            ship1x1_prev: new moveObj({
                isCanBeControlled: false,
                map: "two",
                x: untils.withGrid(3),
                y: untils.withGrid(3),

                src: "./map/use-Tile/ship1x1/scorch.png"
            }),
            ship2x2_prev: new moveObj({
                isCanBeControlled: false,
                map: "two",
                x: untils.withGrid(5),
                y: untils.withGrid(5),
                scale: 64,
                src: "./map/use-Tile/ship2x2/swarmer.png"
            }),
            ship3x3_prev: new moveObj({
                isCanBeControlled: false,
                map: "two",
                x: untils.withGrid(7),
                y: untils.withGrid(7),
                scale: 96,
                src: "./map/use-Tile/ship_3x3/fuse.png"
            }),
            ship4x4_prev: new moveObj({
                isCanBeControlled: true,
                map: "two",
                x: untils.withGrid(11),
                y: untils.withGrid(11),
                scale: 128,
                src: "./map/use-Tile/ship_4x4/foreshadow.png"
            }),
        }
    },
}
