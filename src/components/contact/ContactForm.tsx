import CardContainer from "../global/CardContainer";
import Input from "../global/Input";

function ContactForm() {
  return (
    <CardContainer
      title="Contact Us"
      description="Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line."
    >
      <form className="flex flex-1 flex-col gap-2 py-16 pr-26">
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
    </CardContainer>
  );
}

export default ContactForm;
