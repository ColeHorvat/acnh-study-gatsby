import React from 'react';
import { useLoader } from '@react-three/fiber'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'

function Isabelle() {
    const model = useLoader(FBXLoader, 'models/isabelle_animal_crossing/isabelle.fbx')

    return(
        <>
            <primitive object={model} />
        </>
    );
}

export default Isabelle;
