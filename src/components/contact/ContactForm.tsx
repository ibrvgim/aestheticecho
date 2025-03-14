import Input from "../global/Input";

function ContactForm() {
  return (
    <div className="bg-peach flex items-center gap-32 overflow-hidden rounded-xl bg-[url(./assets/contact/desktop/bg-pattern-hero-desktop.svg)] bg-left-bottom bg-no-repeat px-26 py-16">
      <div className="flex-1 text-gray-100">
        <p className="mb-8 text-5xl font-medium">Contact Us</p>
        <p className="tracking-wide">
          Ready to take it to the next level? Let’s talk about your project or
          idea and find out how we can help your business grow. If you are
          looking for unique digital experiences that’s relatable to your users,
          drop us a line.
        </p>
      </div>

      <form className="flex flex-1 flex-col gap-2">
        <Input type="text" placeholder="Full Name" />
        <Input type="email" placeholder="E-mail" />
        <Input type="tel" placeholder="Mobile Phone" />
        <Input role="textarea" placeholder="Message" />

        <div className="mt-10 self-end">
          <button
            type="submit"
            className="hover:bg-light-peach cursor-pointer rounded-md bg-white px-10 py-2 tracking-wider text-gray-800 transition-colors duration-300 hover:text-white"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
