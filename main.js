import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x01374c)
scene.fog = new THREE.Fog(scene.background, 10, 20)

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
renderer.domElement.style.cursor = 'pointer';

const geometry = new THREE.BoxGeometry( 8, 8, 0.5 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

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