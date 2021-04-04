import React, { useEffect, useState } from 'react';
import fakeData from '../FakeData/FakeData.json';
import newsBgImg from '../../images/Latest_news_bg.png';
import './News.css';
import NewsFeed from '../NewsFeed/NewsFeed';
import NewsBlog from '../NewsBlog/NewsBlog';

const News = () => {
    const[news,setNews] = useState([]);
    const[blogs,setBlogs] = useState([])
    useEffect(() =>{
        setNews(fakeData)
        setBlogs(fakeData)
    },[])
    return (
        <div  className="fifth_page" style={{backgroundImage:`url(${newsBgImg})`}}>
            <div className="fix container">
                <div className="row">
                    <div className="col-md-3 left_content">
                        <h5 className="get_update">Get Updated</h5>
                        <h1 className="latest_news">LATEST
                            NEWS&#10078;</h1>
                    </div>
                    <div className="col-md-3 middle_pics">
                       {
                           news.map(press => <NewsFeed press={press}></NewsFeed>)    
                       }
                    </div>
                    <div className="col-md-5 right_lekha">
                        {
                            blogs.map(blog => <NewsBlog blog={blog}></NewsBlog>)
                        }
                    </div>

                </div>
                <div class="row button_div">
                   <button type="button" class="button_read_blog btn btn-primary m-auto">READ our BLOG</button>
                </div>
            </div>
        </div>
    );
};

export default News;