const Title = ({ title, subTitle, align, font }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center text-center ${align === "left" && "md:items-start md:text-left"}`}
    >
      <h1
        className={`text-4xl md:text-[40px] ${font || "font-playfair"}`}
      >
        {title}
      </h1>
      <p className="mt-2 max-w-174 text-sm text-gray-500/90 md:text-base">
        {subTitle}
      </p>
    </div>
  );
};

export default Title;
