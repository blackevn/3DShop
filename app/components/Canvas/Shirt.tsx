import React from 'react';
import * as THREE from 'three'; // Import THREE for type safety
import { easing } from 'maath';
import { useSnapshot } from 'valtio';
import { useFrame } from '@react-three/fiber';
import { Decal, useGLTF, useTexture } from '@react-three/drei';

import state from '../../store';

const Shirt: React.FC = () => {
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF('/shirt_baked.glb');

  const logoTexture = useTexture(snap.logoDecal);
  const fullTexture = useTexture(snap.fullDecal);

  useFrame((state, delta) => {
    const lambertMaterial = materials.lambert1 as THREE.MeshLambertMaterial;
    easing.dampC(lambertMaterial.color, snap.color, 0.25, delta);
  });

  return (
    <group key={JSON.stringify(snap)}>
      <mesh
        castShadow
        geometry={(nodes.T_Shirt_male as THREE.Mesh).geometry}
        material={materials.lambert1}
        material-roughness={1}
        dispose={null}
      >
        { snap.isFullTexture && (
          <Decal
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
            scale={1}
            map={fullTexture as THREE.Texture}
          />
        )}
        { snap.isLogoTexture && (
          <Decal
            position={[0, 0.04, 0.15]}
            rotation={[0, 0, 0]}
            scale={0.15}
            map={logoTexture as THREE.Texture}
            // depthTest={false}
            // depthWrite={true}
         
          />
        )}
      </mesh>
    </group>
  );
};

export default Shirt;

