import * as React from "react"
import { Canvas, extend } from "@react-three/fiber"
import { Suspense } from 'react'
import { OrbitControls } from '@react-three/drei'

import Container from '../components/Container'
import Box from '../components/Box'
import Header from '../components/Header'
import Isabelle from '../components/Isabelle'


const IndexPage = () => {
  return (
    <Container>
        <Header />
        <Canvas>
            <Suspense fallback={null}>
                <OrbitControls />
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <Isabelle />
            </Suspense>

        </Canvas>
    </Container>
  )
}

export default IndexPage
