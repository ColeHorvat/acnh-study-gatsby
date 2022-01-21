import React from 'react';
import { useLoader } from '@react-three/fiber'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'

function Isabelle() {
    const model = useLoader(FBXLoader, 'models/isabelle-animal-crossing/source/isabelle.fbx')

    return(
        <>
            <primitive object={model} />
        </>
    );
}

export default Isabelle;
