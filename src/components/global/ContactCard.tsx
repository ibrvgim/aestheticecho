import Button from "../global/Button";

function ContactCard() {
  return (
    <section className="bg-peach relative z-10 mx-20 mt-40 -mb-20 flex items-center justify-between rounded-xl bg-[url(./assets/shared/desktop/bg-pattern-call-to-action.svg)] bg-cover bg-right bg-no-repeat px-20 py-16 text-white">
      <div>
        <p className="mb-6 w-96 text-5xl font-semibold">
          Let’s talk about your project
        </p>
        <p className="w-[35rem]">
          Ready to take it to the next level? Contact us today and find out how
          our expertise can help your business grow.
        </p>
      </div>

      <Button path="/contact">Get in Touch</Button>
    </section>
  );
}

export default ContactCard;
