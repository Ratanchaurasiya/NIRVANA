import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Float } from '@react-three/drei';
import * as THREE from 'three';

function ExplodedFoundation({ isExploded }) {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
    }
  });

  const gap = isExploded ? 1.2 : 0;

  return (
    <group ref={groupRef}>
      {/* 1. Bedrock Base Layer */}
      <mesh position={[0, -2.5 - gap, 0]}>
        <boxGeometry args={[4.5, 0.6, 4.5]} />
        <meshStandardMaterial color="#171717" roughness={0.8} />
      </mesh>
      <Text position={[0, -2.5 - gap, 2.4]} fontSize={0.18} color="#77736C">
        01 / DEEP BEDROCK PILING
      </Text>

      {/* 2. Seismic Base Dampers & Shock Absorbers */}
      {[-1.5, 1.5].map((x, i) =>
        [-1.5, 1.5].map((z, j) => (
          <group key={`damper-${i}-${j}`} position={[x, -1.6 - gap * 0.6, z]}>
            <cylinderGeometry args={[0.35, 0.35, 0.5, 16]} />
            <meshStandardMaterial color="#B69B65" metalness={0.9} roughness={0.2} />
          </group>
        ))
      )}
      <Text position={[0, -1.6 - gap * 0.6, 2.4]} fontSize={0.18} color="#B69B65">
        02 / HYDRAULIC SEISMIC DAMPERS
      </Text>

      {/* 3. Reinforced Concrete Raft Slab */}
      <mesh position={[0, -0.8 - gap * 0.2, 0]}>
        <boxGeometry args={[4.2, 0.7, 4.2]} />
        <meshStandardMaterial color="#2E2E2E" roughness={0.5} metalness={0.3} />
      </mesh>
      <Text position={[0, -0.8 - gap * 0.2, 2.4]} fontSize={0.18} color="#A39F97">
        03 / REINFORCED CONCRETE SLAB
      </Text>

      {/* 4. High-Tensile Steel Rebar Cage Wireframe */}
      <group position={[0, 0.4 + gap * 0.4, 0]}>
        <boxGeometry args={[3.8, 1.4, 3.8]} />
        <mesh>
          <boxGeometry args={[3.8, 1.4, 3.8]} />
          <meshStandardMaterial color="#B69B65" wireframe />
        </mesh>
      </group>
      <Text position={[0, 0.4 + gap * 0.4, 2.4]} fontSize={0.18} color="#B69B65">
        04 / STEEL REBAR EXOSKELETON
      </Text>

      {/* 5. Structural Core Columns */}
      {[-1.2, 1.2].map((x, i) =>
        [-1.2, 1.2].map((z, j) => (
          <mesh key={`core-${i}-${j}`} position={[x, 1.8 + gap * 0.8, z]}>
            <cylinderGeometry args={[0.25, 0.25, 1.4, 12]} />
            <meshStandardMaterial color="#3A3833" metalness={0.8} roughness={0.3} />
          </mesh>
        ))
      )}
      <Text position={[0, 1.8 + gap * 0.8, 2.4]} fontSize={0.18} color="#F5F1E8">
        05 / BIS ZONE 5 CORE COLUMNS
      </Text>
    </group>
  );
}

export default function SeismicFoundation3D() {
  const [isExploded, setIsExploded] = useState(true);

  return (
    <div className="w-full h-[420px] sm:h-[500px] relative rounded-none overflow-hidden bg-[#1F1F1F] border border-[#2E2E2E]">
      {/* Control Overlay */}
      <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between pointer-events-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-none bg-[#171717]/95 border border-[#2E2E2E] text-[#B69B65] text-xs font-mono uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-[#B69B65]" />
          <span>SEISMIC STRUCTURAL EXPLODED VIEW</span>
        </div>

        <button
          onClick={() => setIsExploded(!isExploded)}
          className="px-4 py-1.5 rounded-none bg-[#B69B65] text-[#171717] text-xs font-bold uppercase tracking-wider hover:bg-[#c4a973] transition-all"
        >
          {isExploded ? 'Assemble Core' : 'Explode View'}
        </button>
      </div>

      <Canvas camera={{ position: [0, 1, 8], fov: 50 }}>
        <ambientLight intensity={0.9} />
        <directionalLight position={[8, 12, 8]} intensity={1.8} color="#ffffff" />
        <pointLight position={[-8, -4, -6]} intensity={0.8} color="#B69B65" />
        <spotLight position={[0, 8, 4]} intensity={1.5} color="#F5F1E8" />

        <ExplodedFoundation isExploded={isExploded} />

        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 6} />
      </Canvas>
    </div>
  );
}
