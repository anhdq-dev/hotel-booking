import Title from "./Title";
import { testimonials } from "../assets/assets";
import StarRating from "./StarRating";
const Testimonial = () => {
  const Star = ({ filled }) => (
    <svg
      className="h-4 w-4 text-yellow-400"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 17.25l-6.16 3.73 1.64-7.03L2.5 9.77l7.19-.61L12 2.5l2.31 6.66 7.19.61-5 4.18 1.64 7.03z"
      />
    </svg>
  );
  return (
    <div className="flex flex-col items-center bg-slate-100 px-6 pt-20 pb-32 md:px-6 lg:px-24">
      <Title
        title="What Our Guests Say"
        subTitle="Discover why discerning travelers consistently choose QuickStay for their exclusive and luxurious accommodations around the world."
      />

      <div className="mt-20 flex flex-wrap items-center gap-6">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="rounded-xl bg-white p-6 shadow"
          >
            <div className="flex items-center gap-3">
              <img
                className="h-12 w-12 rounded-full"
                src={testimonial.image}
                alt={testimonial.name}
              />
              <div>
                <p className="font-playfair text-xl">
                  {testimonial.name}
                </p>
                <p className="text-gray-500">
                  {testimonial.address}
                </p>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-1">
              <StarRating />
            </div>
            <p className="mt-4 max-w-90 text-gray-500">
              "{testimonial.review}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
