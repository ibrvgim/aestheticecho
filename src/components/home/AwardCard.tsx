import Button from "../global/Button";

function AwardCard() {
  return (
    <section className="bg-peach relative flex h-[35rem] items-center overflow-hidden rounded-xl bg-[url(../assets/home/desktop/bg-pattern-hero-home.svg)] bg-right-top bg-no-repeat px-20 text-gray-100">
      <div className="w-1/2">
        <p className="pb-4 text-5xl leading-tight font-medium tracking-wide">
          Award-winning custom designs and digital branding solutions
        </p>

        <p className="mb-10 text-[17px] tracking-wide">
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, mobile design, and engaging brand
          experiences. Find out more about our services.
        </p>

        <Button path="/about">Learn More</Button>
      </div>

      <div className="absolute right-0 -bottom-64">
        <img
          src="/assets/home/desktop/image-hero-phone.png"
          draggable={false}
        />
      </div>
    </section>
  );
}

export default AwardCard;
