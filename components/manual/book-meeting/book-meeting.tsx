import MainHeader from "../header/main-header";
import BookingCalendar from "./booking-calendar";

export default function BookMeeting() {
  return (
    <div className="mx-auto py-12 px-5 md:px-12 max-w-5xl">
      <div className="mb-8">
        <MainHeader
          small=" Book a Meeting"
          big="Pick a date and time, and we'll connect!"
        />
      </div>
      <BookingCalendar />
    </div>
  );
}
