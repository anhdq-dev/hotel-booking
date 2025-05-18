import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const HotelCard = ({ room, index }) => {
  return (
    <Link
      to={"/rooms/" + room._id}
      onClick={() => {
        scrollTo(0, 0);
      }}
      key={room._id}
      className="relative w-full max-w-70 overflow-hidden rounded-xl bg-white text-gray-500/90 shadow-[0px_4px_4px_rgba(0,0,0,0.05)] hover:shadow-blue-200"
    >
      <img src={room.images[0]} alt={room.hotel.name} />
      {index % 2 === 0 && (
        <p className="absolute top-3 left-3 rounded-full bg-white px-3 py-1 text-xs font-medium text-gray-800">
          Best seller
        </p>
      )}
      <div className="p-4 pt-5">
        <div className="flex items-center justify-between">
          <p className="font-playfair text-xl font-medium text-gray-800">
            {room.hotel.name}
          </p>
          <div className="flex items-center gap-1">
            <img src={assets.starIconFilled} alt="" />
            4.5
          </div>
        </div>
        <div className="flex items-center gap-1 text-sm">
          <img src={assets.locationIcon} alt="" />
          <span>{room.hotel.address}</span>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <p>
            <span className="text-xl text-gray-800">
              ${room.pricePerNight}
            </span>
            /night
          </p>
          <button className="cursor-pointer rounded border border-gray-300 px-4 py-2 text-sm font-medium transition-all hover:bg-gray-100">
            Book now
          </button>
        </div>
      </div>
    </Link>
  );
};

export default HotelCard;
