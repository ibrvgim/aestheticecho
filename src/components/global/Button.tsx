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
      className={`inline-block min-w-48 rounded-md px-8 py-2 text-center tracking-wider transition-colors duration-300 sm:px-10 sm:py-2 sm:text-lg ${style === "primary" ? "bg-peach hover:bg-light-peach text-white hover:text-white" : "hover:bg-light-peach bg-white text-gray-800 hover:text-white"}`}
    >
      {children}
    </Link>
  );
}

export default Button;
