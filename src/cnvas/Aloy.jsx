import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, SpotLight, useGLTF } from "@react-three/drei";
import CanvasLoader from "../components/Loader";

function GOD({isMobile}) {
  const PS5 = useGLTF("../../public/god_of_war/scene.gltf");
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
      <primitive object={PS5.scene} scale={!isMobile?0.35:0.19} position-y={!isMobile?-0.35:-0.1} rotation-y={0} />
    </mesh>
  );
}
const GODCanvas = () => {
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
      autoRotate={true}
  enableZoom={false}
  enablePan={false}
  minPolarAngle={Math.PI / 2}
  maxPolarAngle={Math.PI / 2}
/>
        <GOD isMobile={isMobile}/>
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default GODCanvas;