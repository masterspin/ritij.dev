import React from "react";

const clones = [
  {
    name: "Deric Dinu Daniel",
    links: [{ label: "Video", url: "https://deric.dev/" }],
  },
  {
    name: "Pranay Gupta",
    links: [{ label: "Video", url: "https://pranaygupta.dev/" }],
  },
];

const Clones = () => {
  return (
    <div id="clones" className="flex flex-col items-center">
      <h2 className="text-4xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-6xl font-header">
        Clones
      </h2>
      <p className="mt-2 text-center text-lg text-muted-foreground px-4">
        Websites inspired by me.
      </p>
      <ul className="mt-6 w-full max-w-3xl px-4 space-y-6">
        {clones.map((clone) => (
          <li key={clone.name} className="border-b pb-4">
            {/* <p className="mt-1 text-muted-foreground">{clone.description}</p> */}
            {clone.links?.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-2">
                {clone.links.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline text-sm"
                  >
                    {clone.name}
                  </a>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Clones;
