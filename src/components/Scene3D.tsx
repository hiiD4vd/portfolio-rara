"use client";

import React, { useRef, useState, useEffect, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { MeshTransmissionMaterial, useTexture, Environment, RoundedBox, Html } from "@react-three/drei";
import * as THREE from "three";

// Background Plane that fills the screen with the hero image
function Background() {
  const texture = useTexture("/bg-hero.jpg");
  const { viewport } = useThree();

  return (
    <mesh position={[0, 0, -2]}>
      <planeGeometry args={[viewport.width, viewport.height]} />
      <meshBasicMaterial map={texture} toneMapped={false} />
    </mesh>
  );
}

// The Glass Card
function GlassCard() {
  const mesh = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();

  const isMobile = viewport.width < 5;
  
  // EXACT PIXEL-TO-WORLD MATCH:
  // Camera zoom is 100. So 3.61 world units = 361 pixels.
  const cardWidth = isMobile ? viewport.width * 0.9 : 3.61;
  const cardHeight = isMobile ? cardWidth * (172 / 361) : 1.72;

  // Position at bottom right (assuming standard 1080p-ish viewport where width might be around 10-15 units)
  const paddingX = isMobile ? 0 : 0.8;
  const paddingY = isMobile ? 1.5 : 0.8;
  
  const posX = isMobile ? 0 : (viewport.width / 2) - (cardWidth / 2) - paddingX;
  const posY = isMobile ? (-viewport.height / 2) + (cardHeight / 2) + paddingY : (-viewport.height / 2) + (cardHeight / 2) + paddingY;

  return (
    <mesh ref={mesh} position={[posX, posY, 0]}>
      {/* RoundedBox gives us the nice rounded corners of the card */}
      <RoundedBox args={[cardWidth, cardHeight, 0.05]} radius={0.15} smoothness={4}>
        <MeshTransmissionMaterial
          buffer={undefined}
          transmission={1}
          thickness={0.4}
          roughness={0.02}
          ior={1.2}
          chromaticAberration={0.1}
          anisotropy={0.1}
          distortion={0.1}
          distortionScale={0.1}
          temporalDistortion={0.0}
          clearcoat={1}
          attenuationDistance={0.5}
          attenuationColor="#ffffff"
          color="#ffffff"
        />
      </RoundedBox>
      
      {/* PERFECT ALIGNMENT: The HTML content is now bound to the exact center of the 3D Glass Mesh */}
      <Html center zIndexRange={[100, 0]}>
        <div className="w-[361px] h-[172px] p-5 gap-4 items-center flex rounded-[24px] pointer-events-auto border border-white/20 shadow-[0_30px_60px_rgba(0,0,0,0.4)]">
          <div className="w-[110px] h-[110px] rounded-xl overflow-hidden shrink-0 ml-1 shadow-[0_10px_20px_rgba(0,0,0,0.3)]">
            <img src="/rara.jpg" alt="Rara Farohah" className="w-full h-full object-cover" />
          </div>
          <div className="text-left flex flex-col justify-center">
            <h3 className="font-bold text-white text-[17px] leading-tight mb-1 drop-shadow-md">Kenali Lebih Jauh</h3>
            <p className="text-[11px] text-white/90 leading-tight mb-4 drop-shadow-md pr-2">Unduh Resume (CV) lengkap untuk melihat pencapaian dan rekam jejak.</p>
            <a href="#certificates" className="bg-black text-white text-xs font-bold px-6 py-2.5 rounded-full w-fit hover:scale-105 transition-transform shadow-xl">
              Unduh CV
            </a>
          </div>
        </div>
      </Html>
    </mesh>
  );
}

export default function Scene3D() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 z-0">
      <Canvas orthographic camera={{ position: [0, 0, 5], zoom: 100 }}>
        <Suspense fallback={null}>
          <Environment preset="city" />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Background />
          <GlassCard />
        </Suspense>
      </Canvas>
    </div>
  );
}
