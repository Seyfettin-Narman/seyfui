const Table = (props) => {
    return (
        <table className="SeyfTablo">
            {props.children}
        </table>
    )
}
const TableBox = (props) => {
    return (
        <div className="TableBox">
            {props.children}
        </div>
    )
}
const TableBoxHeader = (props) => {
    let title = (props.title ? <h1 className="TableBoxHeaderTitle">{props.title}</h1> : "")
    return (
        <div className="TableBoxHeader">
            {title}
            {props.children}
        </div>
    )
}
const TableTr = (props) => {
    return (
        <tr>
            {props.children}
        </tr>
    )
}
const TableTh = (props) => {
    const classes = `${props.className ? props.className : ""}`;
    return (
        <th className={classes}>
            {props.children}
        </th>
    )
}
const TableTd = (props) => {
    const classes = `${props.className ? props.className : ""}`;
    return (
        <td className={classes}>
            {props.children}
        </td>
    )
}
const TableUser = (props) => {
    return (
        <TableTd className="SeyfTabloUser">
            <div className="SeyfTabloUserImage"><img src={props.img} alt="" /></div>
            <div className="SeyfTabloUserInfo">
                <div className="SeyfTabloUserName">{props.name}</div>
                <div className="SeyfTabloUserEmail">{props.email}</div>
            </div>
        </TableTd>
    )
}
const TableInfo = (props) => {
    return (
        <TableTd>
            <div class="SeyfTabloInfo">
                <div class="SeyfTabloInfoLine Highlighted">{props.header}</div>
                <div class="SeyfTabloInfoLine">{props.text}</div>
            </div>
        </TableTd>
    )
}
const TableActions = (props) => {
    return (
        <TableTd className="SeyfTabloActions">
            {props.children}
        </TableTd>
    )
}

export { Table, TableBox, TableBoxHeader, TableTr, TableTh, TableTd, TableUser, TableInfo, TableActions };
export default Table;