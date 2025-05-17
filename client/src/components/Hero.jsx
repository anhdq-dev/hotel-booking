import FormBooking from "./FormBooking";

const Hero = () => {
  return (
    <div className="bg-url flex h-screen flex-col items-start justify-center bg-cover bg-center bg-no-repeat px-6 text-white md:px-16 lg:px-24 xl:px-32">
      <p className="mt-20 rounded-full bg-[#49B9FF]/50 px-4 py-1">
        The Ultimate Hotel Experience
      </p>
      <h1 className="font-playfair mt-4 max-w-xl text-2xl md:text-5xl md:font-extrabold">
        Discover Your Perfect Gateway Destination
      </h1>
      <p className="mt-2 max-w-130 text-sm md:text-base">
        Unparalleled luxury and comfort await at the world's
        most exclusive hotels and resorts. Start your
        journey today.
      </p>
      <FormBooking />
    </div>
  );
};

export default Hero;
