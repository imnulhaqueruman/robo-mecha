import React from 'react';
import contentImg from '../../images/we_r.png';
import './Header.css';

const Header = () => {
    return (
        <div className="first_page_para" style={{backgroundImage:`url(${contentImg})`}}>
                <div className="container fix first_page_para_div">
                    <p className="f_header">We are RMA</p>
                    <p className="f_para">Robo Mechatronics Association is <br/>
                        a leading Robotics Association <br/>
                        in Bangladesh. <br/>
                        We Work honestly and sorely <br/>
                        for Our Country & World.</p>
                    <button type="button" className="btn btn-sm btn-primary btn1"><a href="#third_page_connector">OUR
                            STORY</a></button>
                </div>
       
        </div>
    );
};

export default Header;