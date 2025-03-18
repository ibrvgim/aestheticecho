import { useEffect, useRef, useState } from "react";

function Image({
  source,
  smallImage,
  style,
  imgStyle = "object-center",
}: {
  source: string;
  smallImage: string;
  style?: string;
  imgStyle?: string;
}) {
  const imageElement = useRef<HTMLImageElement>(null);
  const [state, setState] = useState(false);

  useEffect(() => {
    function loaded() {
      setState(true);
    }

    const img = imageElement.current;
    if (!img) return;

    if (img.complete) {
      loaded();
    } else {
      img.addEventListener("load", loaded);
    }

    return () => {
      if (img) {
        img.removeEventListener("load", loaded);
      }
    };
  }, []);

  return (
    <div
      className={`bg-lighter-peach ${style} bg-cover bg-center bg-no-repeat max-xl:h-[20rem] max-xl:w-full`}
      style={{ backgroundImage: `url(/assets/about/desktop/${smallImage})` }}
    >
      <img
        ref={imageElement}
        src={`/assets/about/desktop/${source}`}
        className={`block h-full w-full object-cover transition-opacity duration-300 ease-in-out ${
          state ? "opacity-100" : "opacity-0"
        } ${imgStyle}`}
        draggable={false}
        loading="lazy"
        alt=""
      />
    </div>
  );
}

export default Image;
