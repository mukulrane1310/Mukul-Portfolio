import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Line } from '@react-three/drei'

const nodes = [
  // Documents
  [-2.2, 1.5, 0],
  [-2.2, 0.5, 0.2],
  [-2.2, -0.5, -0.1],
  [-2.2, -1.5, 0.1],

  // Vector space
  [-0.7, 1.2, 0.3],
  [-0.5, 0, -0.2],
  [-0.7, -1.2, 0.2],

  // Retrieval
  [0.8, 0, 0],

  // LLM
  [1.8, 0, 0.2],

  // Supporting nodes
  [0.2, 1.6, -0.3],
  [0.2, -1.6, 0.1],
]

const connections = [
  // Documents → Vector Space
  [0, 4],
  [0, 5],
  [1, 4],
  [1, 5],
  [1, 6],
  [2, 5],
  [2, 6],
  [3, 5],
  [3, 6],

  // Vector Space → Retrieval
  [4, 7],
  [5, 7],
  [6, 7],

  // Supporting connections
  [4, 9],
  [5, 9],
  [5, 10],
  [6, 10],

  // Retrieval → LLM
  [7, 8],
]

function Node({ position, size = 0.065 }) {
  return (
    <mesh position={position}>
      <sphereGeometry args={[size, 16, 16]} />

      <meshBasicMaterial
        color="#00E5FF"
        transparent
        opacity={0.75}
      />
    </mesh>
  )
}

function KnowledgeGraph() {
  const groupRef = useRef()

  useFrame((state) => {
    if (!groupRef.current) return

    groupRef.current.rotation.y =
      Math.sin(state.clock.elapsedTime * 0.3) * 0.15

    groupRef.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.22) * 0.05

    groupRef.current.position.x =
      state.pointer.x * 0.12

    groupRef.current.position.y =
      state.pointer.y * 0.06
  })

  return (
    <group ref={groupRef}>
      {connections.map(([start, end], index) => (
        <Line
          key={index}
          points={[nodes[start], nodes[end]]}
          color="#00E5FF"
          lineWidth={0.6}
          transparent
          opacity={0.3}
        />
      ))}

      {nodes.map((position, index) => (
        <Node
          key={index}
          position={position}
          size={index === 7 || index === 8 ? 0.095 : 0.055}
        />
      ))}
    </group>
  )
}

function NeuralNetwork() {
  return (
    <div className="pointer-events-none absolute inset-y-0 right-0 z-0 w-[60%] opacity-60">
      <Canvas
        camera={{
          position: [0, 0, 7],
          fov: 45,
        }}
        dpr={[1, 1.5]}
      >
        <KnowledgeGraph />
      </Canvas>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,transparent_5%,rgba(11,15,26,0.35)_45%,#0B0F1A_82%)]" />
    </div>
  )
}

export default NeuralNetwork