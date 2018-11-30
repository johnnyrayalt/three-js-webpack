import * as THREE from 'three'
 // Scene + Camera + Renderer
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )
const renderer = new THREE.WebGLRenderer({ antialias: true})

renderer.setSize( window.innerWidth, window.innerHeight )
// sets renderer background color
renderer.setClearColor("#222222")
document.body.appendChild( renderer.domElement )
camera.position.z = 5

// resize canvas on resize window
window.addEventListener( 'resize', () => {
	let width = window.innerWidth
	let height = window.innerHeight
	renderer.setSize( width, height )
	camera.aspect = width / height
	camera.updateProjectionMatrix()
})

// basic cube
let geometry = new THREE.BoxGeometry( 1, 1, 1)
let material = new THREE.MeshStandardMaterial( { color: 0xff0051, flatShading: true, metalness: 0, roughness: 1 })
const cube = new THREE.Mesh ( geometry, material )
scene.add( cube )

// ambient light
const ambientLight = new THREE.AmbientLight ( 0xffffff, 0.2)
scene.add( ambientLight )

// point light
const pointLight = new THREE.PointLight( 0xffffff, 1 );
pointLight.position.set( 25, 50, 25 );
scene.add( pointLight );

function render() {
	renderer.render( scene, camera )
}
render()
