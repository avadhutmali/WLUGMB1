import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, useAnimations } from '@react-three/drei';

const Your3DModel = () => {
  const modelRef = useRef();
  const { scene, animations } = useGLTF('/dancing_penguin.glb'); 
  const { actions } = useAnimations(animations, modelRef);

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.005; // Rotate the model
    }
  });

  React.useEffect(() => {
    if (actions && actions[Object.keys(actions)[0]]) {
      actions[Object.keys(actions)[0]].play(); // Play the first animation
    }
  }, [actions]);

  return <primitive scale={0.012} object={scene} position={[0, -2.5, 0]} ref={modelRef} />;
};

export default Your3DModel;
