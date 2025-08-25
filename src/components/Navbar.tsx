import { Link } from "react-router-dom";
import images from "../assets/images/images";

const Navbar = () => {
  const leftNavItems = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
  ];

  const rightNavItems = [
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black py-4">
      <div className="mx-auto px-6">
        <ul className="flex items-center justify-center gap-12">
          {leftNavItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-white font-sans hover:text-teal-400 transition-colors text-[20px]"
              >
                {item.label}
              </a>
            </li>
          ))}

          <li className="flex items-center">
            <Link to="/" aria-label="Home">
              <img src={images.Logo} alt="Logo" className="h-[63px] w-[55px]" />
            </Link>
          </li>

          {rightNavItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-white font-sans hover:text-teal-400 transition-colors text-[20px]"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
