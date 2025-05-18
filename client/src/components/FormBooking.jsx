import { Calendar, Search } from "lucide-react";
import { assets, cities } from "../assets/assets";

const FormBooking = () => {
  return (
    <form className="mt-8 flex flex-col gap-4 rounded-lg bg-white px-6 py-4 text-gray-500 max-md:mx-auto max-md:items-start md:flex-row">
      <div>
        <div className="flex items-center gap-2">
          <Calendar size={16} />
          <label htmlFor="destinationInput">
            Destination
          </label>
        </div>
        <input
          list="destinations"
          id="destinationInput"
          type="text"
          className="mt-1.5 rounded border border-gray-200 px-3 py-1.5 text-sm outline-none"
          placeholder="Type here"
          required
        />
        <datalist id="destinations">
          {cities.map((city, index) => (
            <option value={city} key={index} />
          ))}
        </datalist>
      </div>

      <div>
        <div className="flex items-center gap-2">
          <Calendar size={16} />
          <label htmlFor="checkIn">Check in</label>
        </div>
        <input
          id="checkIn"
          type="date"
          className="mt-1.5 rounded border border-gray-200 px-3 py-1.5 text-sm outline-none"
        />
      </div>

      <div>
        <div className="flex items-center gap-2">
          <Calendar size={16} />
          <label htmlFor="checkOut">Check out</label>
        </div>
        <input
          id="checkOut"
          type="date"
          className="mt-1.5 rounded border border-gray-200 px-3 py-1.5 text-sm outline-none"
        />
      </div>

      <div className="flex max-md:items-center max-md:gap-2 md:flex-col">
        <label htmlFor="guests">Guests</label>
        <input
          min={1}
          max={4}
          id="guests"
          type="number"
          className="mt-1.5 max-w-16 rounded border border-gray-200 px-3 py-1.5 text-sm outline-none"
          placeholder="0"
        />
      </div>

      <button className="my-auto flex cursor-pointer items-center justify-center gap-1 rounded-md bg-black px-4 py-3 text-white max-md:w-full max-md:py-1">
        <Search size={16} />
        <span>Search</span>
      </button>
    </form>
  );
};

export default FormBooking;
