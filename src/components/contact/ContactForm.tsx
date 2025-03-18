import { InputsType } from "../../types/types";
import Input from "../global/Input";
import { useForm, SubmitHandler } from "react-hook-form";

function ContactForm({ submittedForm }: { submittedForm: () => void }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InputsType>();

  const onSubmit: SubmitHandler<InputsType> = () => {
    reset();
    submittedForm();
  };

  return (
    <form
      className="flex w-full flex-1 flex-col gap-2 px-10 py-10 sm:px-24 xl:px-0 xl:py-16 xl:pr-26"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        type="text"
        placeholder="Full Name"
        register={register}
        name="fullName"
        error={errors?.fullName?.message}
      />

      <Input
        type="email"
        placeholder="E-mail"
        register={register}
        name="email"
        error={errors?.email?.message}
      />

      <Input
        type="tel"
        placeholder="Mobile Phone"
        register={register}
        name="phone"
        error={errors?.phone?.message}
      />

      <Input
        role="textarea"
        placeholder="Message"
        register={register}
        name="message"
        error={errors?.message?.message}
      />

      <div className="mt-10 self-center sm:self-end">
        <button
          type="submit"
          className="hover:bg-light-peach cursor-pointer rounded-md bg-white px-10 py-2 tracking-wider text-gray-800 transition-colors duration-300 hover:text-white"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
