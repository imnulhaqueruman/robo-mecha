import React from 'react';
import background from '../../images/second_page_bg.png';
import ImageBig from '../../images/big.png';
import ImageMd from '../../images/md.png';
import ImageSm from '../../images/sm.png';
import './Work.css';


const Work = () => {
    return (
        <div className="second img-fluid" style={{backgroundImage:`url(${background})`}}>
            <div className="second_page fix container">
                <div className="row">
                    <div className="col-md-7" id="parent">
                        <img src={ImageBig} className="first_pic img-fluid" alt=""/>
                        <img src={ImageMd} className="second_pic img-fluid" alt=""/>
                        <img src={ImageSm}className="third_pic img-fluid" alt=""/>
                    </div>
                    <div className="col-md-5 parent">
                        <article>
                            <p className="what_we">
                                WHAT WE DO
                            </p>
                            <p className="best_place">
                                Best place to show One’s Creativity
                            </p>
                            <p className="the_value">
                                The value of an idea lies in the using of it. Ideas are worthless until we take them out
                                of our head and see what they can do. Sp we help anyone to bring out their idea out of
                                their head and make them to realize the power of their own ideas.
                            </p>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;