import CompanyProfile from "./About/CompanyProfile"
import Hero from "./About/Hero"
import Milestones from "./About/Milestone"

const About = () => {
    return (
        <div className="bg-[#f5feff] overflow-x-hidden">
      <Hero />
       <Milestones/>
      <CompanyProfile />
     
    </div>
    )
}
export default About