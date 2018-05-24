# Summary

## Introduction
I wanted to get started right away with Phaser.IO 3 using JavaScript ES6 (ES2016) in VS Code. Being new to all of this, I ran into so many problems getting a project setup to take advantage VS Code, getting autocomplete, linting, debugging, and etc working. At the time, online guides were out of date as the technology is changing so quickly. So I created this boiler plate code and now am sharing with others to hit the ground running. Enjoy.

## Context
* Gets you running with ES6 and Phaser 3. Has a Title Scene, a Overworld Map, a player, and some collision detection with objects on the map.
* Boiler plate includes a basic TileMap overworld. The TileMap uses 16x16 tiles with a map size of 800px by 400px(50 tiles by 25 tiles). I'm using this great CC0 Roguelike pack for my tilesets.

## Philosophy on Approach
There are any many ways to approach creating a Phaser.io project. For the boiler plate, the design approach I took was to treat this as an application, and not as web script. So no placing JavaScript in the HTML header in the right order to load. I used classes, and OOP principles along with tools to bundle the JavaScript files using ES6 modules. I also decided to write this in ES6 syntax and use a tool to complie down to ES5 for todays web browsers. That was a prefrence as I see ES6 being the future.

# Getting Started

## Getting the ToolSet
* Install VS Code
* Install VS Code Extention: ESLint
* Install NODE.JS & NPM
* Get Tiled (https://www.mapeditor.org/) (Optional)

## Initial Setup
1. Clone this repo `git clone https://github.com/kaparis/phaser3-es6-webpack.git`
3. Install dependencies with `npm install`
4. Install Typescript with `npm install -g typescript` (the -g says to install TypeScript globally)

## Compile and Run
* `npx webpack` -- Invokes webpack, and creates a app.js, vendor.js, and via a plugin starts the webserver and watches for changes. You can now see the boiler plate running on the screen.
* Terminal gives you a url to open in your browser and view the game

## Where do I go from here for my own game?
First, this boilerplate isn't a template for making your game. It has enough for you to get passed getting a working enivornment and focus on making your game.

With that being said, from here, I suggest you can copy the OverWorldScene and build your own scene(level). Then modify the player sprite with your own definition. Then copy the player sprite file to make enemies. 

# Boilier Plate Notes

## JavaScript Syntax
* Using ES6 aka ES2015 aka ECMAScript 6
* Note: Most browsers support up to ES5. So Webpack is used to down compile ES6 to ES5. 

## Packages Used
* ESLint       - A JavaScript linter tool for identifying syntax errors, problematic patterns, or code that doesn’t adhere to style guidelines defined in .eslintrc.json
* BabelJS      - A JavaScript compiler that converts JavaScript ES6 to JavaScript ES5
* Browser-Sync - A HTTP server that monitors file changes and serves your files. Browser security constraints prevent you running the app from the file folder.
* TypeScript   - Used just for Intellisense support in VS Code using the `phaser.d.ts` file.
* Webpack      - A Bundler tool that bundles many files into 1 or more files. Great for Javascript, sass, and etc.
* Webpack | webpack-bundle-analyzer - Plugin that provides HTML report of how files are bundled with WebPack. Great for debugging.
* Webpack | browser-sync-webpack-plugin - Plugin that calls Browser-Sync after webpack creates a combined file

## Creating initial Config files (Defaults already present)
* package.json      - Created when a package is installed via NPM
* eslintrc.json     - `npx eslint --init`
* webpack.config.js - `npx webpack --init`
* tsconfig.json     - `npx tsc --init`

## Beginner Pointers

* Sourcemap - When debugging, its a way to link the combined/minified file back to the source unbuilt file. This file is the key to good intellisense support.
* Webpack needs to run to merge all the JavaScript files, else you will find the changes you made in the JavaScript source file isn't in the dist bundle JavaScript file
* tsconfig.json points to the Phaser TypeScript Definition which enables smart code completion (IntelliSense) for modules and packages. We aren't using TypeScript language though.
* The phaser.d.ts file defines phaser variable. In VS Code, the intellisense finds phaser even though you don't import the module. For proper JS, import the phaser module and don't assume phaser was imported somewhere else

# Know Problems with Boilier Plate

* IntelliSense for all Phaser modules doesn't work the way I expect. If you follow the namespace, definitions don't always appear. Still working out how and if this can improve
* TileMap uses a SpriteSheet that has 1px spacer between sprites. Initial the map looks good when it renders. When you move your character around, the redraw breaks the continuinity betwen the tiles and you see lines between each square.
* The `phaser.d.ts` doesn't have a node package yet. So the file is a copy from the phaser.io/docs repository. TODO to link to a node package once one is availabe.
* If webpack gives a strange error. It has something with Webpack script requires PowerShell to be used instead of any other shell in VS Code. I was using git shell but had to swtich over to PowerShell. I don't recall the details. If I do, I will add a line here about it.