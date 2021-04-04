import React from 'react';
import './NewsBlog.css';
const NewsBlog = ({blog}) => {
    console.log(blog)
    const{headline,topic,news} = blog;
    return (
        
            <div className="rigth_lekha_margin mb-4">
                        <p className="achie">{headline}</p>
                        <p className="arduino1">{topic}</p>
                        <p className="arduino">
                            {news}
                        </p>
            </div>
       
    );
};

export default NewsBlog;