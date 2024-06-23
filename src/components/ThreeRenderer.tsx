import { VRButton, XR, Controllers, RayGrab } from '@react-three/xr';
import { Canvas } from '@react-three/fiber';

interface ThreeRendererProps {
    className: string;
}

function ThreeRenderer({ className }: ThreeRendererProps) {
    return (
        <>
            <VRButton />
            <Canvas className={className}>
                <XR>
                    <Controllers />
                    <RayGrab>
                        <mesh>
                            <boxGeometry />
                            <meshBasicMaterial color="blue" />
                        </mesh>
                    </RayGrab>
                </XR>
            </Canvas>
        </>
    )
}

export default ThreeRenderer;