/* Name: 2 -- Battle Ship
 Bui Doan The Sang --ITCSIU21104
 Purpose:  create Object structure for map, has draw() function to draw MapLayer
*/
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
                x: untils.withGrid(15),
                y: untils.withGrid(15),
                type: "selector",
                scale: 32,

                lenMove: 1,
                isVisible: false,
                src: "./map/use-Tile/selector/shock-mine.png"
            }),
            ship1x1_prev: new moveObj({
                isCanBeControlled: false,
                map: "two",
                x: untils.withGrid(3),
                y: untils.withGrid(3),
                uniqueChar: 1,
                num:1,
                sizeOfShip: 1,
                lenMove: 1,
                isVisible: false,
                type: "ship",
                scale: 32,
                totalShip:4,

                flagSrc: "A",
                src: "./map/use-Tile/ship1x1/scorch.png",
                sSrc: "./map/use-Tile/ship1x1/scorch-dfbd5a.png",
                dSrc: "./map/use-Tile/ship1x1/scorch-ee5d33.png"
            }),
            ship2x2_prev: new moveObj({
                isCanBeControlled: false,
                map: "two",
                x: untils.withGrid(5),
                y: untils.withGrid(5),
                lenMove: 1,
                num:1,
                sizeOfShip: 2,
                isVisible: false,
                scale: 64,
                type: "ship",
                flagSrc: "A",
                totalShip:3,

                src: "./map/use-Tile/ship2x2/swarmer.png",
                sSrc: "./map/use-Tile/ship2x2/swarmer-dfbd5a.png",
                dSrc: "./map/use-Tile/ship2x2/swarmer-ee5d33.png"
            }),
            ship3x3_prev: new moveObj({
                isCanBeControlled: false,
                map: "two",
                x: untils.withGrid(7),
                y: untils.withGrid(7),
                lenMove: 1,
                num:1,
                sizeOfShip: 3,
                isVisible: false,
                scale: 96,
                type: "ship",
                flagSrc: "A",
                totalShip:2,

                src: "./map/use-Tile/ship_3x3/fuse.png",
                sSrc: "./map/use-Tile/ship_3x3/fuse-dfbd5a.png",
                dSrc: "./map/use-Tile/ship_3x3/fuse-ee5d33.png"
            }),
            ship4x4_prev: new moveObj({
                isCanBeControlled: false,
                map: "two",
                x: untils.withGrid(1),
                y: untils.withGrid(1),
                lenMove: 1,
                totalShip:2,
                type: "ship",
                sizeOfShip: 4,
                isVisible: false,
                scale: 128,

                flagSrc: "A",
                src: "./map/use-Tile/ship_4x4/foreshadow.png",
                sSrc: "./map/use-Tile/ship_4x4/foreshadow-dfbd5a.png",
                dSrc: "./map/use-Tile/ship_4x4/foreshadow-ee5d33.png"
            }),
        }
    }, checkPoint: {
        upperSrc: "./basicmap.png",
        gameObjects: {
            selectorFalse: new moveObj({
                isCanBeControlled: true,
                map: "two",
                x: untils.withGrid(1),
                y: untils.withGrid(1),
                type: "selector",
                flagInMap: -10,
                scale: 32,

                lenMove: 1,
                isVisible: true,
                src: "./map/use-Tile/selector/shock-mine-c02c17.png",
                sSrc: "./map/use-Tile/ship1x1/shock-mine-118d25.png",
                dSrc: "./map/use-Tile/ship1x1/shock-mine-c02c17.png"

            }),
            selectorTrue: new moveObj({
                isCanBeControlled: true,
                map: "two",
                x: untils.withGrid(1),
                y: untils.withGrid(1),
                type: "selector",
                flagInMap: 10,
                scale: 32,

                lenMove: 1,
                isVisible: true,
                src: "./map/use-Tile/selector/shock-mine-118d25.png",
                sSrc: "./map/use-Tile/ship1x1/shock-mine-118d25.png",
                dSrc: "./map/use-Tile/ship1x1/shock-mine-c02c17.png"

            }),
            ship1x1_prev: new moveObj({
                isCanBeControlled: false,
                map: "two",
                x: untils.withGrid(3),
                y: untils.withGrid(3),
                uniqueChar: 1,
                num:1,
                sizeOfShip: 1,
                lenMove: 1,
                isVisible: true,
                type: "ship",
                scale: 32,
                flagInMap: 1,

                flagSrc: "A",
                src: "./map/use-Tile/ship1x1/scorch.png",
                sSrc: "./map/use-Tile/ship1x1/scorch-dfbd5a.png",
                dSrc: "./map/use-Tile/ship1x1/scorch-ee5d33.png"
            }),
            ship2x2_prev: new moveObj({
                isCanBeControlled: true,
                map: "two",
                x: untils.withGrid(5),
                y: untils.withGrid(5),
                lenMove: 2,
                num:1,
                sizeOfShip: 2,
                isVisible: true,
                scale: 64,
                type: "ship",
                flagSrc: "A",
                flagInMap: 2,

                src: "./map/use-Tile/ship2x2/swarmer.png",
                sSrc: "./map/use-Tile/ship2x2/swarmer-dfbd5a.png",
                dSrc: "./map/use-Tile/ship2x2/swarmer-ee5d33.png"
            }),
            ship3x3_prev: new moveObj({
                isCanBeControlled: false,
                map: "two",
                x: untils.withGrid(7),
                y: untils.withGrid(7),
                lenMove: 1,
                num:1,
                sizeOfShip: 3,
                isVisible: true,
                scale: 96,

                type: "ship",
                flagSrc: "A",
                flagInMap: 3,

                src: "./map/use-Tile/ship_3x3/fuse.png",
                sSrc: "./map/use-Tile/ship_3x3/fuse-dfbd5a.png",
                dSrc: "./map/use-Tile/ship_3x3/fuse-ee5d33.png"
            }),
            ship4x4_prev: new moveObj({
                isCanBeControlled: true,
                map: "two",
                x: untils.withGrid(1),
                y: untils.withGrid(1),
                lenMove: 4,
                num:1,
                type: "ship",
                sizeOfShip: 4,
                isVisible: true,
                scale: 128,
                flagInMap: 4,

                flagSrc: "A",
                src: "./map/use-Tile/ship_4x4/foreshadow.png",
                sSrc: "./map/use-Tile/ship_4x4/foreshadow-dfbd5a.png",
                dSrc: "./map/use-Tile/ship_4x4/foreshadow-ee5d33.png"
            }),
        }
    }

}
