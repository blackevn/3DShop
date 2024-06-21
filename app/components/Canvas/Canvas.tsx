"use client"

import { Environment, Center } from '@react-three/drei'
import { Canvas as ThreeCanvas } from '@react-three/fiber'

import CameraRig from './CameraRig'
import Shirt from './Shirt'
import BackDrop from './BackDrop'

const Canvas = () => {
  return  <>
  
      <ThreeCanvas
      shadows
      camera={{ position: [0, 0, 0], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      className="w-full max-w-full h-full transition-all ease-in"
    >
      <ambientLight intensity={0.5} />
      <Environment preset='city' />

          <CameraRig>
          <BackDrop/>
            <Center>
              <Shirt/>
            </Center>
          
          </CameraRig>

      </ThreeCanvas>
      
  </>
  
}

export default Canvas