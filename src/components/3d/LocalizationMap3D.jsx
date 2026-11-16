import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Float } from '@react-three/drei';
import * as THREE from 'three';

const SITES = [
  { id: 'sola', name: 'SOLA CORRIDOR', coords: [0, 0.4, 0], color: '#B69B65', desc: 'Science City Road Commercial Corridor' },
  { id: 'naranpura', name: 'NARANPURA', coords: [-2.2, 0.3, -1.5], color: '#D5D1C8', desc: 'Sarjan Era Commercial Tower' },
  { id: 'khoraj', name: 'KHORAJ', coords: [2.5, 0.3, -2.0], color: '#A39F97', desc: 'Shashvat Symphony Mixed-Use' },
  { id: 'thaltej', name: 'THALTEJ', coords: [-1.8, 0.3, 1.8], color: '#B69B65', desc: 'Anand Avyam Luxury Villa Estates' },
];

function WireframeMapNodes({ selectedSite, setSelectedSite }) {
  const mapRef = useRef();

  useFrame((state) => {
    if (mapRef.current) {
      mapRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group ref={mapRef}>
      {/* 3D Wireframe Terrain Grid */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.2, 0]}>
        <planeGeometry args={[12, 12, 24, 24]} />
        <meshBasicMaterial color="#2E2E2E" wireframe transparent opacity={0.3} />
      </mesh>

      {/* Outer Boundary Ring */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.1, 0]}>
        <ringGeometry args={[4.8, 5.0, 32]} />
        <meshBasicMaterial color="#B69B65" transparent opacity={0.2} />
      </mesh>

      {/* Connecting Vector Lines */}
      {SITES.map((site, idx) => (
        <line key={`line-${idx}`}>
          <bufferGeometry
            attach="geometry"
            onUpdate={(self) => {
              self.setFromPoints([
                new THREE.Vector3(0, 0.4, 0),
                new THREE.Vector3(site.coords[0], site.coords[1], site.coords[2])
              ]);
            }}
          />
          <lineBasicMaterial color="#B69B65" linewidth={1} transparent opacity={0.4} />
        </line>
      ))}

      {/* Interactive Site Location Pins */}
      {SITES.map((site) => {
        const isSelected = selectedSite?.id === site.id;
        return (
          <group
            key={site.id}
            position={site.coords}
            onClick={(e) => {
              e.stopPropagation();
              setSelectedSite(site);
            }}
          >
            {/* Pin Beacon */}
            <mesh position={[0, 0.4, 0]}>
              <sphereGeometry args={[isSelected ? 0.32 : 0.2, 16, 16]} />
              <meshBasicMaterial color={isSelected ? "#F5F1E8" : site.color} />
            </mesh>

            {/* Vertical Marker Beam */}
            <mesh position={[0, 0.2, 0]}>
              <cylinderGeometry args={[0.03, 0.03, 0.8, 8]} />
              <meshStandardMaterial color={site.color} metalness={0.8} />
            </mesh>

            {/* 3D Label Text */}
            <Float speed={1.5} rotationIntensity={0.05} floatIntensity={0.1}>
              <Text
                position={[0, 0.9, 0]}
                fontSize={0.2}
                color={isSelected ? "#F5F1E8" : "#A39F97"}
                anchorX="center"
                anchorY="bottom"
              >
                {site.name}
              </Text>
            </Float>
          </group>
        );
      })}
    </group>
  );
}

export default function LocalizationMap3D() {
  const [selectedSite, setSelectedSite] = useState(SITES[0]);

  return (
    <div className="w-full h-[420px] sm:h-[500px] relative rounded-none overflow-hidden bg-white border border-[#E6E2D8]">
      {/* Top Helper Badge */}
      <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-2 px-3.5 py-1 rounded-none bg-white/95 border border-[#E6E2D8] text-[#B69B65] text-xs font-mono uppercase">
        <span className="w-1.5 h-1.5 rounded-full bg-[#B69B65]" />
        <span>LOCALIZATION COORDINATES: Select pins to inspect</span>
      </div>

      {/* Selected Site Details Overlay */}
      {selectedSite && (
        <div className="absolute bottom-4 left-4 right-4 z-10 p-4 rounded-none bg-white/95 border border-[#E6E2D8] space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono uppercase tracking-widest text-[#B69B65] font-bold">
              {selectedSite.name}
            </span>
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: selectedSite.color }} />
          </div>
          <p className="text-xs text-[#5C5852] font-light">{selectedSite.desc}</p>
        </div>
      )}

      <Canvas camera={{ position: [0, 5, 7], fov: 50 }}>
        <ambientLight intensity={0.9} />
        <directionalLight position={[10, 15, 10]} intensity={1.5} color="#ffffff" />
        <pointLight position={[-10, 5, -10]} intensity={0.8} color="#B69B65" />

        <WireframeMapNodes selectedSite={selectedSite} setSelectedSite={setSelectedSite} />

        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2.2} minPolarAngle={Math.PI / 6} />
      </Canvas>
    </div>
  );
}
