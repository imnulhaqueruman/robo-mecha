import React from 'react';
import ImageIcon1 from '../../images/icon1.png';
import ImageIcon3 from '../../images/icon3.png';
import ImageBtnIcon from '../../images/btn_icon.png';
import ImageBtnIcon2 from '../../images/btn_icon2.png';
import ImageIcon2 from '../../images/icon2.png';
import ImageIcon4 from '../../images/icon4.png';
import './Activities.css';


const Activities = () => {
    return (
        <div className="second_second">
        <div className="fix container second_second_part">
            <div className="row">
                <div className="col-md-6">
                    <div>
                        <img src={ImageIcon1} className="icon1 "alt="" />
                        <h2 className="icon1_h">RoboRace</h2>
                        <p className="icon1_p">We Present the biggest Robotic Competetion ‘RMA Roborace’ in Bangladesh. </p>
                    </div>
                    <div>
                        <img src={ImageIcon3} className="icon1 mt-5" alt=""/>
                        <h2 className="icon1_h">Training Programs</h2>
                        <p className="icon1_p">We give both basic and advanced training program to freshers.</p>
                    </div>
                </div>
                <div className="col-md-1">
                    <img src={ImageBtnIcon} className="btn__icon img-fluid" alt=""/> <br/>
                    <img src={ImageBtnIcon2} className="btn__icon2 img-fluid ml-1" alt=""/>
                </div>
                <div className="col-md-5">
                    <div>
                        <img src={ImageIcon2} className="icon3 "alt=""/>
                        <h2 class="icon1_h"> Success</h2>
                        <p className="icon1_p">We have plenty of success on renowned competetions and project shows both in
                            national and
                            international platform.</p>
                    </div>
                    <div>
                        <img src={ImageIcon4} className="icon3 mt-4" alt=""/>
                        <h2 className="icon1_h">Project Show</h2>
                        <p className="icon1_p">We Present Out Projects in various renowned Competetions, Universities,
                            Government
                            Programs, Digital Fair,etc.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    );
};

export default Activities;