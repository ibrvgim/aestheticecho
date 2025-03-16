import { UseFormRegister } from "react-hook-form";
import { InputsType } from "../../types/types";

function Input({
  type,
  placeholder,
  role = "input",
  error,
  register,
  name,
}: {
  type?: string;
  placeholder: string;
  role?: "input" | "textarea";
  error: string | undefined;
  name: "fullName" | "email" | "phone" | "message";
  register: UseFormRegister<InputsType>;
}) {
  const style =
    "border-b-[1px] border-b-gray-50 px-4 py-3 tracking-wide text-white outline-none focus:shadow-[inset_0_-2px_0_0_rgba(255,255,255,1)] transition-all duration-300";

  const errorMessage = (
    <p className="text-sm font-light tracking-wide text-white lowercase italic">
      {error}
    </p>
  );

  if (role === "textarea") {
    return (
      <div className="relative">
        <textarea
          placeholder={placeholder}
          className={`h-32 w-full resize-none ${style}`}
          {...register(name, {
            required: "field is required",
            minLength: {
              value: 20,
              message: "min. 20 characters",
            },
            maxLength: {
              value: 300,
              message: "max. 300 characters",
            },
          })}
        />

        {error && (
          <div
            className={`absolute right-0 flex items-center justify-center gap-2 ${error.includes("max") ? "-bottom-8" : "bottom-5"}`}
          >
            {errorMessage}
            <Icon />
          </div>
        )}
      </div>
    );
  } else
    return (
      <div className="relative">
        <input
          type={type}
          placeholder={placeholder}
          className={`${style} w-full`}
          {...register(name, {
            required: "field is required",
          })}
          autoComplete="off"
        />

        {error && (
          <div className="absolute top-1/2 right-0 flex -translate-y-1/2 transform items-center justify-center gap-2">
            {errorMessage}
            <Icon />
          </div>
        )}
      </div>
    );
}

function Icon() {
  return (
    <img
      src="/assets/contact/desktop/icon-error.svg"
      alt="error icon"
      className="size-4"
      draggable={false}
    />
  );
}

export default Input;
