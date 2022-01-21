import * as React from "react"
import Container from '../components/Container'
import Box from '../components/Box'
import Header from '../components/Header'
import { Canvas } from "@react-three/fiber"

const IndexPage = () => {
  return (
    <Container>
        <Header />
        <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Box position={[-1, 0, 0]} />
            <Box position={[1, 0, 0]} />
        </Canvas>
    </Container>
  )
}

export default IndexPage
