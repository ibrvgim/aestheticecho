import { useState } from "react";
import ContactForm from "../components/contact/ContactForm";
import CardContainer from "../components/global/CardContainer";
import CountriesCard from "../components/global/CountriesCard";
import Metadata from "../components/global/Metadata";
import useMetadata from "../hooks/useMetadata";
import SuccessMessage from "../components/contact/SuccessMessage";

function Contact() {
  const [meta] = useMetadata();
  const [submitted, setSubmitted] = useState(false);

  console.log(submitted);

  function submittedForm() {
    setSubmitted(true);
  }

  return (
    <section>
      <Metadata metadata={meta} />

      <CardContainer
        title="Contact Us"
        description="Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line."
      >
        {submitted ? (
          <SuccessMessage />
        ) : (
          <ContactForm submittedForm={submittedForm} />
        )}
      </CardContainer>
      <CountriesCard />
    </section>
  );
}

export default Contact;
