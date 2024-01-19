import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const SidebarItems = (props) => {
    return (
        <div className="SidebarItems">
            {props.children}
        </div>
    )
}
const SidebarItem = (props) => {
    const classes = `SidebarItem ${props.logout ? 'SidebarItemRed' : ''}`;
    return (
        <div className={classes}>
            <Link to={props.to} className="SidebarItemInfo">
                <div className="SidebarItemIcon"><i className={props.icon}></i></div>
                <span className="SideBarItemText">{props.text}</span>
            </Link>
        </div>
    )
}
const SidebarItemDropdown = (props) => {
    const [isActive, setIsActive] = useState(false);
    const handleSidebarItemClick = () => {
        setIsActive(s => !s);
    }
    return (
        <div className={`SidebarItem Dropdown ${isActive ? 'Active' : ''}`}>
            <div className="SidebarItemInfo" onClick={handleSidebarItemClick}>
                <div className="SidebarItemIcon"><i className={props.icon}></i></div>
                <span className="SideBarItemText">{props.text}</span>
                <div className="SidebarItemDropDownIcon"><i className="fa-regular fa-angle-down"></i></div>
                <div className="SidebarItemDropDownCloseIcon"><i className="fa-regular fa-angle-up"></i></div>
            </div>
            <div className="SidebarItemDropDown">
                {props.children}
            </div>
        </div>
    )
}
const SidebarItemDropdownItem = (props) => {
    return (
        <Link to={props.to} className="SidebarItemDropDownItem">{props.children}</Link>
    )
}
const SidebarLogo = (props) => {
    ///
    return (
        <div className="SidebarLogo">
            <img src={props.src} alt="" />
        </div>
    )
}

const Sidebar = (props) => {
    return (
        <div className="SeyfSidebar Sidebar">
            {props.children}
        </div>
    );
};
export { Sidebar, SidebarLogo, SidebarItem, SidebarItemDropdown, SidebarItemDropdownItem, SidebarItems };
export default Sidebar;