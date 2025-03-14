import { Link } from "react-router";

function Button({
  path,
  children,
  style = "secondary",
}: {
  path: string;
  children: React.ReactNode;
  style?: "primary" | "secondary";
}) {
  return (
    <Link
      to={path}
      className={`inline-block rounded-md px-10 py-2 text-lg tracking-wider transition-colors duration-300 ${style === "primary" ? "bg-peach hover:bg-light-peach text-white hover:text-white" : "hover:bg-light-peach bg-white text-gray-800 hover:text-white"}`}
    >
      {children}
    </Link>
  );
}

export default Button;
