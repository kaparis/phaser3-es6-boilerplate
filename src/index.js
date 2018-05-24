/**
 * @author       David Kaparis
 * @license      See LICENSE.md
 * @description  Main Entry Point for the application
 */

'use strict';
import * as Phaser from 'phaser'; //Resolves to node_modules
import BootScene from './BootScene';
import TitleScene from './TitleScene';
import LevelsScene from './OverWorldScene';

let config = {
  
    type: Phaser.AUTO,
    width: 800,
    height: 480,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    scene: [
        BootScene,
        TitleScene,
        LevelsScene
    ]
};

new Phaser.Game(config);
