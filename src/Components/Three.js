import * as THREE from "three";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { api } from "./Api.js";

const settingDrag = {
    isDragging : false,
    positionState : {
        x : 0,
        y : 0,
    }
}

function touchStart(e){
    settingDrag.isDragging = true
    settingDrag.positionState = {
        x : e.touches[0].clientX,
        y : e.touches[0].clientY
    }
}

function touchMove(e, gltf){
    if(settingDrag.isDragging){
        
    }

    gltf.scene.rotation.y += -(settingDrag.positionState.x - e.touches[0].clientX) * 0.0005
    gltf.scene.rotation.x += -(settingDrag.positionState.y - e.touches[0].clientY) * 0.0005
}

function touchEnd(e){
    settingDrag.isDragging = false
}

export function createScene(container) {
    
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera( 50, 2, 0.01, 1000 );
    const renderer = new THREE.WebGLRenderer({ antialias: true });
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
        };
        animation();
        
        camera.position.z = 0.5
        renderer.domElement.addEventListener('touchstart', touchStart)
        renderer.domElement.addEventListener('touchmove', (e) => touchMove(e, gltf))
        renderer.domElement.addEventListener('touchend', touchEnd)

    }, undefined, function ( error ) {
        console.error( error );
    } );
    
}

