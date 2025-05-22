import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { assets, facilityIcons, roomsDummyData } from "../assets/assets";
import StarRating from "../components/StarRating";

const RoomDetails = () => {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [mainImage, setMainImage] = useState(null);

  useEffect(() => {
    const room = roomsDummyData.find((room) => room._id === id);
    room && setRoom(room);
    room && setMainImage(room.images[0]);
  }, []);
  return (
    room && (
      <div className="px-4 py-28 md:px-16 md:py-35 lg:px-24 xl:px-32">
        {/* Room Details */}
        <div className="flex flex-col items-start gap-2 md:flex-row md:items-center">
          <h1 className="font-playfair text-3xl md:text-4xl">
            {room.hotel.name} <span className="text-sm">({room.roomType})</span>
          </h1>
          <p className="rounded-full bg-orange-500 px-3 py-1.5 text-xs text-white">
            20% OFF
          </p>
        </div>
        {/* Room Rating */}
        <div className="mt-2 flex items-center gap-1">
          <StarRating />
          <p className="ml-2">200+ reviews</p>
        </div>
        {/* Room Address */}
        <div className="mt-2 flex items-center gap-1 text-gray-500">
          <img src={assets.locationIcon} alt="location-icon" />
          <span>{room.hotel.address}</span>
        </div>
        {/* Room Images */}
        <div className="mt-6 flex flex-col gap-6 lg:flex-row">
          <div className="w-full lg:w-1/2">
            <img
              src={mainImage}
              alt="Room Image"
              className="w-full rounded-xl object-cover shadow-lg"
            />
          </div>
          <div className="grid w-full grid-cols-2 gap-4 lg:w-1/2">
            {room?.images.length > 1 &&
              room.images.map((image, index) => (
                <img
                  onClick={() => setMainImage(image)}
                  src={image}
                  alt="Room Image"
                  key={index}
                  className={`w-full cursor-pointer rounded-xl object-cover shadow-md ${mainImage === image && "outline-3 outline-orange-500"}`}
                />
              ))}
          </div>
        </div>
        {/* Room Highlights */}
        <div className="mt-10 flex flex-col md:flex-row md:justify-between">
          <div className="flex flex-col">
            <h1 className="font-playfair text-3xl md:text-4xl">
              Experience Luxury Like Never Before
            </h1>
            <div className="mt-3 mb-6 flex flex-wrap items-center gap-4">
              {room.amenities.map((item, index) => (
                <div
                  className="flex items-center gap-2 rounded-lg bg-gray-100 px-3 py-2"
                  key={index}
                >
                  <img
                    src={facilityIcons[item]}
                    alt={item}
                    className="h-5 w-5"
                  />
                  <p className="text-xs">{item}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Room Price */}
          <p className="text-2xl font-medium">${room.pricePerNight}</p>
        </div>
      </div>
    )
  );
};

export default RoomDetails;
