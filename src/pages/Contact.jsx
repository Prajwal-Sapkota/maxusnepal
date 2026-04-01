import ContactInfo from "./Contact/ContactInfo"
import CTA from "./Contact/CTA"
import Hero from "./Contact/Hero"

const Contact = () => {
    return(
        <div className="bg-[#f5feff] overflow-x-hidden">
            <Hero/>
            <ContactInfo/>
            <CTA/>
        </div>
    )
}
export default Contact;