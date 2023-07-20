import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, SpotLight, useGLTF } from "@react-three/drei";
//import {} from '../../public/3D/playstation_logo_3d_printable/'
function Logo() {
    const logo=useGLTF('../../public/3D/playstation_logo_3d_printable/scene.gltf')


  return (
    <mesh>
        <hemisphereLight  color='black'/>
        <SpotLight
                position={[-20, 50, 10]}
                angle={0.12}
                penumbra={1}
                intensity={1}
                castShadow
                shadow-mapSize={1024}/>
        <pointLight/>
        <primitive 
        rotation={[1, 1.5, -1]}
        object={logo.scene}
        scale={1}
        position={[0, -3.25, 0.5]}

        
        />

    </mesh>
  )
}
const LogoCanvas=()=>{
    return(
        <Canvas
        frameloop="demand"
        shadows
        dpr={[1,2]}
        camera={{ position: [20, 13, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}>
              <Suspense >
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Logo/>
      </Suspense>
      <Preload all />
        </Canvas>
    )
}
export default LogoCanvas