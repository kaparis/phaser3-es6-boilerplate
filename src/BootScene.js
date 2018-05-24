/**
 * @author       David Kaparis
 * @license      See LICENSE.md
 * @description  Purpose is to pre-load assets of the game. Then launches to the Title Screen
 */

'use strict';
import Phaser from 'phaser'; //Resolves to node_modules
/// <reference path=”typescriptDef/phaser.d.ts” /

export default class BootScene extends Phaser.Scene {
    
    constructor() {
        super({
            key: 'BootScene'
        });
    }
    
    preload()
    {
        // Load Game Assets
        this.load.tilemapTiledJSON('overworldtilemap','../assets/overworld/overworldMaster.json',null, Phaser.Tilemaps.TILED_JSON);
        this.load.image('overworldtileset','../assets/roguelike-pack/Spritesheet/roguelikeSheet_transparent.png');

        this.load.spritesheet('playerSpriteKey','../assets/player/dude.png',
            { frameWidth: 32, frameHeight: 48 }
        );

        this.load.bitmapFont('fontOneKey', 'assets/fonts/font.png', 'assets/fonts/font.fnt');
    }

    create(){
        this.scene.start('TitleScene');
    }
}
