import { Link, NavLink } from "react-router";

const links = [
  { path: "/about-us", title: "Company" },
  { path: "/locations", title: "Locations" },
  { path: "/contact", title: "Contact" },
];

function Navigation({ theme = "dark" }: { theme?: string }) {
  const isDark = theme === "dark";

  return (
    <div
      className={`flex flex-col items-center justify-between tracking-widest md:flex-row ${isDark ? "text-gray-800" : "text-gray-200 md:text-gray-100"}`}
    >
      <Link
        to="/"
        className="mb-10 text-3xl font-semibold text-inherit md:mb-0"
      >
        aestheticecho
      </Link>

      <nav
        className={`${isDark ? "hidden opacity-0 md:block md:opacity-100" : ""}`}
      >
        <ul className="flex flex-col items-center gap-6 text-sm uppercase md:flex-row md:gap-10">
          {links.map((link) => (
            <li key={link.title}>
              <NavLink to={link.path} className="hover:text-peach">
                {link.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
