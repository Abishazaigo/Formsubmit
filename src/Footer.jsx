import './Web.css';
import Icon from '../src/Images/icon.png';
function Footer() {
    return (
        <div>
        <div className="foottop">
            <div className="row">
                <div className="col-2">

                </div>
                <div className="col-3 p-4">
                    <img className="icon" src={Icon}/>
                        <p className="pass1">Internet Marketing Ninjas has mastered the art of creating
                        expert contentthat goes viral, earns trusted links</p>
                        <p></p>
                        <p className="pass1">Internet Marketing Ninjas has mastered the art of creating
                        expert content
                    that goes viral, earns trusted links</p>
                </div>
                <div className="col-3 p-4">
                        <p className="pass2">Contact Us</p>
                        <div className="item">
                            <p><i className="pas material-icons">add_location</i>
                                <span className="pa">No:350, Marketing Ninjas has</span>
                            </p>
                            <p><i className="pas material-icons">local_phone</i>
                                <span className="pa">9845972640</span>
                            </p>
                            <p><i className="pas material-icons">local_post_office</i>
                                <span className="pa">herbal@gmaiil.com</span>
                            </p>
                        </div>
                </div>
                <div className="col-3 p-4">
                        <p className="pass2">Subscribe Us</p>
                        <p className="pass1">Marketing Ninjas has mastered the art of creating expert
                        content that goes viral</p>
                        <button className="btn-success">View Email address ✉</button>
                </div>
                <div className="col-1">

                </div>
            </div>
        </div>
        <div className="bot">
            <p className="com">copyright@ 2020 Herbalife
            </p>
        </div>
        </div>
    )
}

export default Footer;