// src/components/organisms/NavBar.jsx
import PropTypes from "prop-types";
import NavBarLink from "../atoms/NavBarLink.jsx";

const NavBar = ({ links }) => {
    return (
        <div className="ml-10 flex items-baseline space-x-4">
            {links.map((link) => (
                <NavBarLink
                    key={link.text}
                    href={link.href}
                    isActive={link.current}
                >
                    {link.text}
                </NavBarLink>
            ))}
        </div>
    );
};

NavBar.propTypes = {
    links: PropTypes.arrayOf(
        PropTypes.shape({
            href: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            current: PropTypes.bool,
        })
    ).isRequired,
};

export default NavBar;
