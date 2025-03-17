import { Link } from "react-router";
import Navigation from "./Navigation";
import socialMedia from "../../data/socialMedia";

function Footer({ checkPath }: { checkPath: (value: string) => boolean }) {
  return (
    <footer
      className={`bg-gray-800 px-10 pb-16 md:px-20 ${checkPath("contact") ? "pt-12" : "pt-32"}`}
    >
      <div className="border-b-[1px] border-b-gray-600 pb-8">
        <Navigation theme="light" />
      </div>

      <ul className="flex flex-col flex-wrap items-center justify-between gap-10 pt-10 text-center tracking-wide text-gray-400 md:flex-row md:gap-x-20 md:gap-y-15 md:text-left lg:gap-y-0">
        <li>
          <p className="mb-2 font-bold">aestheticecho GmbH </p>
          <p>Schwartzkopffstraße 19</p>
          <p>10115 Berlin</p>
        </li>

        <li>
          <p className="mb-2 font-bold">Contacts</p>
          <p>
            <span className="font-semibold">Phone:</span> +49 177 8355576
          </p>
          <p>
            <span className="font-semibold">Mail:</span>{" "}
            contact@aestheticecho.com
          </p>
        </li>

        <li className="mt-5 flex items-center gap-5 md:mt-0">
          {socialMedia.map((social) => (
            <Link to={social.url} key={social.image}>
              <img
                className="h-full w-full"
                src={`/assets/shared/desktop/${social.image}`}
                alt={social.image}
                loading="lazy"
                draggable={false}
              />
            </Link>
          ))}
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
