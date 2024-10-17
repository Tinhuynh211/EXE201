import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Group } from "three";

useGLTF.preload("/robot_playground.glb", false, false);

interface ModelProps {
  onClick: () => void; // Accepting onClick prop
}

const Model: React.FC<ModelProps> = ({ onClick }) => {
  const group = useRef<Group>(null);
  const { nodes, materials, animations, scene } = useGLTF("/robot_playground.glb");
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    if (actions && actions["Experiment"]) {
      actions["Experiment"].play();
    }
  }, [actions]);

  useFrame(() => {
    if (actions && actions["Experiment"]) {
      actions["Experiment"].paused = false;
    }
  });

  return (
    <group ref={group} onClick={onClick} position={[1.5, -1, 1]}> {/* Adjust position to bottom-right */}
      <primitive object={scene} />
    </group>
  );
};

export default Model;