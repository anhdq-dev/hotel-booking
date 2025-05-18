import { assets, exclusiveOffers } from "../assets/assets";
import Title from "./Title";
const ExclusiveOffers = () => {
  return (
    <div className="flex flex-col items-center px-6 pt-20 pb-32 md:px-16 lg:px-24 xl:px-32">
      <div className="flex w-full flex-col items-center justify-between md:flex-row">
        <Title
          align="left"
          title="Exclusive Offers"
          subTitle="Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories."
        />
        <button className="group flex cursor-pointer items-center gap-2 font-medium max-md:mt-12">
          View All Offers
          <img
            src={assets.arrowIcon}
            alt=""
            className="transition-all group-hover:translate-x-1"
          />
        </button>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {exclusiveOffers.map((item) => (
          <div
            key={item}
            className="group relative flex flex-col items-start justify-between gap-1 rounded-xl bg-cover bg-center bg-no-repeat px-4 pt-12 text-white md:pt-18"
            style={{
              backgroundImage: `url(${item.image})`,
            }}
          >
            <p className="absolute top-4 left-4 rounded-full bg-white px-3 py-1 text-xs font-medium text-gray-800">
              {item.priceOff}% OFF
            </p>
            <div className="">
              <p className="font-playfair text-2xl font-medium">
                {item.title}
              </p>
              <p>{item.description}</p>
              <p className="mt-3 text-xs text-white/70">
                Expires {item.expiryDate}
              </p>
            </div>
            <button className="mt-4 mb-5 flex cursor-pointer items-center gap-2 font-medium">
              View Offers
              <img
                src={assets.arrowIcon}
                alt=""
                className="invert transition-all group-hover:translate-x-1"
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExclusiveOffers;
