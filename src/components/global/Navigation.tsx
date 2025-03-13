import { Link, NavLink } from "react-router";

const links = [
  { path: "/about", title: "Company" },
  { path: "/locations", title: "Locations" },
  { path: "/contact", title: "Contact" },
];

function Navigation() {
  return (
    <div className="flex items-center justify-between tracking-widest text-gray-800">
      <Link to="/" className="text-3xl font-semibold text-inherit">
        aestheticecho
      </Link>

      <nav>
        <ul className="flex items-center gap-10 text-sm text-gray-700 uppercase">
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
