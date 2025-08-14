import LightRays from "@/app/components/LightRays";
import { AppNavbar } from "@/app/components/navbar";

export default function Contacts() {
    return (
        <>
            <div className="w-full min-h-screen flex items-center justify-center">
                <h1 className="font-mono text-9xl font-bold uppercase">
                    Get In Touch!
                </h1>
                {/* <LightRays
        raysOrigin="top-center"
        raysColor="#00ffff"
        raysSpeed={1.5}
        lightSpread={0.8}
        rayLength={1.2}
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={0.1}
        distortion={0.05}
        className="custom-rays"
      /> */}
            </div>
        </>
    );
}
