function MenuWrapper(props){
    return (
        <div className="navbar-collapse collapse justify-content-center order-2">
            <ul className="navbar-nav">
                {props.children}
            </ul>
        </div>
    );
}

function Menu(props){
    return(
        <>
        <li className="nav-item">
            <a className="nav-link" href="#">{props.label}</a>
        </li>
        <li className="nav-item">
        <a href="#" className={props.icon}></a>
        </li>
        </>
    )
}
export default Menu;
export {MenuWrapper};