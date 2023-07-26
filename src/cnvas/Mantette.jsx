import React, { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { useGLTF,Preload,OrbitControls } from '@react-three/drei'
import CanvasLoader from '../components/Loader'
function Mantette({isMobile}) {
    const Manette=useGLTF('.../../public/ps5/scene.gltf')
  return (
    <mesh>
        <hemisphereLight/>
        <spotLight
        position={[-20,50,10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        />
        <pointLight intensity={1}/>
        <primitive object={Manette.scene} scale={!isMobile?45:65} position-y={1} position-x={-1} rotation-y={0} rotation-x={-1} rotation-z={0}  />
    </mesh>
  )
}

const MantetteCanvas=()=>{
    const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
  // Add a listener for changes to the screen size
  const mediaQuery = window.matchMedia("(max-width: 500px)");

  // Set the initial value of the `isMobile` state variable
  setIsMobile(mediaQuery.matches);

  // Define a callback function to handle changes to the media query
  const handleMediaQueryChange = (event) => {
    setIsMobile(event.matches);
  };

  // Add the callback function as a listener for changes to the media query
  mediaQuery.addEventListener("change", handleMediaQueryChange);

  // Remove the listener when the component is unmounted
  return () => {
    mediaQuery.removeEventListener("change", handleMediaQueryChange);
  };
}, []);
    return(
           <Canvas 
    shadows
    frameloop='demand'
    dpr={[1,2]}
    gl={{preserveDrawingBuffer:true}}
    camera={{
        fov:45,
        near:0.1,
        far:200,
        position:[-4,3,6]
    }}>
        <Suspense fallback={<CanvasLoader/>}>
            <OrbitControls
            autoRotate
            enableZoom={false}
            maxPolarAngle={Math.PI/2}
            minPolarAngle={Math.PI/2}/>
            <Mantette isMobile={isMobile}/>
            <Preload all/>
        </Suspense>
    </Canvas>
    )
 
}
export default MantetteCanvas