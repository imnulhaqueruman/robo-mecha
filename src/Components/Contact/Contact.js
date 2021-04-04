import React from 'react';
import './Contact.css';
import Email from '../../images/email.png';
import Call from '../../images/call.png';
import Location from '../../images/location.png';
const Contact = () => {
    return (
        <div className="sixth_page">
        <div className="fix container">
            <div>
                <h2 className="kit text-center">KEEP IN TOUCH</h2>
            </div>
            <div className="kit_img">
                <iFrame
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.1248196520896!2d91.96887051503695!3d22.46194328523989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30ad2fca34ae5549%3A0x35c88a37b3e90e97!2sChittagong%20University%20of%20Engineering%20and%20Technology%20(CUET)!5e0!3m2!1sen!2sbd!4v1600185658972!5m2!1sen!2sbd"
                    frameborder="0" style={{border:0}} allowFullScreen="" ariaHidden="false" tabIndex="0"
                    className="map_of_cuet"></iFrame>
            </div>
            <div>
                <h2 className="kit_h text-center">Send Us a message</h2>
                <form>
                    <div className="row">
                        <div className="col">
                            <input type="text" class="form-control" placeholder="Name"/>
                        </div>
                        <div className="form-group col">
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email"/>
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Phone"/>
                        </div>

                    </div>

                    <div className="row">
                        <div className="form-group col-md-10">
                            <textarea className="text_form form-control" id="exampleFormControlTextarea1"
                                placeholder="Message"></textarea>
                        </div>
                        <div className="col-md-2"><button type="button" className="btn_kit btn btn-primary">SUBMIT</button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="row icon_address">
                <div className="col-md-4">
                    <div className="float-left">
                        <img src={Email} className="ciao_adios img-fluid" alt=""/>
                    </div>
                    <div className="float-left content_a">
                        <h6 className="icon_add_h">EMAIL</h6>
                        <p className="icon_add_p">rmabd.official@gmial.com</p>
                    </div>
                    <div className="clearfix"></div>
                </div>
                <div className="col-md-4">
                    <div className="float-left">
                        <img src={Call} className="im_done img-fluid" alt=""/>
                    </div>
                    <div className="float-left content_a">
                        <h6 className="icon_add_h">CALL US !</h6>
                        <p className="icon_add_p">+8801741267876, <br/>
                            +8801770187088</p>
                    </div>
                    <div className="clearfix"></div>
                </div>
                <div className="col-md-4">
                    <div className="imdone">
                        <div className="float-left">
                            <img src={Location} className="img-fluid last_of_the_icons" alt=""/>
                        </div>
                        <div className="float-left content_a">
                            <h6 className="icon_add_h">ADDRESS</h6>
                            <p className="icon_add_p">CUET, Chittagong - 4349, <br/>
                                Bangladesh</p>
                        </div>
                    </div>
                    <div class="clearfix"></div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Contact;