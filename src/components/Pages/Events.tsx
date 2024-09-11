import { events } from "../../constants";
import { EventItem } from "../Event/EventItem";

const Events = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="w-4/5 mx-auto my-10 flex-grow">
        <h1 className="text-4xl font-bold text-white mb-4 text-center">Events</h1>
        <EventItem list={events} />
      </main>
    </div>
  );
};

export default Events;

