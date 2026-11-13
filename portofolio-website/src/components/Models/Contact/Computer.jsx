import { useEffect } from "react";
import { useGLTF } from "@react-three/drei";

const Computer = (props) => {
  const { scene } = useGLTF("/models/computer-optimized-transformed.glb");

  // Let every part of the desk cast and receive shadows
  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [scene]);

  return <primitive object={scene} {...props} />;
};

useGLTF.preload("/models/computer-optimized-transformed.glb");

export default Computer;
