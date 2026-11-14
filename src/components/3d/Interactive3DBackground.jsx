import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function ArchitecturalGrid() {
  const meshRef = useRef();
  const pointsRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.03;
      meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.02) * 0.1;
    }
    if (pointsRef.current) {
      pointsRef.current.rotation.y = -state.clock.getElapsedTime() * 0.02;
    }
  });

  // Generate particle positions
  const count = 120;
  const positions = React.useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 30;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 30;
    }
    return pos;
  }, []);

  return (
    <group ref={meshRef}>
      {/* Structural Wireframe Grid Ring - Luxury Gold Accent */}
      <mesh rotation={[-Math.PI / 2.5, 0, 0]} position={[0, -4, -5]}>
        <planeGeometry args={[60, 60, 30, 30]} />
        <meshBasicMaterial
          color="#d4af37"
          wireframe
          transparent
          opacity={0.08}
        />
      </mesh>

      {/* Floating Low-Poly Architectural Facade Elements */}
      <mesh position={[-8, 2, -10]} rotation={[0.4, 0.5, 0]}>
        <icosahedronGeometry args={[3, 1]} />
        <meshBasicMaterial
          color="#f59e0b"
          wireframe
          transparent
          opacity={0.06}
        />
      </mesh>

      <mesh position={[9, -2, -12]} rotation={[-0.2, 0.8, 0]}>
        <octahedronGeometry args={[4, 1]} />
        <meshBasicMaterial
          color="#fbbf24"
          wireframe
          transparent
          opacity={0.05}
        />
      </mesh>

      {/* Floating Particles */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.08}
          color="#fbbf24"
          transparent
          opacity={0.35}
        />
      </points>
    </group>
  );
}

export default function Interactive3DBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#070D1E]">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 60 }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.5} />
        <ArchitecturalGrid />
      </Canvas>
    </div>
  );
}
