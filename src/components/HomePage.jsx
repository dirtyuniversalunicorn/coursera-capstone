import AboutSection from "./AboutSection";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Main from "./Main";
import Navigation from "./Navigation";
import Specials from "./Specials";
import Testimonials from "./Testimonials";

export default function HomePage() {
  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <Main>
        {({ availableTimes, dispatch }) => (
          <>
            <Hero />
            <Specials />
            <Testimonials />
            <AboutSection />
          </>
        )}
      </Main>
      <Footer />
    </>
  );
}
