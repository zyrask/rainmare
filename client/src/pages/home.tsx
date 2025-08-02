import NorthernLightsBackground from "@/components/northern-lights-background";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ScriptSection from "@/components/script-section";
import CommunitySection from "@/components/community-section";
import YouTubeSection from "@/components/youtube-section";
import ContactSection from "@/components/contact-section";
import FeedbackSection from "@/components/feedback-section";
import CreditsSection from "@/components/credits-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="bg-black text-white font-inter overflow-x-hidden relative">
      <NorthernLightsBackground />
      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        <ScriptSection />
        <CommunitySection />
        <YouTubeSection />
        <ContactSection />
        <FeedbackSection />
        <CreditsSection />
        <Footer />
      </div>
    </div>
  );
}
