import AutoNews from "../components/AutoNews"
import BrandDNA from "../components/BrandDNA"
import ChargingNetwork from "../components/ChargingNetwork"
import Ecosystem from "../components/Ecosystem"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Introduction from "../components/Introduction"
import Journey from "../components/Journey"
import Lineup from "../components/Lineup"
import Navbar from "../components/Navbar"
import Testimonial from "../components/Testimonial"

const Home = () => {
    return (
        <div className=" relative overflow-x-hidden">
             <div className="fixed inset-0 pointer-events-none flex justify-between z-30">
                <div className="w-[2px] h-full bg-[#7a7980]/5 ml-10 lg:ml-24"></div>
                <div className="w-[2px] h-full bg-[#7a7980]/5 hidden md:block -ml-1.5"></div>
                <div className="w-[2px] h-full bg-[#7a7980]/5 hidden md:block -mr-1.5"></div>
                <div className="w-[2px] h-full bg-[#7a7980]/5 mr-10 lg:mr-24"></div>
            </div>
            <Navbar/>
            <Hero/>
            
            <Introduction/>

            <Lineup/>
            <BrandDNA/>
            <Ecosystem/>
            <ChargingNetwork/>
            <Journey/>
            <Testimonial/>
            <AutoNews/>
            
            <Footer/>
            
        </div>
    )
}
export default Home