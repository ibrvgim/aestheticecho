import Button from "../global/Button";

function ContactCard() {
  return (
    <div className="bg-peach relative z-10 mx-10 mt-20 -mb-20 flex flex-col items-center justify-between gap-7 rounded-xl bg-[url(/assets/shared/desktop/bg-pattern-call-to-action.svg)] bg-cover bg-right bg-no-repeat px-10 py-16 text-white sm:mt-30 md:mt-40 md:flex-row md:gap-15 md:px-14 lg:mx-20 lg:px-20">
      <div className="text-center md:text-left lg:w-[25rem]">
        <p className="mb-4 text-3xl font-medium md:mb-6 md:text-4xl lg:text-5xl">
          Let’s talk about your project
        </p>
        <p className="text-[15px]">
          Ready to take it to the next level? Contact us today and find out how
          our expertise can help your business grow.
        </p>
      </div>

      <Button path="/contact">Get in Touch</Button>
    </div>
  );
}

export default ContactCard;
