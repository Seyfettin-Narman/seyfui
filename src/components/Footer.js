import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
const FooterMenu = (props) => {
    return (
        <div class="FooterMenu">
            {props.children}
        </div>
    );
};
const FooterMenuHeader = (props) => {
    return (
        <div class="FooterMenuHeader">
            {props.children}
        </div>
    );
};
const FooterMenuItem = (props) => {
    return (
        <div class="FooterMenuItem">
            {props.children}
        </div>
    );
};
const FooterMenuLink = (props) => {
    return (
        <Link to={props.to} class="FooterMenuItem">
            {props.children}
        </Link>
    );
};
const FooterList = (props) => {
    return (
        <div class="FooterList">
            {props.children}
        </div>
    );
};
const FooterUpper = (props) => {
    return (
        <div class="FooterUpper">
            {props.children}
        </div>
    );
};

const Footer = (props) => {
    return (
        <div class="Footer">
            {props.children}
        </div>
    );
};

export {Footer, FooterUpper, FooterList, FooterMenu, FooterMenuHeader, FooterMenuItem, FooterMenuLink};
export default Footer;