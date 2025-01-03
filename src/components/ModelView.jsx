// src/components/ModelView.jsx

import React, { Suspense } from "react";
import { Html, OrbitControls, PerspectiveCamera, View } from "@react-three/drei";
import * as THREE from "three";
import Phone from "./Phone";
import Lights from "./Lights";
import Loader from "./Loader";
const ModelView = ({
  index,
  groupRef,
  gsapType,
  controlRef,
  setRotationState,
  size,
  item,
}) => {
  return (
    <View
      index={index}
      id={gsapType}
      className={`w-full h-full absolute ${index === 2 ? 'right-[-100%]' : ''}`}
    >
      {/* Adding basic lighting */}
      <ambientLight intensity={1} />

      {/* PerspectiveCamera from Drei */}
      <PerspectiveCamera makeDefault position={[3, 0, 0]} /> 

      {/* External lights component */}
      <Lights />

      <OrbitControls
        makeDefault
        ref={controlRef}
        enablePan={false}
        enableZoom={false}
        target={new THREE.Vector3(0, 0, 0)}
        onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
        rotateSpeed={0.3}
      />

      <group
        ref={groupRef}
        name={`${index === 1 ? "Small" : "Large"}`}
        position={[0, 0, 0]}
      >
        <Suspense fallback={<Html>{<Loader />}</Html>}>
          <Phone
            scale={index === 1 ? [15, 15, 15] : [17, 17, 17]}
            item={item}
            size={size}
          />
        </Suspense>
      </group>
    </View>
  );
};

export default ModelView;
