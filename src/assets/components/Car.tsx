import { Card } from '@mui/material'
import * as PIXI from "pixi.js"
import { useEffect, useState } from 'react'

// app.loader.baseUrl = '../images'
import mountain_left_img from '../images/mountain_left_200x200.png'
import mountain_right_img from '../images/mountain_right_200x200.png'
import mountain_fade_img from '../images/mountain_fade_1100x350.png'
// import sideroad_left_img from '../images/sideroad_left_600x200.png'
// import sideroad_right_img from '../images/sideroad_right_600x200.png'
import road_img from '../images/road_4_20.png'
import sky_img from '../images/sky_1100x450.png'
import car_center_img from '../images/cars/car_center_140x130.png'


let app = new PIXI.Application({
	width: 952,
	height: 600,
	backgroundColor: 0xAAAAAA
})




	let player;
	let enemy;
	let keys: any  = {}
	let bgY = 0
	let bgX = 0
	let speed = 1;
	let mountain_left;
	let mountain_right;
	let mountain_fade;
	let sideroad_left;
	let sideroad_right;
	let road;
	let sky;
	let car_center: any;


	// app preloader
	// app.loader.baseUrl = '../images'
	app.loader.add('mountain_left', mountain_left_img)
	app.loader.add('mountain_right', mountain_right_img)
	app.loader.add('mountain_fade', mountain_fade_img)
	// app.loader.add('sideroad_left', sideroad_left_img)
	// app.loader.add('sideroad_right', sideroad_right_img)
	app.loader.add('road', road_img)
	app.loader.add('sky', sky_img)
	app.loader.add('car_center', car_center_img)

	// car_center = PIXI.Sprite.from(car_center_img)
	// car_center.anchor.set(200)
	// car_center.x = 500;
	// car_center.y = 500;
	// app.stage.addChild(car_center)

	window.addEventListener('keydown', keyDown)
	window.addEventListener('keyup', keyUp)

	function keyDown(e: any) {
		// console.log(e.keyCode)
		keys[e.keyCode] = true
	}

	function keyUp(e: any) {
		// console.log(e.keyCode)
		keys[e.keyCode] = false
	}

	function initLevel() {

		sky = createBg(app.loader.resources['sky'].texture, 10100, 400, 0, 0)
		mountain_fade = createBg(app.loader.resources['mountain_fade'].texture, 1100, 400, -60, 190)
		road = createBg(app.loader.resources['road'].texture, 10100, 400, -145, 395)
		mountain_left = createBg(app.loader.resources['mountain_left'].texture, 200, 200, -20, 250)
		mountain_right = createBg(app.loader.resources['mountain_right'].texture, 200, 200, 650, 250)
		// sideroad_left = createBg(app.loader.resources['sideroad_left'].texture, 600, 200, 100, 350)
		// sideroad_right = createBg(app.loader.resources['sideroad_right'].texture, 600, 200, 600, 400)
		car_center = createBg(app.loader.resources['car_center'].texture, 140, 129, 410, 450)

		app.ticker.add(gameLoop)
	}

	function gameLoop() {
		if(keys['39']) {
			//move car to left
		}
	}

	function createBg(texture: PIXI.Texture, x: number, y: number, set1: number, set2: number): PIXI.TilingSprite {
		let tiling = new PIXI.TilingSprite(texture, x, y)
		tiling.position.set(set1, set2)
		app.stage.addChild(tiling)

		return tiling;
	}

	function showProgress(e: any): void {
		console.log(e.progress)
	}
	function doneLoading(e: any) {
		console.log('DONE!')
	}
	function reportError(e: any) {
		console.log(e.message)
	}

	// cars has to=wo type of collision [front as vertical and side as horizantal]
	function horizantalIntersector(a: PIXI.Sprite, b: PIXI.Sprite) {
		let aBox = a.getBounds()
		let bBox = b.getBounds()

		return	aBox.x + aBox.width > bBox.x &&
				bBox.x + bBox.width > aBox.x &&
				aBox.y + aBox.height > bBox.y &&
				bBox.y + bBox.height > aBox.y
	}
	function verticalIntersector(a: PIXI.Sprite, b: PIXI.Sprite) {
		let aBox = a.getBounds()
		let bBox = b.getBounds()

		return	aBox.y + aBox.height > bBox.y &&
				bBox.y + bBox.height > aBox.y &&
				aBox.x + aBox.width > bBox.x &&
				bBox.x + bBox.width > aBox.x
	}


function Car() {
	const [co, setCo] = useState(200)

	useEffect(() => {
		document.getElementsByTagName('section')[0]?.appendChild(app.view)

	app.loader. onProgress.add(showProgress);
	app.loader.onComplete.add(initLevel)
	app.loader.load()

	}, [])

	return (
		<Card component="section" className='car' id="sed">
			
		</Card>
	)
}

export default Car;