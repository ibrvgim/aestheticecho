import Button from "../global/Button";

function AwardCard() {
  return (
    <section className="bg-peach relative items-center overflow-hidden rounded-xl bg-[url(../assets/home/desktop/bg-pattern-hero-home.svg)] bg-right-top bg-no-repeat px-10 py-12 text-gray-100 md:flex md:px-24 md:py-20">
      <div className="text-center md:text-left lg:w-1/2">
        <p className="pb-6 text-3xl leading-tight font-medium tracking-wide md:text-4xl lg:text-5xl">
          Award-winning custom designs and digital branding solutions
        </p>

        <p className="mb-7 text-sm tracking-wide md:mb-10 md:text-[17px]">
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, mobile design, and engaging brand
          experiences. Find out more about our services.
        </p>

        <Button path="/about-us">Learn More</Button>
      </div>

      <div className="absolute right-0 -bottom-64 hidden opacity-0 lg:block lg:opacity-100">
        <img
          className="h-full w-full"
          src="/assets/home/desktop/image-hero-phone.webp"
          alt="phone image"
          draggable={false}
        />
      </div>
    </section>
  );
}

export default AwardCard;
