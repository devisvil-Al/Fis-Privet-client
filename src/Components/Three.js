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
        gltf.scene.rotation.y += -(settingDrag.positionState.x - e.touches[0].clientX) * 0.0001
        gltf.scene.rotation.x += -(settingDrag.positionState.y - e.touches[0].clientY) * 0.0001
    }
}

function touchEnd(e){
    settingDrag.isDragging = false
}

export function createScene(container, modelName) {
    
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera( 50, 2, 0.01, 10000 );
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize( 240, 130 );
    renderer.domElement.classList.add('canvas')
    container.appendChild( renderer.domElement );

    const loader = new GLTFLoader();
    loader.load( api.url + 'model/' + modelName, function ( gltf ) {
        const logo = document.querySelector('.levels__logo')
        logo.remove()
        scene.add( gltf.scene );
        const animation  = () => {
            requestAnimationFrame( animation );
            gltf.scene.rotation.y += 0.001;
            renderer.render( scene, camera );
            renderer.setClearColor(0x000000, 0);
        };
        animation();
        
        camera.position.z = 0.09999999999999
        renderer.domElement.addEventListener('touchstart', touchStart)
        renderer.domElement.addEventListener('touchmove', (e) => touchMove(e, gltf))
        renderer.domElement.addEventListener('touchend', touchEnd)

    }, undefined, function ( error ) {
        console.error( error );
    } );
    
}

