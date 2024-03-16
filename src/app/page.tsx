import FearuredCourses from "@/components/FearuredCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import TestimonialCards from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChoseUs from "@/components/WhyChoseUs";

export default function Home() {
  return (
   <main>
    <HeroSection/>
    <FearuredCourses/>
    <WhyChoseUs/>
    <TestimonialCards/>
    <UpcomingWebinars/>
    <Instructors/>
    
    <Footer/>
   </main>
  )
}
