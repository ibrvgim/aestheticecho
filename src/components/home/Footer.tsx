import { Link } from "react-router";
import Navigation from "../global/Navigation";
import socialMedia from "../../data/socialMedia";

function Footer() {
  return (
    <footer className="bg-gray-800 px-20 pt-32 pb-14">
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
              <img src={social.image} />
            </Link>
          ))}
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
