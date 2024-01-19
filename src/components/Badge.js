const Badge = (props) => {
    const classes = `Badge ${props.color ? "Badge" + props.color : ''} ${props.className ? props.className : ""}`;
    return (
        <span className={classes}>
            {props.children}
        </span>
    )
}
export default Badge;