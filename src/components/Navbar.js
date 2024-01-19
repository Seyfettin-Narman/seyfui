const NavbarLeft = (props) => {
    return (
        <div className="NavbarLeft">
            {props.children}
        </div>
    );
};
const NavbarRight = (props) => {
    return (
        <div className="NavbarRight">
            {props.children}
        </div>
    );
};
const NavbarAuth = (props) => {
    return (
        <div className="NavbarAuth">
            {props.children}
        </div>
    );
};

const Navbar = (props) => {
    return (
        <div className="Navbar">
        {props.children}
        </div>
    );
};

export {Navbar, NavbarLeft, NavbarRight, NavbarAuth};
export default Navbar;