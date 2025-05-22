import { useNavigate } from "react-router-dom";
import { assets, facilityIcons, roomsDummyData } from "../assets/assets";
import StarRating from "../components/StarRating";
import { useState } from "react";

const CheckBox = ({ label, selected = false, onChange = () => {} }) => {
  return (
    <label className="mt-2 flex cursor-pointer items-center gap-3 text-sm">
      <input
        type="checkbox"
        checked={selected}
        onChange={(e) => onChange(e.target.checked, label)}
      />
      <span className="font-light select-auto">{label}</span>
    </label>
  );
};
const RadioButton = ({ label, selected = false, onChange = () => {} }) => {
  return (
    <label className="mt-2 flex cursor-pointer items-center gap-3 text-sm">
      <input
        type="radio"
        name="sortOption"
        checked={selected}
        onChange={() => onChange(label)}
      />
      <span className="font-light select-auto">{label}</span>
    </label>
  );
};

const AllRooms = () => {
  const navigate = useNavigate();
  const [openFilters, setOpenFilters] = useState(false);

  const roomTypes = ["Single Bed", "Double Bed", "Luxury Room", "Family Suite"];
  const priceRanges = [
    "0 to 500",
    "500 to 1000",
    "1000 to 2000",
    "2000 to 3000",
  ];
  const sortOptions = [
    "Price Low to High",
    "Price High to Low",
    "Newest First",
  ];
  return (
    <div className="flex flex-col-reverse items-start justify-between pt-28 px-8 md:px-16 md:pt-35 lg:flex-row lg:px-24 xl:px-32">
      <div className="">
        <div className="flex flex-col items-start text-left">
          <h1 className="font-playfair text-4xl md:text-5xl">All Rooms</h1>
          <p className="mt-2 max-w-174 text-sm text-gray-500/90 md:text-base">
            Take advantage of our limited-time offers and special packages to
            enhance your stay and create unforgettable memories.
          </p>
        </div>
        {roomsDummyData.map((room) => (
          <div
            ke
            className="flex flex-col items-start gap-6 border-b border-gray-300 py-10 last:border-0 last:pb-30 md:flex-row"
          >
            <img
              onClick={() => {
                navigate(`/rooms/${room._id}`);
                scrollTo(0, 0);
              }}
              src={room.images[0]}
              alt="hotel-image"
              title="View Room Details"
              className="max-h-65 cursor-pointer rounded-xl object-cover shadow-lg md:w-1/2"
            />
            <div className="flex flex-col gap-2 md:w-1/2">
              <p className="text-gray-500">{room.hotel.city}</p>
              <p
                onClick={() => {
                  navigate(`/rooms/${room._id}`);
                  scrollTo(0, 0);
                }}
                className="font-playfair cursor-pointer text-3xl text-gray-800"
              >
                {room.hotel.name}
              </p>
              <div className="flex items-center">
                <StarRating />
                <p className="ml-2">200+ reviews</p>
              </div>
              <div className="mt-2 flex items-center gap-1 text-sm text-gray-500">
                <img src={assets.locationIcon} alt="location-icon" />
                <span>{room.hotel.address}</span>
              </div>
              {/* Room Amenities */}
              <div className="mt-3 mb-6 flex flex-wrap items-center gap-4">
                {room.amenities.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 rounded-lg bg-[#F5F5FF]/70 px-3 py-2"
                  >
                    <img src={facilityIcons[item]} alt="" className="h-5 w-5" />
                    <p className="text-xs">{item}</p>
                  </div>
                ))}
              </div>
              {/* Room Price per Night */}
              <p className="text-xl font-medium text-gray-700">
                ${room.pricePerNight} /night
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* Filters */}
      <div className="w-80 border border-gray-300 bg-white text-gray-600 max-lg:mb-8 min-lg:mt-16">
        <div
          className={`flex items-center justify-between border-gray-300 px-5 py-3 min-lg:border-b ${openFilters && "border-b"}`}
        >
          <p className="text-base font-medium text-gray-800">Filters</p>
          <div className="cursor-pointer text-xs">
            <span
              onClick={() => setOpenFilters(!openFilters)}
              className="lg:hidden"
            >
              {openFilters ? "Hide" : "Show"}
            </span>
            <span className="hidden lg:block">Clear</span>
          </div>
        </div>

        <div
          className={`${openFilters ? "h-auto" : "h-0 lg:h-auto"} overflow-hidden transition-all duration-700`}
        >
          <div className="px-5 pt-5">
            <p className="pb-2 font-medium text-gray-800">Popular filters</p>
            {roomTypes.map((room, index) => (
              <CheckBox key={index} label={room} />
            ))}
          </div>
          <div className="px-5 pt-5">
            <p className="pb-2 font-medium text-gray-800">Price Range</p>
            {priceRanges.map((range, index) => (
              <CheckBox key={index} label={`$ ${range}`} />
            ))}
          </div>
          <div className="px-5 pt-5 pb-7">
            <p className="pb-2 font-medium text-gray-800">Sort By</p>
            {sortOptions.map((option, index) => (
              <RadioButton key={index} label={option} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllRooms;
