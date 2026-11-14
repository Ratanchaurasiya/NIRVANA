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

  const wallColor = "#38bdf8";
  const floorColor = "#0f172a";
  const furnitureColor = "#d4af37";

  return (
    <group ref={meshGroup} position={[0, -0.5, 0]}>
      {/* ---------------- Floor Slab ---------------- */}
      <mesh position={[0, -0.1, 0]}>
        <boxGeometry args={[7, 0.2, 5]} />
        <meshStandardMaterial color={floorColor} roughness={0.3} metalness={0.7} />
      </mesh>

      {/* Grid Blueprint Lines on Floor */}
      <mesh position={[0, 0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[6.8, 4.8, 14, 10]} />
        <meshBasicMaterial color="#0284c7" wireframe transparent opacity={0.3} />
      </mesh>

      {/* ---------------- Outer Perimeter Walls ---------------- */}
      {/* Back Wall */}
      <mesh position={[0, 0.5, -2.4]}>
        <boxGeometry args={[6.8, 1, 0.15]} />
        <meshStandardMaterial color={wallColor} roughness={0.2} metalness={0.8} transparent opacity={0.85} />
      </mesh>
      {/* Front Wall with Entry Opening */}
      <mesh position={[-2, 0.5, 2.4]}>
        <boxGeometry args={[2.8, 1, 0.15]} />
        <meshStandardMaterial color={wallColor} roughness={0.2} metalness={0.8} transparent opacity={0.85} />
      </mesh>
      <mesh position={[2, 0.5, 2.4]}>
        <boxGeometry args={[2.8, 1, 0.15]} />
        <meshStandardMaterial color={wallColor} roughness={0.2} metalness={0.8} transparent opacity={0.85} />
      </mesh>

      {/* Left & Right Outer Walls */}
      <mesh position={[-3.35, 0.5, 0]}>
        <boxGeometry args={[0.15, 1, 4.9]} />
        <meshStandardMaterial color={wallColor} roughness={0.2} metalness={0.8} transparent opacity={0.85} />
      </mesh>
      <mesh position={[3.35, 0.5, 0]}>
        <boxGeometry args={[0.15, 1, 4.9]} />
        <meshStandardMaterial color={wallColor} roughness={0.2} metalness={0.8} transparent opacity={0.85} />
      </mesh>

      {/* ---------------- Interior Room Partition Walls ---------------- */}
      <mesh position={[-0.5, 0.5, 0]}>
        <boxGeometry args={[0.1, 1, 4.8]} />
        <meshStandardMaterial color="#64748b" transparent opacity={0.7} />
      </mesh>
      <mesh position={[1.4, 0.5, -0.6]}>
        <boxGeometry args={[3.8, 1, 0.1]} />
        <meshStandardMaterial color="#64748b" transparent opacity={0.7} />
      </mesh>

      {/* ---------------- Furniture Blocks & Room Indicators ---------------- */}
      {/* Master Bedroom Suite */}
      <group position={[-1.9, 0.2, -1.2]}>
        <mesh position={[0, 0.15, 0]}>
          <boxGeometry args={[1.6, 0.3, 1.4]} />
          <meshStandardMaterial color={furnitureColor} />
        </mesh>
        <Text position={[0, 0.8, 0]} fontSize={0.2} color="#ffffff">
          MASTER SUITE (18' x 15')
        </Text>
      </group>

      {/* Grand Sky Living Room & Terrace */}
      <group position={[1.4, 0.2, 0.9]}>
        <mesh position={[0, 0.15, 0]}>
          <boxGeometry args={[2.2, 0.25, 1.2]} />
          <meshStandardMaterial color="#38bdf8" />
        </mesh>
        <Text position={[0, 0.8, 0]} fontSize={0.22} color="#f59e0b">
          SKY SALON & DECK (28' x 16')
        </Text>
      </group>

      {/* Executive Kitchen / Dining */}
      <group position={[1.4, 0.2, -1.5]}>
        <mesh position={[0, 0.15, 0]}>
          <boxGeometry args={[1.8, 0.25, 1.0]} />
          <meshStandardMaterial color="#e2e8f0" />
        </mesh>
        <Text position={[0, 0.7, 0]} fontSize={0.18} color="#94a3b8">
          KITCHEN & DINING
        </Text>
      </group>

      {/* Private Sky Balcony Terrace */}
      <mesh position={[0, 0.05, 2.8]}>
        <boxGeometry args={[6.8, 0.1, 0.7]} />
        <meshStandardMaterial color="#f59e0b" transparent opacity={0.5} />
      </mesh>
      <Text position={[0, 0.4, 2.8]} fontSize={0.18} color="#fbbf24">
        20' PRIVATE SKY TERRACE
      </Text>
    </group>
  );
}

export default function FloorPlan3DViewer({ unitName = "TYPICAL 3BHK RESIDENTIAL SUITE" }) {
  return (
    <div className="w-full h-[450px] sm:h-[550px] relative rounded-3xl overflow-hidden glass-panel-gold border border-amber-500/40">
      {/* Overlay Helper Badge */}
      <div className="absolute top-4 left-4 right-4 z-10 flex flex-wrap items-center justify-between gap-3 pointer-events-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy-950/85 backdrop-blur-md border border-amber-500/40 text-amber-300 text-xs font-mono uppercase tracking-wider shadow-lg">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping" />
          <span>3D ARCHITECTURAL LAYOUT: {unitName}</span>
        </div>

        <div className="text-[11px] font-mono text-slate-300 bg-navy-950/80 px-3 py-1.5 rounded-xl border border-slate-800">
          Drag mouse to rotate 360° • Pinch / scroll to zoom
        </div>
      </div>

      <Canvas camera={{ position: [0, 6, 7], fov: 45 }}>
        <ambientLight intensity={0.9} />
        <directionalLight position={[10, 15, 10]} intensity={1.5} color="#ffffff" />
        <pointLight position={[-10, 5, -10]} intensity={1} color="#38bdf8" />
        <spotLight position={[0, 10, 0]} intensity={2} color="#f59e0b" angle={0.8} />

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
