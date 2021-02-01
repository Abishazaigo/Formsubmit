import './Web.css';
import Menu from './Menu';
import Logo from '../src/Images/image.png';
import {MenuWrapper} from './Menu';
function Header(){
    return (
        <nav className="navbar navbar-expand-sm bg-danger navbar-dark">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3">
                        <img className="logo" src={Logo}/>
                    </div>
                    <div className="col-lg-8 text-white">
                    <MenuWrapper>
                        <Menu label="HOME"/>
                        <Menu label="HERBALIFE"/>
                         <Menu label = "STORE"/>
                         <Menu label = "GALLERY"/>
                         <Menu label = "BLOG"/>
                                <Menu label = "CONTACT US"/>
                    </MenuWrapper>
                    </div>
                    <div className="col-1">
                        <ul className="navbar-nav">
                            <Menu icon="fa fa-facebook"/>
                            <Menu icon="fa fa-youtube"/>
                            <Menu icon="fa fa-linkedin"/>  
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Header;