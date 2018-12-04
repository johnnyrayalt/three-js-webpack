import * as THREE from 'three'
const OrbitControlsLibrary = require('three-orbit-controls')
const OrbitControls = OrbitControlsLibrary(THREE)

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(
 75, // size
 window.innerWidth / window.innerHeight, //aspect ratio
 0.1, // near clipping plane
 1000 ) //far clipping plane

const renderer = new THREE.WebGLRenderer()
renderer.setSize( window.innerWidth, window.innerHeight )
document.body.appendChild( renderer.domElement )

window.addEventListener( 'resize', () => {
	let width = window.innerWidth
	let height = window.innerHeight
	renderer.setSize( width, height )
	camera.aspect = width / height
	camera.updateProjectionMatrix()
})

// controls
const controls = new OrbitControls( camera, renderer.domElement )

// create the shape
const geometry = new THREE.BoxGeometry( 1, 1, 1 )
const texture = new THREE.TextureLoader().load('/3cbe185bb4dfc233fb4d7976f703dd49.png')

const material = new THREE.MeshBasicMaterial({
	color: 0xffffff,
	map: texture
})
const cube = new THREE.Mesh( geometry, material )
scene.add( cube )

camera.position.z = 3
controls.update()


let update = () => {
	cube.rotation.x += 0.01,
	cube.rotation.y += 0.05
}

// draw scene
const render = () => {
	renderer.render( scene, camera )
}

// run game loop {update, render, repeat}
const GameLoop = () => {
	requestAnimationFrame( GameLoop )

	update()
	render()
}

GameLoop()
