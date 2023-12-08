class overWorldMap{
    constructor(config) {
        this.gameObjects = config.gameObjects;

        this.lowerImage = new Image();
        this.lowerImage.src = config.lowerSrc;

        this.upperImage = new Image();
        this.upperImage.src = config.upperSrc;

    }

    drawLowerImage(ctx, cameraPerson){
        ctx.drawImage(
            this.lowerImage,
            untils.withGrid(10.5) - cameraPerson.x,
            untils.withGrid(6) - cameraPerson.y,
        )
    }

    drawUpperImage(ctx, cameraPerson){
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
        lowerSrc: "./map/sample/StreetNorthUpper.png",
        gameObjects: {
            ship1: new moveObj({
                isCanBeControlled: true,
                x: untils.withGrid(5),
                y: untils.withGrid(6),
            }),
            ship21: new moveObj({
                x: untils.withGrid(10),
                y: untils.withGrid(6),
            }),
            npc: new moveObj({
                x: untils.withGrid(1),
                y: untils.withGrid(6),
                src: "./map/characters/people/npc4.png"
            }),

        }
    },
}
