// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001010101010101010101010101010101010102010101010102010101040101010101010101030101010101010101010101010102010101010101010101030101010301010101050101010102010101010101010101010101030101010101010101010101040101010101040101010101010201010101010201010101010201010101010101060101010103010101010101010104010101010101010101010401040101010103010401010201010101010101020101010101010101010103010101010101010101010101010101010101010101040101010103010106010101010103010101020101010104010102010101010101010101010101010101010101`, img`
. . . . . . . . . . . . . . . . 
. . 2 . . . . . 2 . . . 2 . . . 
. . . . . 2 . . . . . . . . . . 
. . . 2 . . . . . . . . . 2 . . 
. 2 . . . . 2 . . . . 2 . . . . 
. . . . . . . . 2 . . . . . . . 
. . . . 2 . . . . . 2 . . . . . 
. 2 . . . . . 2 . . . . . 2 . . 
. . . . . . . . . . 2 . . . . . 
. . . 2 . . . . . . . . . . 2 . 
2 . . . . . . 2 . . 2 . . . . . 
. . 2 . . . . . . . . . . 2 . . 
. . . . . . . . . . . . . . . . 
. . . 2 . . . . 2 . . 2 . . . . 
. 2 . . . 2 . . . . 2 . . 2 . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile3,sprites.castle.saplingPine,sprites.castle.saplingOak,sprites.castle.rock0,sprites.castle.rock1,sprites.castle.rock2], TileScale.Sixteen);
            case "level3":
            case "level3":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`0500050001000000020000000000030006000000000000040500000000`, img`
. . . . . 
. . . . . 
. . . . . 
. . . . . 
. . . . . 
`, [myTiles.transparency16,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile9], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile3":
            case "tile5":return tile5;
            case "myTile4":
            case "tile6":return tile6;
            case "myTile5":
            case "tile7":return tile7;
            case "myTile6":
            case "tile8":return tile8;
            case "myTile7":
            case "tile9":return tile9;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
