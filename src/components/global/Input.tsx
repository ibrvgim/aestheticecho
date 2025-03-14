function Input({
  type,
  placeholder,
  role = "input",
}: {
  type?: string;
  placeholder: string;
  role?: "input" | "textarea";
}) {
  const style =
    "border-b-[1px] border-b-gray-50 px-4 py-3 tracking-wide text-white outline-none focus:shadow-[inset_0_-2px_0_0_rgba(255,255,255,1)] transition-all duration-300";

  if (role === "textarea") {
    return (
      <textarea
        placeholder={placeholder}
        className={`h-32 resize-none ${style}`}
      />
    );
  } else
    return <input type={type} placeholder={placeholder} className={style} />;
}

export default Input;
