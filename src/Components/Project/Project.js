import React from 'react';
import Robot from '../../images/robot-wallpaper-4.jpg';
import creative from '../../images/cc.png';
import project from '../../images/pm.png';
import digital from '../../images/dd.png';
import research from '../../images/rd.png';
import './Project.css';

const Project = () => {
    return (
        <div className="fourth_page" style={{backgroundImage:`url(${Robot})`}}>
        <div className="fix container">
            <div className="our_services_div">
                <h2 className="our_services text-center d-inline-block">OUR SERVICES</h2>
            </div>
            <div className="row our_services_footer_four_images">
                <div className="col-md-6 cc">
                    <img src={creative} className="img_cc img-fluid" alt=""/>
                    <div className="cc_wraper">
                        <h4 className="creat">Creative</h4>
                        <h2 className="consult">Counsultancy</h2>
                    </div>
                </div>
                <div className="col-md-3 pm_div">
                    <div className="pm_wrapper">
                        <img src={project} className="img_pm img_pm1 img-fluid" alt=""/>
                        <div className="pm">
                            <h5 className="pm_h pm_h1">Project <br/> Making</h5>
                        </div>
                    </div>
                    <div className="pm_wrapper dd">
                        <img src={digital} className="img_pm img_dd img-fluid" alt=""/>
                        <div className="pm">
                            <h5 className="pm_h pm_dd h5">DIGITAL</h5>
                            <h4 className="pm_h pm_dd h4">DESIGNING</h4>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 rd-wrapper">
                    <img src={research} className="img_rd img-fluid" alt=""/>
                    <div className="rd">
                        <h5 className="rd_h5">Research &</h5>
                        <h4 className="rd_h4">Development</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Project;