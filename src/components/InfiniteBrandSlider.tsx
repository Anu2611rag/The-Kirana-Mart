const InfiniteBrandSlider = ({ logos }) => {
  return (
    // Outer Container: Hides the content that scrolls off-screen
    <div className="overflow-hidden py-10 bg-white">
      {/* Inner Container: Applies the animation and holds the duplicated content */}
      <div
        // flex and w-max ensure all logos stay in one row
        // animate-infinite-scroll starts the CSS animation
        className="flex gap-8 items-center w-max animate-infinite-scroll"
        style={{ width: "fit-content" }} // Fallback for maximum compatibility
      >
        {/* === CONTENT COPY 1 (Original) === */}
        {logos.map((logo, index) => (
          <div
            key={`original-${index}`}
            className="flex-shrink-0" // Prevents logos from shrinking
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-16 md:h-20 w-auto object-contain transition duration-300"
            />
          </div>
        ))}

        {/* === CONTENT COPY 2 (Duplicate for Seamless Loop) === */}
        {/* The animation scrolls Copy 1 off-screen as Copy 2 scrolls into view */}
        {logos.map((logo, index) => (
          <div
            key={`duplicate-${index}`}
            className="flex-shrink-0"
            aria-hidden="true" // Hide from screen readers since it's a duplicate
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-16 md:h-20 w-auto object-contain transition duration-300 opacity-60 hover:opacity-100"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteBrandSlider;
