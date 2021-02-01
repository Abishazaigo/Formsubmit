import './Web.css';
import Icon from '../src/Images/icon.png';
function Footer() {
    return (
        <div>
        <div class="foottop">
            <div className="row">
                <div className="col-2">

                </div>
                <div className="col-3 p-4">
                    <img class="icon" src={Icon}/>
                        <p class="pass1">Internet Marketing Ninjas has mastered the art of creating
                        expert contentthat goes viral, earns trusted links</p>
                        <p></p>
                        <p class="pass1">Internet Marketing Ninjas has mastered the art of creating
                        expert content
                    that goes viral, earns trusted links</p>
                </div>
                <div className="col-3 p-4">
                        <p class="pass2">Contact Us</p>
                        <div class="item">
                            <p><i className="pas material-icons">add_location</i>
                                <span class="pa">No:350, Marketing Ninjas has</span>
                            </p>
                            <p><i className="pas material-icons">local_phone</i>
                                <span class="pa">9845972640</span>
                            </p>
                            <p><i className="pas material-icons">local_post_office</i>
                                <span class="pa">herbal@gmaiil.com</span>
                            </p>
                        </div>
                </div>
                <div className="col-3 p-4">
                        <p class="pass2">Subscribe Us</p>
                        <p class="pass1">Marketing Ninjas has mastered the art of creating expert
                        content that goes viral</p>
                        <button className="btn-success">View Email address ✉</button>
                </div>
                <div className="col-1">

                </div>
            </div>
        </div>
        <div class="bot">
            <p class="com">copyright@ 2020 Herbalife
            </p>
        </div>
        </div>
    )
}

export default Footer;