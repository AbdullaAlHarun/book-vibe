
import { Link, NavLink } from "react-router-dom";

const Nav = () => {

  return (
    <div className="navbar bg-base-100 shadow-lg px-4 sm:px-8 fixed z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content gap-4 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-primary font-bold" : "font-bold"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/listedBooks"
              className={({ isActive }) =>
                isActive ? "text-primary font-bold" : "font-bold"
              }
            >
              Listed Book
            </NavLink>

            <NavLink
              to="/ToRead"
              className={({ isActive }) =>
                isActive ? "text-primary font-bold" : "font-bold"
              }
            >
              Pages to Read
            </NavLink>
            <NavLink
              to="/Contact"
              className={({ isActive }) =>
                isActive ? "text-primary font-bold" : "font-bold"
              }
            >
              Contact
            </NavLink>
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost gap-0 font-bold normal-case text-xl text-info"
        >
          Book<span className="text-[#23BE0A]">Bive</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1 gap-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-primary font-bold btn btn-sm btn-outline btn-success" : "font-bold btn btn-sm btn-ghost"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/listedBooks"
            className={({ isActive }) =>
              isActive ? "text-primary font-bold btn btn-sm btn-outline btn-success" : "font-bold btn btn-sm btn-ghost"
            }
          >
            Listed Book
          </NavLink>

          <NavLink
            to="/ToRead"
            className={({ isActive }) =>
              isActive ? "text-primary font-bold btn btn-sm btn-outline btn-success" : "font-bold btn btn-sm btn-ghost"
            }
          >
            Pages to Read
          </NavLink>

          <NavLink
            to="/Contact"
            className={({ isActive }) =>
              isActive ? "text-primary font-bold btn btn-sm btn-outline btn-success" : "font-bold btn btn-sm btn-ghost"
            }
          >
            Contact
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn bg-[#23BE0A] mr-4 text-white">Sign In</a>
        <a className="btn btn-info text-white">Sign Up</a>
      </div>
    </div>
  );
};
export default Nav;
