"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Stars } from "@react-three/drei";
import * as THREE from "three";

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 64, 64]} scale={2.5}>
        <MeshDistortMaterial
          color="#6d28d9"
          attach="material"
          distort={0.4}
          speed={1.5}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
}

import React from "react";

class ErrorBoundary extends React.Component<{children: React.ReactNode}, {hasError: boolean}> {
  constructor(props: {children: React.ReactNode}) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-purple-900/20" />
      );
    }
    return this.props.children;
  }
}

export function Hero3D() {
  return (
    <div className="absolute inset-0 z-0 opacity-60">
      <ErrorBoundary>
        <Canvas camera={{ position: [0, 0, 8] }} gl={{ powerPreference: "default" }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1.5} />
          <pointLight position={[-10, -10, -5]} color="#4f46e5" intensity={2} />
          <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
          <AnimatedSphere />
        </Canvas>
      </ErrorBoundary>
    </div>
  );
}
