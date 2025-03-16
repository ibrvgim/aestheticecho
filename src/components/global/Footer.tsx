import { Link } from "react-router";
import Navigation from "./Navigation";
import socialMedia from "../../data/socialMedia";

function Footer({ checkPath }: { checkPath: (value: string) => boolean }) {
  return (
    <footer
      className={`bg-gray-800 px-20 pb-16 ${checkPath("contact") ? "pt-12" : "pt-32"}`}
    >
      <div className="border-b-[1px] border-b-gray-600 pb-8">
        <Navigation theme="light" />
      </div>

      <ul className="flex items-center justify-between pt-10 tracking-wide text-gray-400">
        <li>
          <p className="mb-2 font-bold">aestheticecho GmbH </p>
          <p>Schützengasse 2</p>
          <p>99423 Weimar</p>
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

        <li className="flex items-center gap-5">
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
