import FeaturedCourses from "@/components/FeaturedCourses";
import FeaturedWebinars from "@/components/FeaturedWebinars";
import HeroSection from "@/components/HeroSection";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { GridBackgroundDemo } from "@/components/ui/grid-background";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { courses } from "../data/music_courses.json";
import { testimonials } from "../data/testimonials.json";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <>
            <HeroSection />
            <FeaturedCourses />
            <StickyScroll content={courses} />
            <GridBackgroundDemo>
                <InfiniteMovingCards
                    items={testimonials}
                    direction={"right"}
                    speed={"normal"}
                />
            </GridBackgroundDemo>
            <FeaturedWebinars />
            <AnimatedTooltip items={courses} />
            <Footer />
        </>
    );
}
