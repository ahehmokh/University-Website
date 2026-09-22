import { NavLink, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowUp,
    faBars,
    faXmark
} from "@fortawesome/free-solid-svg-icons";

const Layout = () => {

    // Scroll to top
    const back = () => {
        scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    // Navbar color
    const [color, setColor] = useState(false);

    // Scroll Up button
    const [btn, setBtn] = useState(false);

    // Mobile menu
    const [menuOpen, setMenuOpen] = useState(false);


    useEffect(() => {

        const handleScroll = () => {

            if (window.scrollY > 50) {
                setColor(true);
                setBtn(true);
            } else {
                setColor(false);
                setBtn(false);
            }

        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

    }, []);


    // Close menu
    const closeMenu = () => {
        setMenuOpen(false);
    };


    return (
        <header>

            <div className={`navbar ${color ? "change-color" : ""}`}>

                {/* Logo */}

                <div className="logoimg">
                    <img
                        src="/assets/logo.png"
                        alt="Logo"
                    />
                </div>


                {/* Menu */}

                <div className={`menu ${menuOpen ? "menu-open" : ""}`}>

                    <NavLink
                        to="/"
                        onClick={closeMenu}
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/Program"
                        onClick={closeMenu}
                    >
                        Program
                    </NavLink>

                    <NavLink
                        to="/Aboutus"
                        onClick={closeMenu}
                    >
                        About Us
                    </NavLink>

                    <NavLink
                        to="/Contactus"
                        onClick={closeMenu}
                    >
                        Contact Us
                    </NavLink>

                </div>


                {/* Hamburger */}

                <button
                    className="menu-toggle"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <FontAwesomeIcon
                        icon={menuOpen ? faXmark : faBars}
                    />
                </button>

            </div>


            <main>

                <Outlet />

                {btn && (
                    <div
                        onClick={back}
                        className="btn"
                    >
                        <FontAwesomeIcon
                            icon={faArrowUp}
                            className="arrow-up"
                        />
                    </div>
                )}

            </main>

        </header>
    );
};

export default Layout;