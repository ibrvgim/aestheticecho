import Button from "../global/Button";

function SuccessMessage() {
  return (
    <div className="flex w-full flex-1 flex-col items-center justify-center gap-2 px-10 py-10 text-center text-gray-100 sm:px-24 xl:px-0 xl:py-16 xl:pr-26">
      <img
        src="/assets/contact/desktop/success.webp"
        alt="success image"
        className="mb-4 h-24 w-24"
        draggable={false}
      />
      <p className="mb-4 text-4xl font-medium tracking-wide">
        Thanks for your message!
      </p>
      <p className="mb-6 text-[17px]">
        We will contact you within the next hour. Please make sure to check your
        inbox, including your spam folder, to ensure you don’t miss our message.
        If you do not receive any letter, feel free to contact us for further
        assistance.
      </p>

      <Button path="/">Go Home</Button>
    </div>
  );
}

export default SuccessMessage;
