import { Link } from "react-router";

function AwardCard() {
  return (
    <section className="bg-peach relative my-16 flex h-[35rem] items-center overflow-hidden rounded-xl bg-[url(./assets/home/desktop/bg-pattern-hero-home.svg)] bg-right-top bg-no-repeat px-20 text-gray-100">
      <div className="w-1/2">
        <p className="pb-4 text-5xl leading-tight font-medium tracking-wide">
          Award-winning custom designs and digital branding solutions
        </p>

        <p className="text-[17px] tracking-wide">
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, mobile design, and engaging brand
          experiences. Find out more about our services.
        </p>

        <Link
          to="/about"
          className="hover:bg-light-peach mt-8 inline-block rounded-md bg-white px-10 py-2 text-lg tracking-wider text-gray-800 transition-colors duration-300 hover:text-white"
        >
          Learn More
        </Link>
      </div>

      <div className="absolute right-0 -bottom-64">
        <img
          src="./assets/home/desktop/image-hero-phone.png"
          draggable={false}
        />
      </div>
    </section>
  );
}

export default AwardCard;
