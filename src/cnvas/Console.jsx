import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, SpotLight, useGLTF } from "@react-three/drei";
import CanvasLoader from "../components/Loader";

function Console({isMobile}) {
  const PS5 = useGLTF("../../public/playstation_5/scene.gltf");
  return (
    <mesh>
      <hemisphereLight />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive object={PS5.scene} scale={!isMobile?2:2} position-y={!isMobile?-2.4:-2.4} rotation-y={0} />
    </mesh>
  );
}
const ConsoleCanvas = () => {
  const [isMobile,setIsMobile]=useState(false)
  useEffect(()=>{
    const mediaQuery =window.matchMedia("(max-width: 500px)")
    setIsMobile(mediaQuery.matches)
    const handleMediaQuery =(event)=>{
      setIsMobile(event.matches)
    }
    mediaQuery.addEventListener("change",handleMediaQuery)
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQuery);
    };
  },[])
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Console isMobile={isMobile}/>
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default ConsoleCanvas;
