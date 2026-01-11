import ConfirmedBooking from "./ConfirmedBooking";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import Navigation from "./Navigation";

export default function ConfirmedBookingPage() {
  return (
    <>
      <Header>
        <Navigation />
      </Header>

      <Main>
        {({ availableTimes, updateTimes }) => (
          <section>
            <div className="wrap">
              <ConfirmedBooking />
            </div>
          </section>
        )}
      </Main>

      <Footer />
    </>
  );
}
