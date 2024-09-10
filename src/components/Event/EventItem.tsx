interface EventItemProps {
  id: number;
  name: string;
  city: string;
  location: string;
  date: string;
  hour: string;
}

export const EventItem = ({ list }: { list: EventItemProps[] }) => {
  return (
    <div className="grid grid-cols-1 mobile:grid-cols-1 tablet:grid-cols-2 lg:grid-cols-3 gap-4">
      {list.map((event) => (
        <div
          key={event.id}
          className="bg-sky-950 sm:w-1/2 md:w-[100%] m-4 p-4 shadow-lg rounded-2xl"
        >
          <h2 className="text-white text-center font-bold text-2xl">
            {event.name}
          </h2>
          <p className="text-white text-center font-semibold text-lg">
            {event.city}
          </p>
          <p className="text-white text-center font-semibold text-lg">
            {event.location}
          </p>
          <p className="text-white text-center font-semibold text-lg">
            {event.date}
          </p>
          <p className="text-white text-center font-semibold text-lg">
            {event.hour}
          </p>
        </div>
      ))}
    </div>
  );
};
