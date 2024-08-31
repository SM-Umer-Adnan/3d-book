import { Canvas } from "@react-three/fiber";
import { Suspense, useState, useEffect } from "react";
import { Experience } from "./components/Experience";
import { UI } from "./components/UI";
import { ScaleLoader
} from "react-spinners";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 4000); // 2 seconds delay
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <UI />
      {loading && (
        <div className="overlay">
          <div className="spinner-container">
            <ScaleLoader
 color="white" loading={loading} size={80} />
          </div>
        </div>
      )}
      <Canvas
        shadows
        camera={{ position: [-0.5, 1, 4], fov: 45 }}
      >
        <group position-y={0}>
          <Suspense fallback={null}>
            <Experience />
          </Suspense>
        </group>
      </Canvas>
    </>
  );
}

export default App;
