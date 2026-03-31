import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, Float, MeshDistortMaterial, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

function ChairModel({ autoRotate = false }) {
  const groupRef = useRef()
  const glowRef = useRef()
  
  useFrame((state) => {
    if (autoRotate && groupRef.current) {
      groupRef.current.rotation.y += 0.005
    }
    if (glowRef.current) {
      glowRef.current.intensity = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.3
    }
  })
  
  return (
    <group ref={groupRef} position={[0, -1, 0]} scale={0.8}>
      {/* Main Seat */}
      <mesh position={[0, 0.8, 0]} castShadow>
        <boxGeometry args={[1.5, 0.3, 1.2]} />
        <meshStandardMaterial color="#1a1a2e" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Seat Cushion */}
      <mesh position={[0, 1, 0]} castShadow>
        <boxGeometry args={[1.3, 0.15, 1]} />
        <meshStandardMaterial color="#2d2d44" metalness={0.3} roughness={0.7} />
      </mesh>
      
      {/* Back Rest */}
      <mesh position={[0, 1.6, -0.4]} rotation={[-0.15, 0, 0]} castShadow>
        <boxGeometry args={[1.4, 1.4, 0.2]} />
        <meshStandardMaterial color="#1a1a2e" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Headrest */}
      <mesh position={[0, 2.4, -0.3]} rotation={[-0.2, 0, 0]} castShadow>
        <boxGeometry args={[0.8, 0.5, 0.2]} />
        <meshStandardMaterial color="#2d2d44" metalness={0.3} roughness={0.7} />
      </mesh>
      
      {/* Left Armrest */}
      <mesh position={[-0.85, 1.1, 0]} castShadow>
        <boxGeometry args={[0.15, 0.5, 0.8]} />
        <meshStandardMaterial color="#1a1a2e" metalness={0.9} roughness={0.1} />
      </mesh>
      
      {/* Right Armrest */}
      <mesh position={[0.85, 1.1, 0]} castShadow>
        <boxGeometry args={[0.15, 0.5, 0.8]} />
        <meshStandardMaterial color="#1a1a2e" metalness={0.9} roughness={0.1} />
      </mesh>
      
      {/* Base/Pedestal */}
      <mesh position={[0, 0.2, 0]} castShadow>
        <cylinderGeometry args={[0.4, 0.5, 0.4, 32]} />
        <meshStandardMaterial color="#0f0f1a" metalness={0.9} roughness={0.1} />
      </mesh>
      
      {/* Base Ring - Glowing */}
      <mesh position={[0, 0.05, 0]}>
        <torusGeometry args={[0.5, 0.03, 16, 100]} />
        <meshStandardMaterial color="#00f0ff" emissive="#00f0ff" emissiveIntensity={2} />
      </mesh>
      
      {/* PC Unit in Back */}
      <mesh position={[0, 1.3, -0.5]} castShadow>
        <boxGeometry args={[1.2, 0.8, 0.15]} />
        <meshStandardMaterial color="#0a0a15" metalness={0.95} roughness={0.05} />
      </mesh>
      
      {/* Screen on PC Unit */}
      <mesh position={[0, 1.35, -0.41]}>
        <planeGeometry args={[1, 0.5]} />
        <meshStandardMaterial color="#001a1a" emissive="#00f0ff" emissiveIntensity={0.5} />
      </mesh>
      
      {/* Side Screens - Left */}
      <mesh position={[-0.9, 1.5, -0.1]} rotation={[0, 0.3, 0]}>
        <planeGeometry args={[0.4, 0.3]} />
        <meshStandardMaterial color="#001a1a" emissive="#ff00ff" emissiveIntensity={0.3} />
      </mesh>
      
      {/* Side Screens - Right */}
      <mesh position={[0.9, 1.5, -0.1]} rotation={[0, -0.3, 0]}>
        <planeGeometry args={[0.4, 0.3]} />
        <meshStandardMaterial color="#001a1a" emissive="#a855f7" emissiveIntensity={0.3} />
      </mesh>
      
      {/* Massage Nodes - Left */}
      <mesh position={[-0.5, 1.4, -0.25]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color="#ff00ff" emissive="#ff00ff" emissiveIntensity={1} />
      </mesh>
      <mesh position={[-0.5, 1.2, -0.25]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color="#ff00ff" emissive="#ff00ff" emissiveIntensity={1} />
      </mesh>
      <mesh position={[-0.5, 1.0, -0.25]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color="#ff00ff" emissive="#ff00ff" emissiveIntensity={1} />
      </mesh>
      
      {/* Massage Nodes - Right */}
      <mesh position={[0.5, 1.4, -0.25]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color="#00f0ff" emissive="#00f0ff" emissiveIntensity={1} />
      </mesh>
      <mesh position={[0.5, 1.2, -0.25]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color="#00f0ff" emissive="#00f0ff" emissiveIntensity={1} />
      </mesh>
      <mesh position={[0.5, 1.0, -0.25]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color="#00f0ff" emissive="#00f0ff" emissiveIntensity={1} />
      </mesh>
      
      {/* Movement Wheels/Legs */}
      <mesh position={[-0.4, -0.1, -0.4]} rotation={[0.3, 0, 0]}>
        <cylinderGeometry args={[0.08, 0.08, 0.3, 16]} />
        <meshStandardMaterial color="#333" metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[0.4, -0.1, -0.4]} rotation={[0.3, 0, 0]}>
        <cylinderGeometry args={[0.08, 0.08, 0.3, 16]} />
        <meshStandardMaterial color="#333" metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[-0.4, -0.1, 0.4]} rotation={[-0.3, 0, 0]}>
        <cylinderGeometry args={[0.08, 0.08, 0.3, 16]} />
        <meshStandardMaterial color="#333" metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[0.4, -0.1, 0.4]} rotation={[-0.3, 0, 0]}>
        <cylinderGeometry args={[0.08, 0.08, 0.3, 16]} />
        <meshStandardMaterial color="#333" metalness={0.9} roughness={0.1} />
      </mesh>
      
      {/* Hover Glow Effect */}
      <pointLight ref={glowRef} position={[0, -0.3, 0]} color="#00f0ff" intensity={1} distance={3} />
      
      {/* Neon Strip Lights */}
      <mesh position={[0, 0.95, 0.6]}>
        <boxGeometry args={[1.4, 0.02, 0.02]} />
        <meshStandardMaterial color="#00f0ff" emissive="#00f0ff" emissiveIntensity={3} />
      </mesh>
      <mesh position={[0, 0.95, -0.6]}>
        <boxGeometry args={[1.4, 0.02, 0.02]} />
        <meshStandardMaterial color="#ff00ff" emissive="#ff00ff" emissiveIntensity={3} />
      </mesh>
    </group>
  )
}

export default function Chair3D(props) {
  return (
    <Canvas shadows dpr={[1, 2]} {...props}>
      <ambientLight intensity={0.3} />
      <spotLight 
        position={[10, 10, 10]} 
        angle={0.15} 
        penumbra={1} 
        intensity={1} 
        castShadow 
        shadow-mapSize={2048}
      />
      <pointLight position={[-10, -10, -10]} color="#a855f7" intensity={0.5} />
      
      <Float
        speed={1.5}
        rotationIntensity={0.2}
        floatIntensity={0.3}
      >
        <ChairModel {...props} />
      </Float>
      
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 2}
        autoRotate={false}
      />
      
      <Environment preset="night" />
    </Canvas>
  )
}
