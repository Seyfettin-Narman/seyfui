const Boxes = (props) => {
    return (
        <div className="Boxes">
            {props.children}
        </div>
    )
}
const Box = (props) => {
    const classes = `Box ${props.rows ? 'Box' + props.rows : ''} ${props.dashboardbox ? "DashboardBox" : ""} ${props.className ? props.className : ""}`;
    return (
        <div className={classes}>
            {props.children}
        </div>
    )
}
const DashboardBox = (props) => {
    return (
        <Box dashboardbox={true} rows="4">
            {props.children}
        </Box>
    )
}
const DashboardBoxInfo = (props) => {
    return (
        <div className="DashboardBoxLeft">
            <div className="DashboardBoxLeftHeader">{props.header}</div>
            <div className="DashboardBoxLeftContent">{props.content}</div>
        </div>
    )
}
const DashboardBoxIcon = (props) => {
    const classes = `DashboardBoxIcon ${props.color ? 'DashboardBoxIcon' + props.color : ''}`;
    return (
        <div className={classes}><i className={props.icon}></i></div>
    )
}
const AuthPage = (props) => {
    return (
        <div class="AppAuth">
            {props.children}
        </div>
    )
}
const AuthBoxBody = (props) => {
    return (
        <div class="AuthBoxBody">
            {props.children}
        </div>
    )
}
const AuthBoxOther = (props) => {
    return (
        <div class="AuthBoxOther">
            {props.children}
        </div>
    )
}
const LoginBox = (props) => {
    return (
        <div class="LoginBox">
            <div class="AuthBox">
                <div class="AuthBoxHeader">{props.header}</div>
                {props.children}
            </div>
        </div>
    )
}
const RegisterBox = (props) => {
    return (
        <div class="RegisterBox">
            <div class="AuthBox">
                {props.children}
            </div>
        </div>
    )
}
export { Box, Boxes, DashboardBox, DashboardBoxInfo, DashboardBoxIcon, AuthPage, AuthBoxBody, AuthBoxOther, LoginBox, RegisterBox };
export default Box;