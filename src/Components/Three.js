import * as THREE from "three";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { api } from "./Api.js";

export function createScene(container) {
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera( 50, 2, 0.01, 1000 );
1
    const renderer = new THREE.WebGLRenderer();
    renderer.domElement.classList.add('canvas')
    container.appendChild( renderer.domElement );

    const loader = new GLTFLoader();
    loader.load( api.url + 'model', function ( gltf ) {
        scene.add( gltf.scene );
        const animation  = () => {
            requestAnimationFrame( animation );
            gltf.scene.rotation.y += 0.001;
            renderer.render( scene, camera );
            renderer.setClearColor(0x000000, 0);
            camera.position.z = 0.1
        };
        animation();

        container.addEventListener('mousemove', (e) => {
            const move = e
            const x = move.clientX * 0.05;
            const y = move.clientY * 0.05;
            gltf.scene.rotation.x = y
            gltf.scene.rotation.y = x
        })

     
    }, undefined, function ( error ) {
        console.error( error );
    } );
    
}

