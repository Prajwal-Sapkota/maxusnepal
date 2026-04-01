
import VehicleListing from "./Vehicles/VehicleListing";

const Vehicles = () => {
    

    return (
        <div className="bg-[#1e2125] min-h-screen selection:bg-[#88d958] selection:text-[#1e2125]">
            
            <VehicleListing/>

            {/* Background Texture Overlay (Fixed) */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.015] z-[1]" 
                 style={{ backgroundImage: `url('/images/noise-texture.png')` }} />
        </div>
    );
};

export default Vehicles;