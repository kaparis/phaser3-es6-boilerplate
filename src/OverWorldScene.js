/**
 * @author       David Kaparis 
 * @license      See LICENSE.md
 * @description  Main Game World.
 */

'use strict';
import Phaser from 'phaser'; //Resolves to node_modules
import Player from './/sprites/player';

export default class OverWorldScene extends Phaser.Scene {
    
    constructor() {
        super({
            key: 'OverWorldScene'
        });

        this.map = null;
        this.player = null;
        this.cursors = null;
        this.blockedLayer = null;
        this.hud = null;
    }
    
    preload()
    {
       
    }

    create()
    {
        this.map = this.add.tilemap('overworldtilemap');
        this.map.addTilesetImage('roguelikeSheet_transparent','overworldtileset', 16, 16,0,1);
        
        // Creates TileMap Layers and displays them on screen. The names of the laywer were decided when creating the TileMap
        this.map.createStaticLayer('backgroundLayer',this.map.tilesets[0]);
        this.blockedLayer = this.map.createStaticLayer('blockedLayer',this.map.tilesets[0]);
        this.map.setCollisionBetween(1, 1250, true, 'blockedLayer');
        
        //resizes the game world to match the layer dimensions
        //this.backgroundlayer.resizeWorld();

        // Create the Player
        this.player = new Player({
            scene: this,
            x: 16 * 6, // 3500
            y: this.sys.game.config.height - 48 - 48,
            key: 'playerSpriteKey',
        });

        // Camera following the player
        this.cameras.main.startFollow(this.player);

        // Capture Key Events.
        // Any key could just replace the default (like this.key.jump)
        this.cursors = {
            jump: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP),
            jump2: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.X),
            left: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT),
            right: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT),
            down: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN),
        };

        // Create HUD        
        this.hudTimmerTitle = this.add.bitmapText(10, 10, 'fontOneKey', 'PLAYER SCORE', 12);
        this.hudTimmerTitle.setScrollFactor(0, 0); // Allows text moves with Camera        
        this.hudTimer = this.add.bitmapText(10, 30, 'fontOneKey', '000000', 12);
        this.hudTimer.setScrollFactor(0, 0); // Allows text moves with Camera

        this.hudScoreTitle = this.add.bitmapText(400, 10, 'fontOneKey', 'TIMER', 12);
        this.hudScoreTitle.setScrollFactor(0, 0); // Allows text moves with Camera
        this.hudScore = this.add.bitmapText(400, 30, 'fontOneKey', '255', 12);
        this.hudScore.setScrollFactor(0, 0); // Allows text moves with Camera
    }

    update(time,delta)
    {
        this.cursors = {
            left: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT),
            right: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT),
            down: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN),
            up: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP),
            jump: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.X),
        };
        
        this.player.update(time, delta, this.cursors);

        // Collision
        this.physics.add.collider(this.player, this.blockedLayer, collideCallback);
    }
}

function collideCallback()
{
    //TODO - Implement what to do when player collides with a object.
    console.log('collided');
}