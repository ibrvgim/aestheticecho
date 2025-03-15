import { useEffect, useRef, useState } from "react";

function Image({
  source,
  smallImage,
  style,
}: {
  source: string;
  smallImage: string;
  style?: string;
}) {
  const imageElement = useRef<HTMLImageElement>(null);
  const [state, setState] = useState(false);

  useEffect(() => {
    function loaded() {
      setState(true);
    }

    const img = imageElement.current;

    if (img) {
      if (img.complete) {
        loaded();
      } else {
        img.addEventListener("load", loaded);
      }
    }

    return () => {
      if (img) {
        img.removeEventListener("load", loaded);
      }
    };
  }, []);

  return (
    <div
      className={`bg-lighter-peach ${style} bg-cover bg-center bg-no-repeat`}
      style={{ backgroundImage: `url(/assets/about/desktop/${smallImage})` }}
    >
      <img
        ref={imageElement}
        src={`/assets/about/desktop/${source}`}
        className={`block h-full w-full object-cover object-center transition-opacity duration-300 ease-in-out ${
          state ? "opacity-100" : "opacity-0"
        }`}
        draggable={false}
        loading="lazy"
        alt=""
      />
    </div>
  );
}

export default Image;
