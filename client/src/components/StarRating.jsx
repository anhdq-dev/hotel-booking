import { Star } from "lucide-react";
import { assets } from "../assets/assets";

const StarRating = ({ rating = 4 }) => {
  return (
    <>
      {Array(5)
        .fill(0)
        .map((_, index) => (
          <img
            src={
              rating > index
                ? assets.starIconFilled
                : assets.starIconOutlined
            }
            alt=""
            className="h-4 w-4"
            key={index}
          />
        ))}
    </>
  );
};

export default StarRating;
