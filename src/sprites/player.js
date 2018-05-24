/**
 * @author       David Kaparis
 * @license      See LICENSE.md
 * @description  Pre-load Assets. Then launches the Title Screen
 */

'use strict';
export default class Player extends Phaser.GameObjects.Sprite{
    constructor(config){
        super(config.scene, config.x, config.y, config.key);
        config.scene.physics.world.enable(this);
        config.scene.add.existing(this);
       
        this.anims.animationManager.create({
            key:'left',
            frames:  this.anims.animationManager.generateFrameNumbers('playerSpriteKey', { start: 0, end: 3 }),
            frameRate: 10,
            repeat:-1
        });
        //this.anims.animationManager.add('left');
        
        this.anims.animationManager.create({
            key: 'turn',
            frames: [ { key: 'playerSpriteKey', frame: 4 } ],
            frameRate: 20
        });
        //this.anims.animationManager.add('turn');
        
        this.anims.animationManager.create({
            key: 'right',
            frames:  this.anims.animationManager.generateFrameNumbers('playerSpriteKey', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        });
        //this.anims.animationManager.add('right');
    }

    preUpdate()
    {
        // Called every tick before update.
        // Automatically called by World.preUpdate
    }

    update(time, delta, cursors){
     
        let input = {
            left: cursors.left.isDown,
            right: cursors.right.isDown,
            down: cursors.up.isDown,
            up: cursors.down.isDown,
            jump: cursors.jump.isDown
        };

        if (input.left){
            this.body.velocity.x = -150;
            this.anims.play('left', true);
        }
        else if (input.right){
            this.body.velocity.x = 150;
            this.anims.play('right', true);
        }
        else if (input.up){
            this.body.velocity.y = 150;
            this.anims.play('turn', true);
        }
        else if (input.down){
            this.body.velocity.y = -150;
            this.anims.play('turn', true);
        }
        else {
            this.body.velocity.x = 0;
            this.body.velocity.y = 0;
            this.anims.stop();
        }
    }
}