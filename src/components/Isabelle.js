import React from 'react';
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

function Isabelle() {
    const model = useLoader(GLTFLoader, 'models/isabelle_animal_crossing/scene.gltf')

    return(
        <>
            <primitive object={model.scene} />
        </>
    );
}

export default Isabelle;
