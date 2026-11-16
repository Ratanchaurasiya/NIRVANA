import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

function ArchitecturalPerspectivePlane() {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      // Extremely subtle, imperceptible architectural drift
      meshRef.current.position.y = -6 + Math.sin(state.clock.getElapsedTime() * 0.15) * 0.15;
    }
  });

  return (
    <group ref={meshRef} position={[0, -6, -8]} rotation={[-Math.PI / 2.3, 0, 0]}>
      {/* Subtle Architectural Drafting Grid */}
      <mesh>
        <planeGeometry args={[80, 80, 24, 24]} />
        <meshBasicMaterial
          color="#B69B65"
          wireframe
          transparent
          opacity={0.07}
        />
      </mesh>
    </group>
  );
}

export default function Interactive3DBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#FAF9F6]">
      <Canvas
        camera={{ position: [0, 0, 16], fov: 55 }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.4} />
        <ArchitecturalPerspectivePlane />
      </Canvas>
    </div>
  );
}
