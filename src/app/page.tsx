import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import InfiniteMovingCardsDemo from "@/components/InfiniteMovingCardsDemo";
import { Instructors } from "@/components/Instructors";
import { UpcomingWebinars } from "@/components/UpcomingWebinars";
import {WhyChoose} from '@/components/WhyChoose';

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.9] antialiased bg-grid-white">

 <HeroSection/>
 <FeaturedCourses/>
 <WhyChoose/>
 <InfiniteMovingCardsDemo/>
 <UpcomingWebinars/>
<Instructors/>
<Footer/>
    </main>
   
  );
}
