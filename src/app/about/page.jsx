import Samehero from "@/components/Samehero";
import Section2 from "@/components/Section2";
import FAQSection from "@/components/Section7";
import TestimonialSection from "@/components/Section8";

export default function page() {
    return(
        <>
        <div className="bg-[#FAF8FF]">
        <Samehero text={"About us"}/>
        <Section2/>
        <FAQSection/>
        <TestimonialSection/>
        </div> 
        </>
    )
}