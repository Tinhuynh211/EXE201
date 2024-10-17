"use client";

import { Canvas } from "@react-three/fiber";
import Model from "../3d/Model";
import { Suspense, useState } from "react";
import { useProgress, Html } from "@react-three/drei";
import Chatbot from "../chatbot/Chatbox";
import Modal from "../modal/Modal";

function Loader() {
  const { progress } = useProgress();

  return <Html center>{progress.toFixed(1)} % loaded</Html>;
}

export default function Scene() {
  const [showModal, setShowModal] = useState(false);

  const handleModelClick = () => {
    setShowModal(true); // Open the modal when the model is clicked
  };

  return (
    <>
      <Canvas gl={{ antialias: true }} dpr={[1, 5]} 
      style={{ width: '350px', height: '250px', position: 'fixed', right: '10px', bottom: '1px' }}>
        <directionalLight position={[-5, -5, 5]} intensity={4} />
        <Suspense fallback={<Loader />}>
          <Model onClick={handleModelClick} />
        </Suspense>
      </Canvas>
      
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Chatbot onClose={() => setShowModal(false)} /> 
      </Modal>
    </>
  );
}