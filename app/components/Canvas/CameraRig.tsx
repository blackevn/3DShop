import React, { useRef, ReactNode } from 'react';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import { useGeneralContext } from '$/app/context/AppContext';
import * as THREE from 'three';

interface CameraRigProps {
  children: ReactNode;
}

const CameraRig: React.FC<CameraRigProps> = ({ children }) => {

  const group = useRef<THREE.Group>(null);
  const { width, toggle } = useGeneralContext();

  useFrame((state, delta) => {

    const isBreakpoint = width >= 1260;
    const isMobile = width <= 1260;

    // set the initial position of the model
    let targetPosition: [number, number, number] = [-0.2, 0, 2];
    
    if (!toggle) {
      isBreakpoint && (targetPosition)
      isMobile && (targetPosition = [0, 0.3, 3])
    } else {
      if (isMobile) targetPosition = [0, 0, 3.5];
      else targetPosition = [0, 0, 2];
    }

    // set model camera position
    easing.damp3(state.camera.position, targetPosition, 0.25, delta);

    // set the model rotation smoothly
    if (group.current) {
      easing.dampE(
        group.current.rotation,
        [state.pointer.y / 10, -state.pointer.x / 5, 0],
        0.25,
        delta
      );
    }
  });

  return <group ref={group}>{children}</group>;
};

export default CameraRig;