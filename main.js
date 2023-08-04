import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// create scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x01374c)

// create camera
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 5;

// create renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
renderer.domElement.style.cursor = 'pointer';

// create wall 1
const geometry = new THREE.BoxGeometry( 12, 12, 0.5 );
const material = new THREE.MeshBasicMaterial( { color: 0x868484 } );
const wall_1 = new THREE.Mesh( geometry, material );
wall_1.position.set(0, 0, 6)
scene.add( wall_1 );

// create wall 2
const wall_2 = new THREE.Mesh(geometry, material)
wall_2.position.set(0, 0, -6)
scene.add( wall_2 );

// create wall 3
const wall_3 = new THREE.Mesh(geometry, material)
wall_3.position.set(-6, 0, 0)
wall_3.rotation.setFromVector3(new THREE.Vector3( 0, Math.PI / 2, 0));
scene.add( wall_3 );

// create wall 4
const wall_4 = new THREE.Mesh(geometry, material)
wall_4.position.set(6, 0, 0)
wall_4.rotation.setFromVector3(new THREE.Vector3( 0, Math.PI / 2, 0));
scene.add( wall_4 );

// create ceiling
const ceiling_material = new THREE.MeshBasicMaterial( { color: 0x453f37 } );
const ceiling = new THREE.Mesh(geometry, ceiling_material)
ceiling.position.set(0, 6, 0)
ceiling.rotation.setFromVector3(new THREE.Vector3( Math.PI / 2, 0, 0));
scene.add( ceiling );

// create floor
const floor = new THREE.Mesh(geometry, ceiling_material)
floor.position.set(0, -6, 0)
floor.rotation.setFromVector3(new THREE.Vector3( Math.PI / 2, 0, 0));
scene.add( floor );

// ball 1
const ball_geometry = new THREE.SphereGeometry( 15, 32, 16 ); 
const ball_material = new THREE.MeshBasicMaterial( { color: 0xffff00 } ); 
const ball_1 = new THREE.Mesh( ball_geometry, ball_material ); 
ball_1.position.set(0, 0, 6)
scene.add( ball_1 );

const controls = new OrbitControls( camera, renderer.domElement );
controls.target.set( 0, 0.5, 0 );
controls.enablePan = false;
controls.enableDamping = true;

function animate() {

    requestAnimationFrame( animate );

    controls.update();

    renderer.render( scene, camera );

}

animate();