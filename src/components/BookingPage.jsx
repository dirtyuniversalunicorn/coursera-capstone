import BookingForm from "./BookingForm";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import Navigation from "./Navigation";

export default function BookingPage() {
  return (
    <>
      <Header>
        <Navigation />
      </Header>

      <Main>
        {({ availableTimes, dispatch }) => (
          <section className="booking-section">
            <div className="booking-wrap">
              <h2>Book Now</h2>
              <BookingForm
                availableTimes={availableTimes}
                dispatch={dispatch}
              />
            </div>
          </section>
        )}
      </Main>

      <Footer />
    </>
  );
}
