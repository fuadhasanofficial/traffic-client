"use client";
import { Navbar } from "keep-react";
import { MagnifyingGlass, User } from "phosphor-react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import Logo from "../../assets/bg.svg";

const Header = () => {
  const { user, state, dispatch } = useContext(AuthContext);
  console.log(user);
  return (
    <nav className=" w-full mx-auto ">
      <Navbar fluid={true} className="bg-indigo-400">
        <Navbar.Container className="flex items-center justify-between ">
          <Navbar.Container
            tag="ul"
            className="lg:flex hidden items-center justify-between gap-8"
          >
            <Link to="/" className="alpona">
              {state.english ? "Home" : "হোম "}
            </Link>
            <Navbar.Link linkName="Best Sellers" />
          </Navbar.Container>
          <Navbar.Brand>
            <img
              className="h-full"
              src={Logo}
              alt="keep"
              width="100"
              height="40"
            />
          </Navbar.Brand>

          <Navbar.Collapse collapseType="sidebar">
            <Navbar.Container tag="ul" className="flex flex-col gap-5">
              <Navbar.Link linkName="Home" />
              <Navbar.Link linkName="Projects" />
              <Navbar.Link linkName="Blogs" />
              <Navbar.Link linkName="News" />
              <Navbar.Link linkName="Resources" />
            </Navbar.Container>
          </Navbar.Collapse>

          <Navbar.Container className="flex items-center gap-3">
            <Navbar.Container
              tag="ul"
              className="lg:flex hidden items-center justify-between gap-5"
            >
              <Navbar.Link
                icon={<MagnifyingGlass size={20} color="#444" />}
                iconAnimation={false}
              />
              <Navbar.Link
                icon={<User size={20} color="#444" />}
                iconAnimation={false}
              />
              <button
                onClick={() => {
                  console.log("ok");
                  dispatch({
                    type: "CHANGE_LANG",
                  });
                }}
              >
                {state.english ? "বাংলা " : "English"}
              </button>
            </Navbar.Container>

            <Navbar.Toggle />
          </Navbar.Container>
        </Navbar.Container>
      </Navbar>
    </nav>
  );
};

export default Header;
