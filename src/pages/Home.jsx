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
        <div className="overflow-x-hidden">
            <Navbar/>
            <Hero/>
            
            <Introduction/>

            <Lineup/>
            <BrandDNA/>
            <Ecosystem/>
            <ChargingNetwork/>
            <Testimonial/>
            <Journey/>
            <Footer/>
        </div>
    )
}
export default Home