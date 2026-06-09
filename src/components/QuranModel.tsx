import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Center, OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";

function QuranBook() {
  const { scene } = useGLTF("/models/quran-book.glb");
  const groupRef = useRef<THREE.Group | null>(null);
  const elapsedRef = useRef(0);

  const clonedScene = useMemo(() => {
    const clone = scene.clone(true);

    clone.traverse((child) => {
      const mesh = child as THREE.Mesh;

      if (mesh.isMesh) {
        mesh.castShadow = false;
        mesh.receiveShadow = false;
        mesh.frustumCulled = true;
      }
    });

    return clone;
  }, [scene]);

  useFrame((_, delta) => {
    if (!groupRef.current) return;

    elapsedRef.current += delta;

    groupRef.current.rotation.y += delta * 0.12;
    groupRef.current.position.y = Math.sin(elapsedRef.current * 0.8) * 0.04;
  });

  return (
    <Center>
      <group ref={groupRef} scale={4.5}>
        <primitive
          object={clonedScene}
          dispose={null}
          rotation={[Math.PI / 2, 0, 0]}
          position={[0, 0, 0]}
        />
      </group>
    </Center>
  );
}

export default function QuranModel() {
  return (
    <div className="relative h-[340px] w-full overflow-hidden rounded-[28px] bg-transparent sm:h-[420px] md:h-[500px] lg:h-[560px]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.16),transparent_58%)]" />

      <Canvas
        dpr={[1, 1.25]}
        shadows={false}
        camera={{
          position: [0, 0.35, 3.15],
          fov: 30,
          near: 0.1,
          far: 100,
        }}
        gl={{
          antialias: false,
          alpha: true,
          powerPreference: "high-performance",
          preserveDrawingBuffer: false,
          stencil: false,
          depth: true,
        }}
        performance={{ min: 0.5 }}
        onCreated={({ gl }) => {
          gl.setClearColor("#000000", 0);
        }}
      >
        <ambientLight intensity={1.7} />
        <directionalLight position={[3, 4, 5]} intensity={2.4} />
        <directionalLight position={[-3, 2, -4]} intensity={0.8} />

        <Suspense fallback={null}>
          <QuranBook />
        </Suspense>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableDamping
          dampingFactor={0.08}
          rotateSpeed={0.35}
        />
      </Canvas>
    </div>
  );
}

useGLTF.preload("/models/quran-book.glb");