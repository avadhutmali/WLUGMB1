import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

const Your3DModel = () => {
  const modelRef = useRef();
  const { scene } = useGLTF("/christmas_cute_penguin.glb");

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.005; // Rotate the model
    }
  });

  return (
    <primitive scale={80} object={scene} position={[0, 1, 0]} ref={modelRef} />
  );
};

export default Your3DModel;
