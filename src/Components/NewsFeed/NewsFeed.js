import React  from 'react';

import './NewsFeed.css';
const NewsFeed = ({press}) => {
    //console.log(press)
    const{image} = press;
   
   
    return (
        
            <div className="ach_new">
                <img  src={image} className="img-fluid middle_pictures p1 mb-5" alt=""/>
                  
            </div>
           
       
    );
};

export default NewsFeed;