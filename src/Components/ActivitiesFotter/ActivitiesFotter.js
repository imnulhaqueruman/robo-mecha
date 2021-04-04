import React from 'react';
import './ActivitiesFotter.css';

const ActivitiesFotter = () => {
    return (
        <div className="second_footer">
        <div className="fix container">
            <div className="row">
                <div className="col-md-3">
                    <div className="fi-rst">
                        <h2 className="eleven float-left">11</h2>
                        <p className="competition comp_one float-left">Competitions <br/>
                            Arranged</p>
                        <div className="clearFix"></div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="second">
                        <h2 className="eleven one float-left">200+</h2>
                        <p className="competition comp_two float-left">Regular <br/>
                            Members</p>
                        <div className="clearFix"></div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="th-ird">
                        <h2 className="eleven float-left">30+</h2>
                        <p className="competition comp_three float-left">Prizes <br/> Achieved</p>
                        <div className="clearFix"></div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="fou-rth">
                        <h2 className="eleven float-left">55+</h2>
                        <p className="competition comp_four float-left">Completed <br/> Projects</p>
                        <div className="clearFix"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default ActivitiesFotter;