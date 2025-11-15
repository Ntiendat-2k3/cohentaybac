import Container from "../components/layout/Container";
import HeroSection from "../components/HeroSection";
import IntroSection from "../components/IntroSection";
import WhyJoinSection from "../components/WhyJoinSection";
import ScheduleSection from "../components/ScheduleSection";
import GuestSection from "../components/GuestSection";
import TalkshowSection from "../components/TalkshowSection";
import SeatmapSection from "../components/SeatmapSection";
import RegistrationSection from "../components/RegistrationSection";
import LocationSection from "../components/LocationSection";
import SponsorSection from "../components/SponsorSection";

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <Container>
        <IntroSection />
        <WhyJoinSection />
        <ScheduleSection />
        <GuestSection />
        <TalkshowSection />
        <SeatmapSection />
        <RegistrationSection />
        <LocationSection />
        <SponsorSection />
      </Container>
    </>
  );
}
