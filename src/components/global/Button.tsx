import { Link } from "react-router";

function Button({
  path,
  children,
}: {
  path: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      to={path}
      className="hover:bg-light-peach inline-block rounded-md bg-white px-10 py-2 text-lg tracking-wider text-gray-800 transition-colors duration-300 hover:text-white"
    >
      {children}
    </Link>
  );
}

export default Button;
