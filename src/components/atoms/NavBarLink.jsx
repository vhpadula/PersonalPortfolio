// src/components/atoms/NavBarLink.jsx
import PropTypes from "prop-types";

const NavBarLink = ({ href, children, isActive }) => {
    const activeClasses =
        "bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium";
    const inactiveClasses =
        "text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium";

    return (
        <a
            href={href}
            className={isActive ? activeClasses : inactiveClasses}
            aria-current={isActive ? "page" : undefined}
        >
            {children}
        </a>
    );
};

NavBarLink.propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    isActive: PropTypes.bool,
};

export default NavBarLink;
