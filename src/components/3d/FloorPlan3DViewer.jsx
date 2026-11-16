import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Html } from '@react-three/drei';
import * as THREE from 'three';

function FloorPlanGeometry({ title = "TYPICAL 3BHK RESIDENTIAL SUITE" }) {
  const meshGroup = useRef();
  const [activeZone, setActiveZone] = useState('living');

  useFrame((state) => {
    if (meshGroup.current) {
      meshGroup.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.05;
    }
  });

  const wallColor = "#3A3833";
  const floorColor = "#171717";
  const furnitureColor = "#B69B65";

  return (
    <group ref={meshGroup} position={[0, -0.5, 0]}>
      {/* ---------------- Floor Slab ---------------- */}
      <mesh position={[0, -0.1, 0]}>
        <boxGeometry args={[7, 0.2, 5]} />
        <meshStandardMaterial color={floorColor} roughness={0.4} metalness={0.4} />
      </mesh>

      {/* Grid Blueprint Lines on Floor */}
      <mesh position={[0, 0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[6.8, 4.8, 14, 10]} />
        <meshBasicMaterial color="#2E2E2E" wireframe transparent opacity={0.6} />
      </mesh>

      {/* ---------------- Outer Perimeter Walls ---------------- */}
      {/* Back Wall */}
      <mesh position={[0, 0.5, -2.4]}>
        <boxGeometry args={[6.8, 1, 0.15]} />
        <meshStandardMaterial color={wallColor} roughness={0.3} metalness={0.6} transparent opacity={0.9} />
      </mesh>
      {/* Front Wall with Entry Opening */}
      <mesh position={[-2, 0.5, 2.4]}>
        <boxGeometry args={[2.8, 1, 0.15]} />
        <meshStandardMaterial color={wallColor} roughness={0.3} metalness={0.6} transparent opacity={0.9} />
      </mesh>
      <mesh position={[2, 0.5, 2.4]}>
        <boxGeometry args={[2.8, 1, 0.15]} />
        <meshStandardMaterial color={wallColor} roughness={0.3} metalness={0.6} transparent opacity={0.9} />
      </mesh>

      {/* Left & Right Outer Walls */}
      <mesh position={[-3.35, 0.5, 0]}>
        <boxGeometry args={[0.15, 1, 4.9]} />
        <meshStandardMaterial color={wallColor} roughness={0.3} metalness={0.6} transparent opacity={0.9} />
      </mesh>
      <mesh position={[3.35, 0.5, 0]}>
        <boxGeometry args={[0.15, 1, 4.9]} />
        <meshStandardMaterial color={wallColor} roughness={0.3} metalness={0.6} transparent opacity={0.9} />
      </mesh>

      {/* ---------------- Interior Room Partition Walls ---------------- */}
      <mesh position={[-0.5, 0.5, 0]}>
        <boxGeometry args={[0.1, 1, 4.8]} />
        <meshStandardMaterial color="#2E2E2E" transparent opacity={0.8} />
      </mesh>
      <mesh position={[1.4, 0.5, -0.6]}>
        <boxGeometry args={[3.8, 1, 0.1]} />
        <meshStandardMaterial color="#2E2E2E" transparent opacity={0.8} />
      </mesh>

      {/* ---------------- Furniture Blocks & Room Indicators ---------------- */}
      {/* Master Bedroom Suite */}
      <group position={[-1.9, 0.2, -1.2]}>
        <mesh position={[0, 0.15, 0]}>
          <boxGeometry args={[1.6, 0.3, 1.4]} />
          <meshStandardMaterial color={furnitureColor} roughness={0.3} metalness={0.7} />
        </mesh>
        <Text position={[0, 0.8, 0]} fontSize={0.2} color="#F5F1E8">
          MASTER SUITE (18' x 15')
        </Text>
      </group>

      {/* Grand Sky Living Room & Terrace */}
      <group position={[1.4, 0.2, 0.9]}>
        <mesh position={[0, 0.15, 0]}>
          <boxGeometry args={[2.2, 0.25, 1.2]} />
          <meshStandardMaterial color="#B69B65" roughness={0.4} metalness={0.5} />
        </mesh>
        <Text position={[0, 0.8, 0]} fontSize={0.22} color="#F5F1E8">
          SKY SALON & DECK (28' x 16')
        </Text>
      </group>

      {/* Executive Kitchen / Dining */}
      <group position={[1.4, 0.2, -1.5]}>
        <mesh position={[0, 0.15, 0]}>
          <boxGeometry args={[1.8, 0.25, 1.0]} />
          <meshStandardMaterial color="#2E2E2E" />
        </mesh>
        <Text position={[0, 0.7, 0]} fontSize={0.18} color="#A39F97">
          KITCHEN & DINING
        </Text>
      </group>

      {/* Private Sky Balcony Terrace */}
      <mesh position={[0, 0.05, 2.8]}>
        <boxGeometry args={[6.8, 0.1, 0.7]} />
        <meshStandardMaterial color="#B69B65" transparent opacity={0.3} />
      </mesh>
      <Text position={[0, 0.4, 2.8]} fontSize={0.18} color="#B69B65">
        20' PRIVATE SKY TERRACE
      </Text>
    </group>
  );
}

export default function FloorPlan3DViewer({ unitName = "TYPICAL 3BHK RESIDENTIAL SUITE" }) {
  return (
    <div className="w-full h-[450px] sm:h-[550px] relative rounded-none overflow-hidden bg-[#1F1F1F] border border-[#2E2E2E]">
      {/* Overlay Helper Badge */}
      <div className="absolute top-4 left-4 right-4 z-10 flex flex-wrap items-center justify-between gap-3 pointer-events-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-none bg-[#171717]/95 border border-[#2E2E2E] text-[#B69B65] text-xs font-mono uppercase tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-[#B69B65]" />
          <span>LAYOUT MATRIX: {unitName}</span>
        </div>

        <div className="text-[11px] font-mono text-[#77736C] bg-[#171717]/90 px-3 py-1 rounded-none border border-[#2E2E2E]">
          Drag to rotate • Pinch to zoom
        </div>
      </div>

      <Canvas camera={{ position: [0, 6, 7], fov: 45 }}>
        <ambientLight intensity={0.9} />
        <directionalLight position={[10, 15, 10]} intensity={1.5} color="#ffffff" />
        <pointLight position={[-10, 5, -10]} intensity={0.6} color="#B69B65" />
        <spotLight position={[0, 10, 0]} intensity={1.5} color="#F5F1E8" angle={0.8} />

        <FloorPlanGeometry title={unitName} />

        <OrbitControls
          enableZoom={true}
          maxPolarAngle={Math.PI / 2.1}
          minPolarAngle={Math.PI / 6}
        />
      </Canvas>
    </div>
  );
}
